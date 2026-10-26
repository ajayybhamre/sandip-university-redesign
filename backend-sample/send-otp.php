<?php
require __DIR__ . '/otp_helpers.php';
otp_headers();

$phone = normalize_phone((string)(body()['phone'] ?? ''));
if (!$phone) respond(false, 'Please enter a valid mobile number.', 422);

$pdo = otp_db();

// rate limit: a few OTPs per number per hour
$st = $pdo->prepare('SELECT COUNT(*) FROM otp_requests WHERE phone = ? AND created_at > (NOW() - INTERVAL 1 HOUR)');
$st->execute([$phone]);
if ((int)$st->fetchColumn() >= OTP_MAX_SENDS_PER_HOUR) {
    respond(false, 'Too many OTP requests. Please try again after some time.', 429);
}

$otp = (string) random_int(100000, 999999);
$pdo->prepare('INSERT INTO otp_requests (phone, otp_hash, expires_at, ip)
               VALUES (?, ?, (NOW() + INTERVAL ' . OTP_VALID_MINUTES . ' MINUTE), ?)')
    ->execute([$phone, password_hash($otp, PASSWORD_DEFAULT), $_SERVER['REMOTE_ADDR'] ?? null]);

if (!send_sms($phone, "Your Sandip University verification code is $otp. It is valid for " . OTP_VALID_MINUTES . " minutes.")) {
    respond(false, 'Could not send the OTP right now. Please try again.', 502);
}
respond(true, 'OTP sent.');

<?php
require __DIR__ . '/otp_helpers.php';
otp_headers();

$in    = body();
$phone = normalize_phone((string)($in['phone'] ?? ''));
$otp   = preg_replace('/\D/', '', (string)($in['otp'] ?? ''));
if (!$phone || strlen($otp) !== 6) respond(false, 'Invalid request.', 422);

$pdo = otp_db();

// newest, unexpired, not-yet-verified OTP for this number
$st = $pdo->prepare('SELECT id, otp_hash, attempts FROM otp_requests
                      WHERE phone = ? AND verified_at IS NULL AND expires_at > NOW()
                      ORDER BY id DESC LIMIT 1');
$st->execute([$phone]);
$row = $st->fetch();
if (!$row) respond(false, 'This OTP has expired. Please request a new one.', 410);
if ((int)$row['attempts'] >= OTP_MAX_ATTEMPTS) respond(false, 'Too many wrong attempts. Please request a new OTP.', 429);

if (!password_verify($otp, $row['otp_hash'])) {
    $pdo->prepare('UPDATE otp_requests SET attempts = attempts + 1 WHERE id = ?')->execute([$row['id']]);
    respond(false, 'That OTP is not correct. Please check and try again.', 401);
}

$token = bin2hex(random_bytes(32));
$pdo->prepare('UPDATE otp_requests SET verified_at = NOW(), verified_token = ? WHERE id = ?')
    ->execute([$token, $row['id']]);
respond(true, 'Verified.', 200, ['token' => $token]);

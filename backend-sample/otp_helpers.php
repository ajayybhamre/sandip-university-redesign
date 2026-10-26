<?php
/* SAMPLE — adapt to your project. Put the three files next to submit-enquiry.php,
   i.e. in  university-backend/api/ . Review before using in production. */

// ---- 1. EDIT: database connection (reuse your existing one if you have it) ----
function otp_db(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        $pdo = new PDO('mysql:host=localhost;dbname=YOUR_DB;charset=utf8mb4', 'YOUR_USER', 'YOUR_PASSWORD', [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }
    return $pdo;
}

// ---- 2. EDIT: the website origin allowed to call this API ----
const OTP_ALLOWED_ORIGIN = 'http://localhost:5173';   // e.g. https://www.yoursite.edu.in

// ---- 3. DEV MODE: true = the OTP is only written to the PHP error log, no SMS is sent.
//         MUST be false in production (and send_sms() below must be filled in).
const OTP_DEV_MODE = true;

const OTP_VALID_MINUTES = 5;
const OTP_MAX_ATTEMPTS  = 5;
const OTP_MAX_SENDS_PER_HOUR = 5;

function otp_headers(): void {
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: ' . OTP_ALLOWED_ORIGIN);
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') { http_response_code(204); exit; }
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { respond(false, 'Method not allowed', 405); }
}

function respond(bool $ok, string $message = '', int $code = 200, array $extra = []): void {
    http_response_code($code);
    echo json_encode(array_merge(['status' => $ok, 'message' => $message], $extra));
    exit;
}

function body(): array {
    $d = json_decode(file_get_contents('php://input'), true);
    return is_array($d) ? $d : [];
}

/** Keep digits and a leading +; accepts 10-digit Indian numbers or +<country><number>. */
function normalize_phone(string $raw): ?string {
    $p = preg_replace('/[^\d+]/', '', trim($raw));
    if (preg_match('/^[6-9]\d{9}$/', $p)) return $p;              // Indian mobile
    if (preg_match('/^\+\d{8,15}$/', $p)) return $p;              // international
    return null;
}

// ---- 4. EDIT: plug in your SMS provider (MSG91, Twilio, Fast2SMS, ...) ----
function send_sms(string $phone, string $text): bool {
    if (OTP_DEV_MODE) { error_log("[DEV OTP] to $phone: $text"); return true; }
    // Example shape only:
    // $ch = curl_init('https://YOUR-SMS-PROVIDER/send');
    // curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true,
    //   CURLOPT_POSTFIELDS => http_build_query(['to' => $phone, 'message' => $text, 'key' => 'YOUR_KEY'])]);
    // $ok = curl_exec($ch) !== false && curl_getinfo($ch, CURLINFO_HTTP_CODE) < 300;
    // curl_close($ch); return $ok;
    return false;   // not configured
}

/** Call from submit-enquiry.php before saving the enquiry. Marks the token as used. */
function otp_token_is_valid(PDO $pdo, string $phone, string $token): bool {
    if ($token === '') return false;
    $st = $pdo->prepare(
        'SELECT id FROM otp_requests
          WHERE phone = ? AND verified_token = ? AND used_at IS NULL
            AND verified_at > (NOW() - INTERVAL 15 MINUTE) LIMIT 1');
    $st->execute([$phone, $token]);
    $row = $st->fetch();
    if (!$row) return false;
    $pdo->prepare('UPDATE otp_requests SET used_at = NOW() WHERE id = ?')->execute([$row['id']]);
    return true;
}

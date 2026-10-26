# OTP backend (SAMPLE)

These files are a starting point — they are NOT part of your site yet and were not run
against your database or an SMS provider. Review them first.

1. Run `otp_tables.sql` in your database.
2. Copy `otp_helpers.php`, `send-otp.php`, `verify-otp.php` into `university-backend/api/`.
3. Edit the 3 things marked EDIT in `otp_helpers.php`: DB login, allowed website origin, SMS provider.
   While `OTP_DEV_MODE = true` no SMS is sent: the code is written to the PHP error log so you
   can test the flow. Set it to `false` before going live.
4. In your existing `submit-enquiry.php`, before saving the enquiry, add:

       require __DIR__ . '/otp_helpers.php';
       $in = json_decode(file_get_contents('php://input'), true) ?: [];
       if (!otp_token_is_valid(otp_db(), normalize_phone($in['phone'] ?? '') ?? '', $in['otp_token'] ?? '')) {
           echo json_encode(['status' => false, 'message' => 'Mobile number not verified.']); exit;
       }

   Without this step, anyone can still call submit-enquiry.php directly and skip the OTP.

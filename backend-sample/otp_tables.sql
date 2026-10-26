-- Run once in your database.
CREATE TABLE IF NOT EXISTS otp_requests (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  phone          VARCHAR(20)  NOT NULL,
  otp_hash       VARCHAR(255) NOT NULL,
  attempts       TINYINT      NOT NULL DEFAULT 0,
  expires_at     DATETIME     NOT NULL,
  verified_token CHAR(64)     NULL,
  verified_at    DATETIME     NULL,
  used_at        DATETIME     NULL,
  ip             VARCHAR(45)  NULL,
  created_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_phone_created (phone, created_at),
  INDEX idx_token (verified_token)
);

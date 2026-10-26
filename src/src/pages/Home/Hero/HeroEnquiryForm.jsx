import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import api from "../../../api/api";

/* ------------------------------------------------------------------
   Hero enquiry form with mobile-number OTP verification.

   Flow:  [country code][mobile number][Send OTP]
          [Enter OTP ............................]   <- below the mobile number
          -> OTP is checked automatically once 6 digits are typed
          -> Submit stays disabled until the number is verified

   Backend (see backend-sample/ in the zip):
     POST send-otp.php    { phone }              -> { status: true }
     POST verify-otp.php  { phone, otp }         -> { status: true, token }
     POST submit-enquiry.php { ..., otp_token }  -> { status: true }
   Until those two PHP files exist the form shows "could not send OTP".
   Set OTP_REQUIRED = false to let people submit without verifying.
------------------------------------------------------------------- */
const OTP_REQUIRED = true;
const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;

const COUNTRY_CODES = ["+91", "+971", "+977", "+94", "+880", "+1", "+44"];

const field =
  "w-full rounded-xl border border-white/30 bg-white/80 px-4 py-3 text-[15px] text-slate-900 " +
  "placeholder:text-slate-500 shadow-sm backdrop-blur-sm transition " +
  "focus:border-[#C8102E] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/60 " +
  "disabled:cursor-not-allowed disabled:opacity-60";

export default function HeroEnquiryForm() {
  const [form, setForm] = useState({ full_name: "", email: "", cc: "+91", phone: "", consent: false });
  const [otp, setOtp] = useState("");
  const [otpState, setOtpState] = useState("idle"); // idle | sending | sent | verifying | verified
  const [otpToken, setOtpToken] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const otpInput = useRef(null);

  const fullPhone = form.cc === "+91" ? form.phone : `${form.cc}${form.phone}`;
  const phoneOk = form.cc === "+91" ? /^[6-9]\d{9}$/.test(form.phone) : form.phone.length >= 6;
  const verified = otpState === "verified";

  /* resend countdown */
  useEffect(() => {
    if (cooldown <= 0) return undefined;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  const resetOtp = () => {
    setOtp("");
    setOtpState("idle");
    setOtpToken("");
    setCooldown(0);
  };

  const onChange = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const onPhone = (e) => {
    const max = form.cc === "+91" ? 10 : 15;
    setForm((f) => ({ ...f, phone: e.target.value.replace(/\D/g, "").slice(0, max) }));
    if (otpState !== "idle") resetOtp(); // number changed -> old OTP no longer valid
    if (status === "error") setMessage("");
  };

  /* ---------- send / resend OTP ---------- */
  const sendOtp = async () => {
    if (!phoneOk || cooldown > 0 || otpState === "sending" || verified) return;
    setStatus("idle");
    setMessage("");
    setOtp("");
    setOtpState("sending");
    try {
      const res = await api.post("send-otp.php", { phone: fullPhone });
      if (res?.data?.status) {
        setOtpState("sent");
        setCooldown(RESEND_SECONDS);
        setTimeout(() => otpInput.current?.focus(), 50);
      } else {
        setOtpState("idle");
        setStatus("error");
        setMessage(res?.data?.message || "Could not send the OTP. Please try again.");
      }
    } catch {
      setOtpState("idle");
      setStatus("error");
      setMessage("Could not send the OTP right now. Please try again in a moment.");
    }
  };

  /* ---------- verify OTP (runs automatically at 6 digits) ---------- */
  const verifyOtp = async (code) => {
    setOtpState("verifying");
    setMessage("");
    try {
      const res = await api.post("verify-otp.php", { phone: fullPhone, otp: code });
      if (res?.data?.status) {
        setOtpState("verified");
        setOtpToken(res.data.token || "");
        setStatus("idle");
      } else {
        setOtpState("sent");
        setOtp("");
        setStatus("error");
        setMessage(res?.data?.message || "That OTP is not correct. Please check and try again.");
        setTimeout(() => otpInput.current?.focus(), 50);
      }
    } catch {
      setOtpState("sent");
      setStatus("error");
      setMessage("Could not verify the OTP right now. Please try again.");
    }
  };

  const onOtp = (e) => {
    const code = e.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH);
    setOtp(code);
    if (status === "error") setMessage("");
    if (code.length === OTP_LENGTH && otpState === "sent") verifyOtp(code);
  };

  /* ---------- submit enquiry ---------- */
  const submit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    if (!phoneOk) {
      setStatus("error");
      setMessage("Please enter a valid mobile number.");
      return;
    }
    if (OTP_REQUIRED && !verified) {
      setStatus("error");
      setMessage("Please verify your mobile number with the OTP first.");
      return;
    }
    if (!form.consent) {
      setStatus("error");
      setMessage("Please tick the consent box to continue.");
      return;
    }

    setStatus("loading");
    setMessage("");
    try {
      const res = await api.post("submit-enquiry.php", {
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: fullPhone,
        course: "General enquiry",
        message: "Submitted from the home page hero form.",
        otp_token: otpToken,
      });

      if (res?.data?.status) {
        setStatus("success");
        setMessage("Thank you! Our admission counsellor will contact you shortly.");
        setForm({ full_name: "", email: "", cc: "+91", phone: "", consent: false });
        resetOtp();
      } else {
        setStatus("error");
        setMessage(res?.data?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not send your enquiry. Please try again in a moment.");
    }
  };

  const otpButtonLabel = () => {
    if (verified) return "Verified";
    if (otpState === "sending") return "Sending…";
    if (cooldown > 0) return `Resend ${cooldown}s`;
    if (otpState === "sent" || otpState === "verifying") return "Resend OTP";
    return "Send OTP";
  };

  const otpButtonDisabled =
    verified || !phoneOk || cooldown > 0 || otpState === "sending" || otpState === "verifying";

  return (
    <form
      onSubmit={submit}
      aria-label="Admission enquiry form"
      className="w-full rounded-3xl border border-white/25 bg-white/10 p-5 text-white shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6"
    >
      <h2 className="mb-4 text-center text-xl font-bold tracking-tight">Enquiry Form</h2>

      {status === "success" ? (
        <div role="status" className="flex flex-col items-center gap-3 py-10 text-center">
          <CheckCircle2 className="h-12 w-12 text-emerald-300" />
          <div className="text-base font-semibold">{message}</div>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setMessage("");
            }}
            className="mt-1 text-sm font-semibold underline underline-offset-4 hover:text-rose-200"
          >
            Submit another enquiry
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <label className="block">
            <span className="sr-only">Full name</span>
            <input
              type="text"
              required
              autoComplete="name"
              placeholder="Full Name *"
              value={form.full_name}
              onChange={onChange("full_name")}
              className={field}
            />
          </label>

          <label className="block">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={onChange("email")}
              className={field}
            />
          </label>

          {/* mobile number, with Send OTP on the right */}
          <div className="flex gap-2">
            <label className="shrink-0">
              <span className="sr-only">Country code</span>
              <select
                value={form.cc}
                disabled={verified}
                onChange={(e) => {
                  setForm((f) => ({ ...f, cc: e.target.value, phone: "" }));
                  resetOtp();
                }}
                className={`${field} w-[80px] px-2`}
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="min-w-0 flex-1">
              <span className="sr-only">Mobile number</span>
              <input
                type="tel"
                required
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="Mobile Number *"
                value={form.phone}
                readOnly={verified}
                onChange={onPhone}
                className={field}
              />
            </label>

            <button
              type="button"
              onClick={sendOtp}
              disabled={otpButtonDisabled}
              aria-live="polite"
              className={`flex shrink-0 items-center justify-center gap-1.5 rounded-xl px-3.5 text-sm font-bold shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed ${
                verified
                  ? "bg-emerald-500 text-white"
                  : "bg-[#C8102E] text-white hover:bg-[#A00C24] disabled:opacity-60"
              }`}
            >
              {otpState === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
              {verified && <ShieldCheck className="h-4 w-4" />}
              <span className="whitespace-nowrap">{otpButtonLabel()}</span>
            </button>
          </div>

          {/* OTP, below the mobile number */}
          <div className="relative">
            <label className="block">
              <span className="sr-only">Enter OTP</span>
              <input
                ref={otpInput}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={OTP_LENGTH}
                placeholder={otpState === "idle" || otpState === "sending" ? "Enter OTP (tap Send OTP first)" : "Enter OTP"}
                value={otp}
                disabled={otpState === "idle" || otpState === "sending" || verified}
                onChange={onOtp}
                className={`${field} tracking-[0.35em] placeholder:tracking-normal`}
              />
            </label>
            {otpState === "verifying" && (
              <Loader2 className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin text-slate-500" />
            )}
            {verified && (
              <CheckCircle2 className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-600" />
            )}
          </div>

          <div aria-live="polite" className="min-h-[1.25rem] text-[13px] font-medium">
            {status === "error" && message ? (
              <span className="text-rose-200">{message}</span>
            ) : verified ? (
              <span className="text-emerald-200">Mobile number verified.</span>
            ) : otpState === "sent" || otpState === "verifying" ? (
              <span className="text-white/80">OTP sent to {fullPhone}. Enter the {OTP_LENGTH} digits.</span>
            ) : null}
          </div>

          <label className="flex cursor-pointer items-start gap-2.5">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={onChange("consent")}
              className="mt-1 h-4 w-4 shrink-0 accent-[#C8102E]"
            />
            <span className="text-[11px] leading-snug text-white/80">
              By submitting this form, I consent to receive communications from the University
              through WhatsApp, SMS, email, phone calls and other channels, even if my number is
              registered on DND/NDNC.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "loading" || (OTP_REQUIRED && !verified)}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#C8102E] py-3.5 text-base font-bold shadow-lg shadow-black/25 transition hover:bg-[#A00C24] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              <>
                Submit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      )}
    </form>
  );
}

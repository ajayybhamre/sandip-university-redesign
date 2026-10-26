import { useEffect, useId, useState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import api from "../../../api/api";

const COUNTRY_CODES = ["+91", "+1", "+44", "+61", "+971", "+977", "+880", "+94", "+234"];
const EMPTY_FORM = { full_name: "", email: "", country_code: "+91", phone: "", otp: "" };

/*
  The enquiry form used in the hero and in the enquiry section.
  It posts the same fields as the existing Popup to submit-enquiry.php,
  and only shows the success message when the server confirms it.
*/
export default function EnquiryForm() {
  const uid = useId();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | success | error
  const [otpState, setOtpState] = useState("idle"); // idle | sending | sent | error
  const [wait, setWait] = useState(0); // resend countdown (seconds)

  useEffect(() => {
    if (wait <= 0) return;
    const t = setTimeout(() => setWait((w) => w - 1), 1000);
    return () => clearTimeout(t);
  }, [wait]);

  // Asks the server to text an OTP. Needs a send-otp.php endpoint on your backend.
  const getOtp = async () => {
    if (!/^\d{10}$/.test(formData.phone)) {
      setErrors((er) => ({ ...er, phone: "Please enter a 10-digit phone number." }));
      return;
    }
    setOtpState("sending");
    try {
      const res = await api.post("send-otp.php", { country_code: formData.country_code, phone: formData.phone });
      if (res.data.status) { setOtpState("sent"); setWait(30); } else setOtpState("error");
    } catch (e) {
      console.error(e);
      setOtpState("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({
      ...f,
      [name]: name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : name === "otp" ? value.replace(/\D/g, "").slice(0, 6) : value,
    }));
    setErrors((er) => ({ ...er, [name]: undefined }));
    if (state === "error") setState("idle");
  };

  const validate = () => {
    const er = {};
    if (!formData.full_name.trim()) er.full_name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) er.email = "Please enter a valid email address.";
    if (!/^\d{10}$/.test(formData.phone)) er.phone = "Please enter a 10-digit phone number.";
    if (!consent) er.consent = "Please agree to the consent to continue.";
    return er;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;

    setState("sending");
    try {
      const response = await api.post("submit-enquiry.php", formData);
      if (response.data.status) {
        setFormData(EMPTY_FORM);
        setConsent(false);
        setState("success");
      } else {
        setState("error");
      }
    } catch (error) {
      console.error(error);
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="hp-enquiry__done" role="status">
        <CheckCircle2 aria-hidden="true" />
        <p>Thank you! Your enquiry has been submitted.</p>
        <button type="button" className="hp-link" onClick={() => setState("idle")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = (name) => ({
    id: `${uid}-${name}`,
    name,
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-err` : undefined,
  });
  const err = (name) =>
    errors[name] ? (
      <span id={`${uid}-${name}-err`} className="hp-field__err" role="alert">{errors[name]}</span>
    ) : null;

  return (
    <form className="hp-enquiry__form" onSubmit={handleSubmit} noValidate>
      <div className="hp-field">
        <label htmlFor={`${uid}-full_name`}>Full Name *</label>
        <input {...field("full_name")} type="text" value={formData.full_name} onChange={handleChange} autoComplete="name" placeholder="Full Name *" required />
        {err("full_name")}
      </div>
      <div className="hp-field">
        <label htmlFor={`${uid}-email`}>Email Address *</label>
        <input {...field("email")} type="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder="Email Address *" required />
        {err("email")}
      </div>
      <div className="hp-field">
        <label htmlFor={`${uid}-phone`}>Mobile Number *</label>
        <div className="hp-phone">
          <select
            name="country_code"
            value={formData.country_code}
            onChange={handleChange}
            aria-label="Country code"
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input {...field("phone")} type="tel" value={formData.phone} onChange={handleChange} inputMode="numeric" autoComplete="tel-national" maxLength={10} placeholder="Mobile Number *" required />
          <button type="button" className="hp-otpbtn" onClick={getOtp} disabled={otpState === "sending" || wait > 0}>
            {otpState === "sending" ? "Sending…" : wait > 0 ? `Resend ${wait}s` : otpState === "sent" ? "Resend OTP" : "Get OTP"}
          </button>
        </div>
        {err("phone")}
        {otpState === "sent" && <span className="hp-otpmsg" role="status">OTP sent to your mobile number.</span>}
        {otpState === "error" && <span className="hp-field__err" role="alert">Couldn’t send the OTP. Please try again.</span>}
      </div>
      <div className="hp-field">
        <label htmlFor={`${uid}-otp`}>Enter OTP</label>
        <input {...field("otp")} type="text" value={formData.otp} onChange={handleChange} inputMode="numeric" autoComplete="one-time-code" maxLength={6} placeholder="Enter OTP" />
      </div>

      <div className="hp-check">
        <label>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => { setConsent(e.target.checked); setErrors((x) => ({ ...x, consent: undefined })); }}
            aria-invalid={errors.consent ? "true" : undefined}
            aria-describedby={errors.consent ? `${uid}-consent-err` : undefined}
          />
          <span>By submitting this form, I consent to receive communications from the University through WhatsApp, SMS, email, phone calls, and other channels, even if my number is registered on DND/NDNC.</span>
        </label>
        {errors.consent && <span id={`${uid}-consent-err`} className="hp-field__err" role="alert">{errors.consent}</span>}
      </div>

      <button type="submit" className="hp-btn hp-btn--primary hp-enquiry__submit" disabled={state === "sending"}>
        {state === "sending" ? (
          <>
            <Loader2 className="hp-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            Submit
            <ArrowRight aria-hidden="true" />
          </>
        )}
      </button>
      {state === "error" && (
        <p className="hp-enquiry__error" role="alert">
          We couldn’t submit your enquiry. Please try again, or call 1800 212 2714.
        </p>
      )}
    </form>
  );
}

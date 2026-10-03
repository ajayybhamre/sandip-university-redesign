import { useRef, useState } from "react";
import { HiOutlineIdentification, HiOutlineCalendarDays } from "react-icons/hi2";

const inputClass =
  "w-full rounded-xl border bg-transparent pl-12 pr-5 py-3 sm:py-4 text-gray-900 dark:text-white " +
  "placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors";

/* dd-mm-yyyy -> true only for a real calendar date */
const isValidDob = (value) => {
  const m = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value);
  if (!m) return false;
  const [d, mo, y] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const dt = new Date(y, mo - 1, d);
  return (
    y >= 1950 &&
    dt <= new Date() &&
    dt.getFullYear() === y &&
    dt.getMonth() === mo - 1 &&
    dt.getDate() === d
  );
};

/* yyyy-mm-dd (native date picker) -> dd-mm-yyyy */
const isoToDob = (iso) => {
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${d}-${m}-${y}` : "";
};

const todayIso = () => new Date().toISOString().slice(0, 10);

/* Types "05122003" as "05-12-2003" */
const maskDob = (raw) => {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  const parts = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4)];
  return parts.filter(Boolean).join("-");
};

/*
  Redesigned lookup form. It does not fetch anything itself: after validation the browser
  submits the form (POST, new tab) to the university portal, which returns the result.
*/
export default function LookupForm({
  action,
  method = "POST",
  prnField,
  dobField,          // omit for PRN-only forms
  submitLabel = "View Result",
}) {

  const [prn, setPrn] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState({});
  const pickerRef = useRef(null);

  const openPicker = () => {
    const el = pickerRef.current;
    if (!el) return;
    try {
      el.showPicker();
    } catch {
      el.focus();
      el.click();
    }
  };

  const handleSubmit = (e) => {
    const next = {};
    if (!/^\d{12}$/.test(prn)) {
      next.prn = "Enter your 12-digit PRN.";
    }
    if (dobField && !isValidDob(dob)) {
      next.dob = "Enter a valid date of birth as dd-mm-yyyy.";
    }
    setErrors(next);
    if (Object.keys(next).length > 0) e.preventDefault();
    /* valid: let the browser submit the form to the portal */
  };

  return (
    <form
      action={action}
      method={method}
      target="_blank"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 max-w-xl"
    >

      <div>
        <label htmlFor="prn" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
          PRN
        </label>
        <div className="relative">
          <HiOutlineIdentification className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-600" />
          <input
            id="prn"
            name={prnField}
            type="text"
            value={prn}
            onChange={(e) => {
                setPrn(e.target.value.replace(/\D/g, "").slice(0, 12));
                setErrors((prev) => ({ ...prev, prn: undefined }));
              }}
            placeholder="Enter your 12-digit PRN"
            inputMode="numeric"
            maxLength={12}
            autoComplete="off"
            aria-invalid={Boolean(errors.prn)}
            className={`${inputClass} ${errors.prn ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
          />
        </div>
        {errors.prn && <p className="mt-2 text-xs text-red-600">{errors.prn}</p>}
      </div>

      {dobField && (
        <div>
          <label htmlFor="dob" className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
            Date of Birth
          </label>
          <div className="relative">
            <input
              id="dob"
              name={dobField}
              type="text"
              inputMode="numeric"
              value={dob}
              onChange={(e) => {
                setDob(maskDob(e.target.value));
                setErrors((prev) => ({ ...prev, dob: undefined }));
              }}
              placeholder="dd-mm-yyyy"
              maxLength={10}
              autoComplete="off"
              aria-invalid={Boolean(errors.dob)}
              className={`${inputClass} !pl-14 ${errors.dob ? "border-red-500" : "border-gray-300 dark:border-gray-700"}`}
            />

            {/* Calendar button on the left opens the date picker */}
            <button
              type="button"
              onClick={openPicker}
              aria-label="Choose date of birth from calendar"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center
                         text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <HiOutlineCalendarDays className="w-5 h-5" />
            </button>

            {/* Native picker, kept invisible; its value fills the text field */}
            <input
              ref={pickerRef}
              type="date"
              tabIndex={-1}
              aria-hidden="true"
              min="1950-01-01"
              max={todayIso()}
              onChange={(e) => {
                setDob(isoToDob(e.target.value));
                setErrors((prev) => ({ ...prev, dob: undefined }));
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 opacity-0 pointer-events-none"
            />
          </div>
          {errors.dob && <p className="mt-2 text-xs text-red-600">{errors.dob}</p>}
        </div>
      )}

      <button
        type="submit"
        className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-red-600 hover:bg-red-700
                   text-white text-sm font-semibold transition-colors"
      >
        {submitLabel}
      </button>

    </form>
  );
}

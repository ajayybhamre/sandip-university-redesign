import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaBullhorn,
  FaRegCommentDots,
} from "react-icons/fa";

/* ---------- Quick-link targets: edit these in one place ---------- */
const APPLY_PATH = "/apply";
const ENQUIRE_PATH = "/contact";
const CALL_HREF = "tel:18002122714";
// TODO: replace with the official admission WhatsApp number (country code + number, no "+")
const WHATSAPP_HREF = "https://wa.me/919999999999";

/* Icon-only round buttons. The label slides out on hover / keyboard focus. */
const iconActions = [
  {
    label: "Apply Now",
    icon: FaBullhorn,
    to: APPLY_PATH,
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    label: "Call Us",
    icon: FaPhoneAlt,
    href: CALL_HREF,
    color: "bg-[#0B2346] hover:bg-[#12346a]",
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: WHATSAPP_HREF,
    external: true,
    color: "bg-[#25D366] hover:bg-[#1ebe5a]",
  },
  {
    label: "Enquire Now",
    icon: FaRegCommentDots,
    to: ENQUIRE_PATH,
    color: "bg-slate-700 hover:bg-slate-800",
  },
];

const base =
  "group flex items-center h-10 rounded-full text-white shadow-lg " +
  "transition-colors duration-200 focus:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-red-600";

const FloatingAction = () => {
  return (
    <nav
      aria-label="Quick links"
      className="fixed right-3 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-2"
    >
      {/* Icon-only round buttons: label reveals on hover/focus */}
      {iconActions.map(({ label, icon: Icon, href, to, external, color }) => {
        const content = (
          <>
            <span
              className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap text-xs font-medium
                         transition-all duration-300
                         group-hover:max-w-[110px] group-hover:opacity-100 group-hover:pl-4
                         group-focus-visible:max-w-[110px] group-focus-visible:opacity-100 group-focus-visible:pl-4"
            >
              {label}
            </span>
            <span className="w-10 h-10 shrink-0 flex items-center justify-center">
              <Icon className="text-[15px]" aria-hidden="true" />
            </span>
          </>
        );

        return to ? (
          <Link key={label} to={to} aria-label={label} className={`${base} ${color}`}>
            {content}
          </Link>
        ) : (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className={`${base} ${color}`}
          >
            {content}
          </a>
        );
      })}
    </nav>
  );
};

export default FloatingAction;
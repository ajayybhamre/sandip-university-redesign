// src/pages/COE/components/COEContact.jsx

import { Mail, Phone, MapPin, FileDown } from "lucide-react";
import { coeContact } from "../data/coeData";

const ContactItem = ({ icon: Icon, label, value, href, external }) => {
  const content = (
    <div className="rounded-2xl bg-red-600 p-6 h-full">
      <Icon size={18} className="text-white/90" />
      <p className="mt-3 text-xs uppercase tracking-wide text-white/70">{label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block hover:opacity-90 transition-opacity"
    >
      {content}
    </a>
  );
};

const COEContact = () => {
  return (
    <section className="py-16 bg-[#081b3a] text-white">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
          Get in Touch
        </span>
        <h2 className="mt-2 mb-8 text-2xl md:text-3xl font-bold">
          Contact the Examination Office
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ContactItem icon={Mail} label="Email" value={coeContact.email} href={`mailto:${coeContact.email}`} />
          <ContactItem icon={Phone} label="Helpline" value={coeContact.phone} href={`tel:${coeContact.phone}`} />
          <ContactItem icon={MapPin} label="Address" value={coeContact.address} />
          <ContactItem
            icon={FileDown}
            label="CoE Co-ordinators (AY 2025-26)"
            value="Download list"
            href={coeContact.coordinatorsPdf}
            external
          />
        </div>
      </div>
    </section>
  );
};

export default COEContact;

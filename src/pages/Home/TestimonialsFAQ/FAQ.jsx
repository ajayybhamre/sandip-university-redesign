import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import faqs from "./faqData";

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <div className="hp-faq">
      {faqs.map((item, index) => {
        const open = active === index;
        return (
          <div key={item.id} className={`hp-faq__item${open ? " is-open" : ""}`}>
            <h3>
              <button
                type="button"
                className="hp-faq__q"
                aria-expanded={open}
                aria-controls={`faq-a-${item.id}`}
                onClick={() => setActive(open ? null : index)}
              >
                <span>{item.question}</span>
                {open ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}
              </button>
            </h3>
            <div id={`faq-a-${item.id}`} className="hp-faq__a" role="region" hidden={!open}>
              <p className="hp-body">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

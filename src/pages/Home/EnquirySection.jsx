import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import EnquiryForm from "./EnquiryForm/EnquiryForm";

// Contact details are the ones already shown in the site footer.
export default function EnquirySection() {
  return (
    <section id="enquiry" className="hp-section hp-bg-paper" aria-labelledby="enquiry-heading">
      <div className="hp-wrap hp-contact">
        <div className="hp-contact__info" data-reveal>
          <p className="hp-eyebrow">Enquiry &amp; Student Assistance</p>
          <h2 id="enquiry-heading" className="hp-h2">Talk to our <span className="hp-red">admission counselor.</span></h2>
          <p className="hp-lead">
            Fill out the enquiry form and our admission counselor will contact you.
          </p>
          <ul className="hp-contact__list">
            <li>
              <MapPin aria-hidden="true" />
              <span>Mahiravani, Trimbak Road, Nashik - 422213, Maharashtra, India</span>
            </li>
            <li>
              <Phone aria-hidden="true" />
              <a href="tel:18002122714">1800 212 2714</a>
            </li>
            <li>
              <Mail aria-hidden="true" />
              <a href="mailto:info@university.edu.in">info@university.edu.in</a>
            </li>
          </ul>
          <p>
            <Link to="/contact" className="hp-link">More ways to reach us</Link>
          </p>
        </div>

        <div className="hp-enquiry hp-enquiry--plain" data-reveal>
          <h3 className="hp-enquiry__title">Admissions Open 2026</h3>
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

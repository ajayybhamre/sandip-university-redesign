import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../assets/images/logo-dark.webp";
import "./footer.css";

/*
  Footer links use the site's real routes (App.jsx / Header menu).
  Items with no page yet have `to: null` and show as plain text, so nothing links to a wrong place.
  Fill those in as the pages are created.
*/
const groups = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Leadership", to: "/about" },
      { label: "Rankings & Awards", to: "/about" },
      { label: "News & Media", to: "/events" },
      { label: "Careers", to: null },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Apply Now", to: "/apply" },
      { label: "Admission Process", to: "/admission-process" },
      { label: "Scholarships", to: "/scholarships" },
      { label: "Downloads", to: "/documents" },
      { label: "Important Dates", to: "/academics/calendar" },
    ],
  },
  {
    title: "Schools",
    links: [
      { label: "Engineering", to: "/schools/engineering-technology" },
      { label: "Computer Science", to: "/schools/computer-science" },
      { label: "Management", to: "/schools/management" },
      { label: "Pharmacy", to: "/schools/pharma" },
      { label: "Law", to: "/schools/law" },
      { label: "Science", to: "/schools/science" },
      { label: "Design", to: "/schools/fashion-beauty" },
      { label: "Agriculture", to: null },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Research", to: "/research" },
      { label: "Placements", to: "/placement" },
      { label: "Campus Life", to: "/campus-life" },
      { label: "Examinations", to: "/exams" },
      { label: "IQAC", to: "/iqac" },
      { label: "Mandatory Disclosures", to: "/iqac/public-disclosure" },
    ],
  },
];

const socials = [
  { label: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/SandipUniversity/" },
  { label: "Twitter / X", icon: FaTwitter, url: "https://twitter.com/sandipuniv" },
  { label: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/sandip.university/" },
  { label: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/channel/UCDAaVM3kH_Jk7jgSaQj5xFw" },
];

const legal = [
  { label: "Privacy Policy", to: null },
  { label: "Terms & Conditions", to: null },
  { label: "Disclaimer", to: null },
  { label: "Sitemap", to: null },
];

const Footer = () => {
  return (
    <footer className="hpf" aria-label="Site footer">
      <div className="hpf__wrap">
        <div className="hpf__grid">
          <div className="hpf__brand">
            <img src={logo} alt="Sandip University" />
            <p>
              Sandip University is committed to providing quality education,
              fostering innovation and shaping future leaders.
            </p>
            <ul className="hpf__social">
              {socials.map(({ label, icon: Icon, url }) => (
                <li key={label}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {groups.map((g) => (
            <nav key={g.title} className="hpf__col" aria-label={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? <Link to={l.to}>{l.label}</Link> : <span>{l.label}</span>}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="hpf__col hpf__contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <address>
                  Mahiravani, Trimbak Road,<br />
                  Nashik - 422213,<br />
                  Maharashtra, India
                </address>
              </li>
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <a href="tel:18002122714">1800 212 2714</a>
              </li>
              <li>
                <FaEnvelopeOpenText aria-hidden="true" />
                <a href="mailto:info@university.edu.in">info@university.edu.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hpf__bar">
        <div className="hpf__wrap hpf__barinner">
          <p>© 2026 Sandip University. All Rights Reserved.</p>
          <ul className="hpf__legal">
            {legal.map((l) => (
              <li key={l.label}>{l.to ? <Link to={l.to}>{l.label}</Link> : <span>{l.label}</span>}</li>
            ))}
          </ul>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to Top
            <FaArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

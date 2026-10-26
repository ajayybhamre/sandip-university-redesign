import { ArrowUpRight, Users, Heart, Globe, BookOpen } from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    label: "Campus stories & reels",
    icon: FaInstagram,
    url: "https://www.instagram.com/sandip.university/",
  },
  {
    name: "YouTube",
    label: "Tours & campus life",
    icon: FaYoutube,
    url: "https://www.youtube.com/channel/UCDAaVM3kH_Jk7jgSaQj5xFw",
  },
  {
    name: "Facebook",
    label: "Events & announcements",
    icon: FaFacebookF,
    url: "https://www.facebook.com/SandipUniversity/",
  },
  {
    name: "Twitter / X",
    label: "Updates & news",
    icon: FaTwitter,
    url: "https://twitter.com/sandipuniv",
  },
  {
    name: "Website",
    label: "Official university portal",
    icon: Globe,
    url: "https://www.sandipuniversity.edu.in/",
  },
  {
    name: "Blogs",
    label: "Articles, guides & insights",
    icon: BookOpen,
    url: "https://www.sandipuniversity.edu.in/blog/",
  },
];

const stats = [
  { icon: Users, value: "120K+", label: "Followers" },
  { icon: Heart, value: "250K+", label: "Likes" },
  { icon: Globe, value: "35+", label: "Countries" },
];

// Official campus location on Google Maps
const MAP_QUERY = "Sandip University, Mahiravani, Trimbak Road, Nashik, Maharashtra 422213";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export default function ConnectCampus() {
  return (
    <section id="connect-campus" className="hp-section hp-bg-stone">
      <div className="hp-wrap hp-connect">
        <div className="hp-connect__col" aria-labelledby="online-heading">
          <header className="hp-head" data-reveal>
            <h2 id="online-heading" className="hp-h2">Find us online.</h2>
            <p className="hp-lead">
              Follow Sandip University on your favourite platform.
            </p>
          </header>

          <ul className="hp-social" data-stagger>
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hp-social__item">
                    <Icon aria-hidden="true" />
                    <span className="hp-social__text">
                      <span className="hp-social__name">{item.name}</span>
                      <span className="hp-meta">{item.label}</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          <dl className="hp-connect__stats" data-reveal>
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label}>
                  <Icon aria-hidden="true" />
                  <dd className="hp-num">{s.value}</dd>
                  <dt>{s.label}</dt>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="hp-connect__col" aria-labelledby="map-heading">
          <header className="hp-head" data-reveal>
            <h2 id="map-heading" className="hp-h2">Find your way around campus.</h2>
            <p className="hp-lead">Sandip University, Trimbak Road, Nashik.</p>
          </header>

          <div className="hp-gmap" data-reveal>
            <iframe
              title="Sandip University Nashik on Google Maps"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="hp-link">
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

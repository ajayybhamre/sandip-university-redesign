// Add / remove / reorder TopBar links here — no JSX changes needed.
// Set `href: null` (or omit it) for a placeholder link that isn't clickable yet.
const TOPBAR_LINKS = [
  {
    label: "Students Login",
    href: "https://erp.sandipuniversity.com/login/index/student",
  },
  {
    label: "Examination",
    href: null, // placeholder — link TBD
  },
  {
    label: "SUN Clubs",
    href: "https://www.sandipuniversity.edu.in/sunclub/sun-home.php",
  },
];

function TopBar({ overlay = false, scrolled = false }) {
  // On overlay pages, TopBar disappears entirely once scrolled — only the
  // floating Navbar pill remains. Non-overlay pages are unaffected.
  if (overlay && scrolled) return null;

  const isTransparent = overlay && !scrolled;

  // Hover color rule: text turns red on hover when TopBar is transparent
  // (overlay, not scrolled), and turns white on hover otherwise.
  const linkHoverClass = isTransparent ? "hover:text-red-400" : "hover:text-white";

  return (
    <div
      className={`hidden xl:block border-b border-white/20 text-white text-sm transition-colors duration-500 ${
        isTransparent ? "bg-transparent" : "bg-[#000]"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex justify-start items-center px-6 py-2">
        <div className="flex items-center gap-8">
          {TOPBAR_LINKS.map((link, index) =>
            link.href ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white/90 transition-colors duration-300 ${linkHoverClass}`}
              >
                {link.label}
              </a>
            ) : (
              <span
                key={index}
                className="text-white/50 cursor-not-allowed"
                title="Coming soon"
              >
                {link.label}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
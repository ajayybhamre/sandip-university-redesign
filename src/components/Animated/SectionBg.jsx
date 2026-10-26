/* ------------------------------------------------------------------
   SectionBg — layered background textures for a section.

   Put it as the FIRST child of a `relative overflow-hidden` section:

     <section className="relative overflow-hidden ...">
       <SectionBg variants={["dots", "noise"]} tone="light" />
       <div className="relative z-10"> ...content... </div>
     </section>

   variants: dots | grid | diagonal | noise | rings   (any combination)
   tone:     light (default; adapts to dark mode) | dark (for navy/crimson sections)
   glow:     soft crimson + navy colour blobs
------------------------------------------------------------------- */

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const FADE_MASK =
  "radial-gradient(ellipse 85% 75% at 50% 45%, #000 35%, transparent 100%)";

export default function SectionBg({
  variants = ["dots"],
  tone = "light",
  glow = true,
  className = "",
}) {
  const list = Array.isArray(variants) ? variants : [variants];
  const dark = tone === "dark";

  // currentColor drives every pattern so dark mode is just a colour swap
  const ink = dark
    ? "text-white/[0.10]"
    : "text-slate-900/[0.08] dark:text-white/[0.08]";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {glow && (
        <>
          <div
            className={`absolute -top-32 -left-24 h-[460px] w-[460px] rounded-full blur-[120px] ${
              dark ? "bg-[#C8102E]/30" : "bg-[#C8102E]/10 dark:bg-[#C8102E]/20"
            }`}
          />
          <div
            className={`absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full blur-[130px] ${
              dark ? "bg-[#123B61]/50" : "bg-[#123B61]/10 dark:bg-[#123B61]/30"
            }`}
          />
        </>
      )}

      {list.includes("dots") && (
        <div
          className={`absolute inset-0 ${ink}`}
          style={{
            backgroundImage: "radial-gradient(currentColor 1.3px, transparent 1.3px)",
            backgroundSize: "26px 26px",
            maskImage: FADE_MASK,
            WebkitMaskImage: FADE_MASK,
          }}
        />
      )}

      {list.includes("grid") && (
        <div
          className={`absolute inset-0 ${ink}`}
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: FADE_MASK,
            WebkitMaskImage: FADE_MASK,
          }}
        />
      )}

      {list.includes("diagonal") && (
        <div
          className={`absolute inset-0 ${ink}`}
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 16px)",
            maskImage: FADE_MASK,
            WebkitMaskImage: FADE_MASK,
          }}
        />
      )}

      {list.includes("rings") && (
        <svg
          className={`absolute -right-40 -top-40 h-[720px] w-[720px] ${
            dark ? "text-white/[0.12]" : "text-[#C8102E]/[0.12]"
          }`}
          viewBox="0 0 800 800"
          fill="none"
        >
          {[90, 160, 230, 300, 370].map((r) => (
            <circle key={r} cx="400" cy="400" r={r} stroke="currentColor" strokeWidth="1.2" />
          ))}
        </svg>
      )}

      {list.includes("noise") && (
        <div
          className={`absolute inset-0 ${dark ? "opacity-[0.22]" : "opacity-[0.10] dark:opacity-[0.18]"}`}
          style={{ backgroundImage: NOISE, backgroundSize: "180px 180px" }}
        />
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

/* ------------------------------------------------------------------
   Header — navbar flicker fix.

   WHY IT FLICKERED
   The old header was `position: sticky` (inside the page flow) and shrank from
   ~117px to ~80px when you scrolled past 80px (TopBar removed, navbar made
   smaller). Because it sat in the flow, the whole page jumped up by ~40px, the
   browser's scroll-anchoring then moved scrollY back below 80px, the header grew
   again, and the loop repeated -> visible flicker, worst with slow scrolling.

   WHAT CHANGED
   1. The visible header is now `fixed`, so changing its size cannot move the
      page (nothing can loop).
   2. A placeholder with a constant height keeps the layout space the old
      header used, so pages below it do not move.
   3. Hysteresis: it condenses after 90px but only expands again below 30px, so a
      single scroll position can never flip it back and forth.
   4. One passive, rAF-throttled scroll listener (Navbar used to run its own).
------------------------------------------------------------------- */

const CONDENSE_AT = 90;
const EXPAND_AT = 30;

function Header({ overlay = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > EXPAND_AT : y > CONDENSE_AT));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Reserves the space the un-scrolled header takes (TopBar shows from xl up).
          Overlay pages draw the header over the hero, so they reserve nothing. */}
      {!overlay && <div aria-hidden="true" className="h-20 xl:h-[117px]" />}

      <div className="fixed left-0 top-0 z-50 w-full">
        {!scrolled && <TopBar overlay={overlay} scrolled={scrolled} />}
        <Navbar overlay={overlay} scrolled={scrolled} />
      </div>
    </>
  );
}

export default Header;

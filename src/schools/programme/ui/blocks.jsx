// Small building blocks shared by every programme section.
// Sections pick the blocks they need and put them in the order they want,
// so a pharmacy or design school can reuse them in a different layout.

import { Link } from "react-router-dom";
import { ArrowRight, FileDown } from "lucide-react";

const isPlaceholderUrl = (url) => !url || url === "#";
const isInternalUrl = (url) => typeof url === "string" && url.startsWith("/");

const cardClass = "rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)]";
const buttonClass =
  "mt-8 inline-flex items-center gap-3 rounded-2xl bg-[var(--brand-navy)] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--brand-red-600)]";

/** Eyebrow + heading. Every section starts with one. */
export function SectionShell({ eyebrow, heading, children }) {
  return (
    <div>
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">{eyebrow}</p>}
      <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold leading-tight text-[var(--ink)] md:text-5xl">{heading}</h2>
      {children}
    </div>
  );
}

/** Plain intro paragraph. */
export function Body({ children }) {
  if (!children) return null;
  return <p className="mt-5 max-w-3xl leading-8 text-[var(--ink-muted)]">{children}</p>;
}

/** Intro paragraph inside a soft panel (used by Overview). */
export function Callout({ children }) {
  if (!children) return null;
  return <div className={`mt-6 max-w-3xl p-6 leading-8 text-[var(--ink-muted)] ${cardClass}`}>{children}</div>;
}

function SubHeading({ children }) {
  if (!children) return null;
  return <h3 className="mt-8 font-[var(--font-display)] text-lg font-bold text-[var(--ink)]">{children}</h3>;
}

/** Red-dot bullet list. */
export function BulletList({ items, heading, compact = false }) {
  if (!items?.length) return null;
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ul className={compact ? "mt-4 space-y-3" : "mt-8 space-y-4"}>
        {items.map((item, index) => (
          <li key={`${index}-${item}`} className="flex items-start gap-3 text-[var(--ink)]">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-red-600)]" />
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

/** Headed groups of bullets, e.g. PEOs / POs / PSOs or student / faculty achievements. */
export function GroupList({ groups }) {
  if (!groups?.length) return null;
  return (
    <div className="mt-8 space-y-10">
      {groups.map((group, index) => (
        <div key={`${index}-${group.heading}`}>
          <h3 className="font-[var(--font-display)] text-lg font-bold text-[var(--ink)]">{group.heading}</h3>
          {group.body && <p className="mt-2 max-w-3xl leading-7 text-[var(--ink-muted)]">{group.body}</p>}
          <BulletList items={group.items} compact />
        </div>
      ))}
    </div>
  );
}

/** Grid of cards. A card is either a string or { title, description }. */
export function CardGrid({ cards, heading }) {
  if (!cards?.length) return null;
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {cards.map((card, index) => {
          const isObject = typeof card === "object" && card !== null;
          const title = isObject ? card.title : card;
          const description = isObject ? card.description : null;
          return (
            <div key={`${index}-${title}`} className={`p-5 ${cardClass}`}>
              <p className="font-semibold text-[var(--ink)]">{title}</p>
              {description && <p className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">{description}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
}

/** Download / external links. A link with no real URL yet is shown as "Coming soon" instead of a dead link. */
export function LinkGrid({ links }) {
  if (!links?.length) return null;
  const tileClass = `flex items-center justify-between gap-3 p-5 font-semibold text-[var(--ink)] ${cardClass}`;
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {links.map((link, index) => {
        const key = `${index}-${link.label}`;
        if (isPlaceholderUrl(link.url)) {
          return (
            <div key={key} aria-disabled="true" className={`${tileClass} opacity-60`}>
              {link.label}
              <span className="shrink-0 text-xs font-medium text-[var(--ink-muted)]">Coming soon</span>
            </div>
          );
        }
        const hoverClass = "transition-colors hover:border-[var(--brand-red-600)]";
        const icon = <FileDown size={18} className="shrink-0 text-[var(--brand-red-600)]" />;
        return isInternalUrl(link.url) ? (
          <Link key={key} to={link.url} className={`${tileClass} ${hoverClass}`}>{link.label}{icon}</Link>
        ) : (
          <a key={key} href={link.url} target="_blank" rel="noreferrer" className={`${tileClass} ${hoverClass}`}>{link.label}{icon}</a>
        );
      })}
    </div>
  );
}

/** Scrollable table: { columns: [...], rows: [[...], ...] } */
export function DataTable({ table }) {
  if (!table?.columns?.length) return null;
  return (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--line)]">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-[var(--surface-muted)]">
            {table.columns.map((column, index) => (
              <th key={`${index}-${column}`} className="border-b border-[var(--line)] p-4 font-bold text-[var(--ink)]">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(table.rows || []).map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-[var(--line)] last:border-0">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-4 align-top text-[var(--ink-muted)]">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Call-to-action button.
 *   "Ask admissions"                      -> button that opens /contact
 *   { label, url }                        -> external / internal link, or a disabled button while url is "#"
 */
export function CtaButton({ cta }) {
  if (!cta) return null;

  if (typeof cta === "string") {
    return (
      <Link to="/contact" className={buttonClass}>
        {cta} <ArrowRight size={17} />
      </Link>
    );
  }

  if (isPlaceholderUrl(cta.url)) {
    return (
      <span aria-disabled="true" className={`${buttonClass} cursor-not-allowed opacity-60 hover:bg-[var(--brand-navy)]`}>
        {cta.label} <span className="text-xs font-medium">Coming soon</span>
      </span>
    );
  }

  return isInternalUrl(cta.url) ? (
    <Link to={cta.url} className={buttonClass}>{cta.label} <FileDown size={17} /></Link>
  ) : (
    <a href={cta.url} target="_blank" rel="noreferrer" className={buttonClass}>{cta.label} <FileDown size={17} /></a>
  );
}

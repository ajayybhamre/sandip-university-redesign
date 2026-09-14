import { useEffect, useState } from "react";
import { Scale, ChevronDown, Download, ArrowRight } from "lucide-react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header/Header";
import SubPageHeader from "../components/SubPageHeader";
import regulationsData from "../data/regulationsData";

function AccordionSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `accordion-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="rounded-xl border border-gray-200 transition-colors hover:border-red-600 dark:border-gray-800">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600 dark:text-white"
        >
          {title}
          <ChevronDown
            size={18}
            aria-hidden="true"
            className={`shrink-0 text-gray-400 transition-transform ${isOpen ? "rotate-180 text-red-600" : ""}`}
          />
        </button>
      </h3>
      {isOpen && (
        <div id={panelId} className="px-5 pb-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {children}
        </div>
      )}
    </section>
  );
}

function DownloadRow({ label, url }) {
  return (
    <a
      href={url}
      download
      className="flex min-h-14 items-center justify-between gap-4 py-4 text-sm font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600 dark:text-white"
    >
      <span>{label}</span>
      <span className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-red-600">
        <span>PDF</span>
        <Download size={18} aria-hidden="true" />
      </span>
    </a>
  );
}

// Renders one topic's body — bullets, sub-categories, a highlight badge, or
// a "view detailed rules" link, depending on which fields the topic has.
function TopicContent({ topic }) {
  return (
    <div className="space-y-4">
      {topic.highlight && (
        <p className="inline-block rounded-full bg-red-600/10 px-3 py-1 text-xs font-bold text-red-600 dark:bg-red-600/20 dark:text-red-400">
          {topic.highlight}
        </p>
      )}

      {topic.intro && <p>{topic.intro}</p>}

      {topic.bullets && (
        <ul className="list-disc space-y-1.5 pl-5">
          {topic.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}

      {topic.subsections && (
        <div className="space-y-3">
          {topic.subsections.map((sub) => (
            <div key={sub.heading}>
              <p className="font-semibold text-gray-900 dark:text-white">{sub.heading}</p>
              {sub.text && <p className="mt-1">{sub.text}</p>}
              {sub.bullets && (
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  {sub.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {topic.detailAction && (
        <a
          href={topic.detailAction.url}
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:underline dark:text-red-400"
        >
          {topic.detailAction.label}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

export default function RegulationsPage() {
  useEffect(() => {
    document.title = "Academic Regulations | Sandip University";
  }, []);

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 dark:bg-black dark:text-white">
        <SubPageHeader icon={Scale} title={regulationsData.header.title} intro={regulationsData.header.intro} />

        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[1400px]">

            <p className="mb-8 max-w-[760px] text-base leading-7 text-gray-600 dark:text-gray-400">
              {regulationsData.intro}
            </p>

            <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-2">
              {regulationsData.topics.map((topic) => (
                <AccordionSection key={topic.title} title={topic.title}>
                  <TopicContent topic={topic} />
                </AccordionSection>
              ))}
            </div>

            <div className="mt-8 max-w-[760px] rounded-xl border-l-4 border-red-600 bg-gray-50 px-5 dark:bg-white/5">
              <DownloadRow label={regulationsData.download.label} url={regulationsData.download.url} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
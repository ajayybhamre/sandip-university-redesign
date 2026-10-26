import FAQ from "./FAQ";

export default function FAQSection() {
  return (
    <section id="faq" className="hp-section hp-bg-paper" aria-labelledby="faq-heading">
      <div className="hp-wrap hp-faqwrap">
        <header className="hp-head" data-reveal>
          <p className="hp-eyebrow">FAQ</p>
          <h2 id="faq-heading" className="hp-h2">
            Frequently Asked <span className="hp-red">Questions</span>
          </h2>
          <p className="hp-lead">Everything you need to know before taking admission.</p>
        </header>
        <div data-reveal>
          <FAQ />
        </div>
      </div>
    </section>
  );
}

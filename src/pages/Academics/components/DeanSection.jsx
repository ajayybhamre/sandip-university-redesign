import { useState } from "react";
import { Quote, ArrowRight, X } from "lucide-react";

// Root-relative path into /public, same convention as the hero image.
// Drop the real photo at this path, or swap for a static import.
import dean_image from "../../../assets/images/dean_academics_photo.webp";

const credentialRows = (data) => [
  ["Academic", data.academic],
  ["Professional", data.professional],
  ["Memberships", data.memberships],
];

export default function DeanSection({ deanData }) {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <section className="bg-gray-50 px-5 pb-16 pt-10 dark:bg-slate-950 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
            Leadership
          </p>
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Message from the Dean
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            <img
              src={dean_image}
              alt={deanData.name}
              className="aspect-[4/5] w-full rounded-xl border border-gray-200 object-cover object-top dark:border-gray-800"
            />
            <div className="absolute -bottom-5 left-4 right-4 rounded-xl bg-red-600 px-5 py-3 text-white sm:right-auto sm:max-w-[85%]">
              <p className="text-sm font-semibold leading-5">Dr. Dnyandeo D. Shinde</p>
            </div>
          </div>

          <div className="pt-2 lg:col-span-7 lg:pt-8">
            <Quote size={28} className="mb-6 text-red-600" aria-hidden="true" />

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              {deanData.name}
            </h3>
            <p className="mt-1 font-semibold text-red-600 dark:text-red-400">{deanData.designation}</p>

            <dl className="mt-5 space-y-2 text-sm">
              {credentialRows(deanData).map(([label, value]) => (
                <div key={label} className="flex flex-wrap gap-x-2 gap-y-0.5">
                  <dt className="shrink-0 font-bold text-gray-900 dark:text-white">{label}:</dt>
                  <dd className="text-gray-600 dark:text-gray-400">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="my-7 h-px w-16 bg-gray-200 dark:bg-gray-800" />

            <p className="text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
              {deanData.greeting} {deanData.messageParagraphs[0]}
            </p>

            <button
              type="button"
              onClick={() => setIsMessageOpen(true)}
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#081b3a] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Read full message
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isMessageOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dean-message-title"
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-7 text-gray-900 dark:bg-[#111111] dark:text-white md:p-10">
            <button
              type="button"
              onClick={() => setIsMessageOpen(false)}
              aria-label="Close dean message"
              className="absolute right-5 top-5 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-red-600 dark:text-gray-400 dark:hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
              Leadership
            </p>
            <h2 id="dean-message-title" className="mt-3 pr-10 text-2xl font-bold sm:text-3xl">
              Message from the Dean
            </h2>
            <p className="mt-2 font-semibold text-red-600 dark:text-red-400">{deanData.name}</p>

            <div className="mt-6 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-400">
              <p>{deanData.greeting}</p>
              {deanData.messageParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 border-t border-gray-200 pt-5 text-sm dark:border-gray-800">
              <p className="font-bold text-gray-900 dark:text-white">{deanData.signatureName}</p>
              <p className="text-gray-600 dark:text-gray-400">{deanData.signatureTitle}</p>
              <p className="mt-2">
                <a href={`tel:${deanData.phone}`} className="text-red-600 hover:underline dark:text-red-400">
                  {deanData.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${deanData.email}`} className="text-red-600 hover:underline dark:text-red-400">
                  {deanData.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
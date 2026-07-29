import { useState } from "react";

import { galleryTabs, galleryImages } from "./galleryData";
import GalleryGrid from "./GalleryGrid";

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = useState("campus");

  const filteredImages = galleryImages.filter(
    (item) => item.category === activeTab
  );

  return (
    <>
      <section className="py-16 bg-white dark:bg-black transition-colors duration-300">

        <div className="container mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4">

            {galleryTabs.map((tab) => (

              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-7
                  py-3
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                  border

                  ${
                    activeTab === tab.id
                      ? "bg-red-600 border-red-600 text-white shadow-lg"
                      : "bg-white dark:bg-[#111111] border-red-200 dark:border-red-600/40 text-black dark:text-white hover:bg-red-600 hover:text-white hover:border-red-600"
                  }
                `}
              >
                {tab.label}
              </button>

            ))}

          </div>

        </div>

      </section>

      <GalleryGrid images={filteredImages} />
    </>
  );
}
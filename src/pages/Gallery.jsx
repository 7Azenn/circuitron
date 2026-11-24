import React, { useState } from "react";
import { ArrowUpRight, Filter, MapPin, Calendar, Tag, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import LightboxModal from "../components/LightboxModal";
import { galleryItems, galleryCategories } from "../data/gallery";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (item, index) => {
    setSelectedPhoto(item);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIdx);
    setSelectedPhoto(filteredItems[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIdx);
    setSelectedPhoto(filteredItems[nextIdx]);
  };

  return (
    <div className="bg-transparent text-offwhite min-h-screen relative z-10">
      <PageHeader
        code="// 05-GALLERY"
        tagline="HISTORICAL &amp; TECHNICAL ARCHIVE"
        title="Photographic Documentation."
        description="Authentic high-resolution photographs documenting workshops, laboratory testing, robotics tournaments, and student engineering exhibitions at RVSCET."
        breadcrumbs={[{ name: "Gallery" }]}
      />

      {/* Filter Bar */}
      <section className="border-b border-white/[0.08] bg-[#050816]/70 backdrop-blur-xl py-5 sticky top-16 sm:top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider shrink-0 mr-2 hidden md:inline-flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
                CATEGORY:
              </span>
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-full border transition-all whitespace-nowrap shadow-sm ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-cyan to-circuitron text-white border-cyan font-bold shadow-[0_0_15px_rgba(18,181,226,0.4)]"
                      : "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-steel-light hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-steel-light shrink-0 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
              <span>SHOWING {filteredItems.length} PHOTOGRAPHS</span>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item, index)}
                className="group cursor-pointer rounded-2xl glass-card-interactive flex flex-col overflow-hidden shadow-xl"
              >
                {/* Photo Frame (Full Image Cleanly Visible) */}
                <div className="relative h-60 sm:h-72 bg-[#030713] overflow-hidden flex items-center justify-center p-2.5">
                  <img
                    src={item.src}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                  />
                  <img
                    src={item.src}
                    alt={item.alt || item.title}
                    className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-lg drop-shadow-md group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-[10px] font-mono bg-[#050816]/90 backdrop-blur-md border border-cyan/40 text-cyan font-semibold shadow-sm">
                    {item.category}
                  </span>

                  <span className="absolute bottom-3 right-3 z-20 p-2 rounded-xl bg-[#050816]/90 backdrop-blur-md border border-white/10 text-steel-light group-hover:text-cyan group-hover:border-cyan/40 transition-all shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Caption Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-steel-light leading-relaxed line-clamp-2 font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-[11px] font-mono text-steel-light">
                    <span>{item.date}</span>
                    <span className="text-cyan font-medium">{item.location}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          item={selectedPhoto}
          items={filteredItems}
          currentIndex={currentIndex}
          onClose={() => setSelectedPhoto(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

    </div>
  );
}

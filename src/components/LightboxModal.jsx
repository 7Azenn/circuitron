import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag } from "lucide-react";

export default function LightboxModal({
  item,
  items = [],
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020612]/95 backdrop-blur-xl p-3 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 10 }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-5xl w-full bg-[#050c18] border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[94vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-[#071120] text-xs font-mono text-steel-light">
          <div className="flex items-center gap-3">
            <span className="text-cyan font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
              CIRCUITRON ARCHIVE
            </span>
            <span>•</span>
            <span>
              {currentIndex + 1} OF {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-steel-light hover:text-white bg-white/[0.05] hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Media Frame (Full Image Cleanly Visible with Ambient Glow) */}
        <div className="relative flex-1 bg-[#020612] flex items-center justify-center p-3 sm:p-6 min-h-[320px] overflow-hidden">
          {/* Ambient Backdrop Blur */}
          <img
            src={item.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 scale-110 pointer-events-none"
          />

          <motion.img
            key={item.src}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={item.src}
            alt={item.alt || item.title}
            className="relative z-10 max-h-[64vh] sm:max-h-[72vh] w-auto max-w-full object-contain mx-auto rounded-xl drop-shadow-2xl"
          />

          {/* Nav buttons */}
          {items.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#050c18]/80 hover:bg-cyan hover:text-[#040e1a] border border-white/10 hover:border-cyan text-white transition-all z-20 shadow-xl backdrop-blur-md"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#050c18]/80 hover:bg-cyan hover:text-[#040e1a] border border-white/10 hover:border-cyan text-white transition-all z-20 shadow-xl backdrop-blur-md"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </>
          )}
        </div>

        {/* Caption & Metadata */}
        <div className="p-4 sm:p-5 bg-[#061021] border-t border-white/[0.08] space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display font-bold text-base sm:text-lg text-white">
              {item.title}
            </h3>
            <span className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-cyan/15 text-cyan border border-cyan/30 font-semibold">
              {item.category}
            </span>
          </div>

          {item.description && (
            <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-light">
              {item.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] font-mono text-steel-light border-t border-white/[0.06]">
            {item.date && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan" />
                <span>{item.date}</span>
              </span>
            )}
            {item.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan" />
                <span>{item.location}</span>
              </span>
            )}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

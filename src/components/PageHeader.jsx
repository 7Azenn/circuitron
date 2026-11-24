import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function PageHeader({
  code,
  title,
  tagline,
  description,
  badge = "CIRCUITRON OFFICIAL",
  breadcrumbs = [],
}) {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 border-b border-white/[0.08] overflow-hidden bg-radial-hero">
      {/* Subtle top indicator line in Circuitron Cyan */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: easeCurve }}
        className="absolute top-0 left-0 w-80 h-[2px] bg-gradient-to-r from-cyan via-[#56D4F7] to-transparent shadow-[0_0_15px_rgba(18,181,226,0.8)] pointer-events-none origin-left"
      />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb & Code Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-steel-light px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
            <Link to="/" className="hover:text-cyan transition-colors flex items-center gap-1">
              <span>ROOT</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <span className="text-white/30">/</span>
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-cyan transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.name}</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {code && (
              <span className="px-3 py-1 rounded-full font-mono text-xs bg-cyan/10 text-cyan border border-cyan/30 backdrop-blur-md font-semibold shadow-[0_0_12px_rgba(18,181,226,0.15)]">
                {code}
              </span>
            )}
            <span className="px-3 py-1 rounded-full font-mono text-[11px] bg-white/[0.04] text-steel-light border border-white/10 backdrop-blur-md">
              {badge}
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-4xl space-y-4">
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: easeCurve }}
              className="font-mono text-xs sm:text-sm text-cyan uppercase tracking-wider font-semibold flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              {tagline}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeCurve }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08]"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: easeCurve }}
              className="text-base sm:text-lg text-steel-light leading-relaxed max-w-2xl pt-2 font-light"
            >
              {description}
            </motion.p>
          )}
        </div>

      </div>
    </section>
  );
}

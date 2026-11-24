import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function EngineeringProgressBar({
  label,
  value = 100,
  unit = "%",
  code,
  delay = 0.1,
  color = "cyan",
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();

  const isCyan = color === "cyan";

  return (
    <div className={`space-y-1.5 ${className}`}>
      {/* Metric Header */}
      <div className="flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          {code && <span className={isCyan ? "text-cyan" : "text-lime"}>{code}</span>}
          <span className="text-offwhite-dim font-medium">{label}</span>
        </div>
        <span className={`${isCyan ? "text-cyan" : "text-lime"} font-semibold`}>
          {value}
          {unit}
        </span>
      </div>

      {/* Progress Track */}
      <div className={`h-1.5 w-full ${isCyan ? "bg-[#070D18] border-circuitron-border" : "bg-graphite-deep border-graphite-border"} border overflow-hidden relative`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 1.2,
            delay: shouldReduceMotion ? 0 : delay,
            ease: [0.16, 1, 0.3, 1], // Apple / Linear-style cubic bezier ease
          }}
          className={`h-full ${isCyan ? "bg-gradient-to-r from-circuitron via-cyan to-cyan-bright shadow-[0_0_8px_rgba(18,181,226,0.5)]" : "bg-gradient-to-r from-lime/80 to-lime"} relative`}
        >
          {/* Subtle leading edge highlight */}
          <span className="absolute top-0 right-0 bottom-0 w-1 bg-white shadow-sm" />
        </motion.div>
      </div>
    </div>
  );
}

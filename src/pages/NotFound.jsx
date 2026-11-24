import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Compass, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-transparent text-offwhite min-h-[85vh] flex items-center justify-center py-20 px-4 relative z-10 overflow-hidden">
      <div className="relative z-10 max-w-xl w-full p-8 sm:p-12 rounded-3xl glass-card border-white/10 shadow-2xl space-y-6 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/15 border border-cyan/40 text-xs font-mono text-cyan shadow-[0_0_12px_rgba(18,181,226,0.2)]">
          <AlertTriangle className="w-4 h-4 text-cyan" />
          <span>FAULT CODE: 0x404 // TRACE_OPEN</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl sm:text-7xl font-display font-extrabold text-white tracking-tight">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-steel-light">
            Circuit Trace Disconnected
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-mono">
          The requested path could not be resolved by the routing switch. The endpoint may have been decommissioned or the URI is malformed.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-glow-cyan">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link to="/domains" className="btn-glass">
            <Compass className="w-4 h-4 mr-1.5 text-cyan" />
            <span>Explore Domains</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-white/[0.08] text-[11px] font-mono text-steel-light">
          CIRCUITRON DIGITAL PLATFORM // RVSCET JAMSHEDPUR
        </div>

      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Schedule", path: "/schedule" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    if (path === "/events") return location.pathname === "/events" || location.pathname.startsWith("/activities");
    if (path === "/schedule") return location.pathname === "/schedule";
    if (path === "/contact") return location.pathname === "/contact" || location.pathname.startsWith("/join");
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-2.5 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        
        {/* Floating Rounded Navbar Island */}
        <div
          className={`transition-all duration-300 rounded-2xl px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between border backdrop-blur-2xl ${
            scrolled
              ? "bg-[#040c1b]/95 border-[#152c4a] shadow-[0_15px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(0,212,255,0.18)]"
              : "bg-[#050f22]/90 border-[#132742] hover:border-[#1d3c63] shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_20px_rgba(0,212,255,0.12)]"
          }`}
        >
          {/* Brand Logo & Wordmark (Emblem + Circuitron • RVSCET • TECHXPO 2.0) */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none rounded-2xl p-1 transition-all"
            aria-label="Circuitron Homepage"
          >
            {/* Desktop Brand View */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-2xl overflow-hidden flex items-center justify-center border border-[#00d4ff]/40 group-hover:border-[#00d4ff] transition-all shadow-[0_0_16px_rgba(0,212,255,0.22)] bg-[#030917] shrink-0 p-1 sm:p-1.5">
                <img
                  src="/logo.png"
                  alt="Circuitron Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-base sm:text-xl tracking-tight text-[#00d4ff] drop-shadow-[0_0_10px_rgba(0,212,255,0.35)]">
                    Circuitron
                  </span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00d4ff] inline-block shadow-[0_0_8px_rgba(0,212,255,0.9)] animate-pulse"></span>
                </div>
                <span className="font-mono text-[9px] sm:text-[11px] text-[#8fa0b5] tracking-wider uppercase font-semibold">
                  RVSCET • TECHXPO 2.0
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Center Navigation (Inner Rounded Capsule) */}
          <nav
            className="hidden lg:flex items-center bg-[#020713]/95 border border-[#0e1d33] rounded-full p-1 shadow-inner backdrop-blur-md gap-1"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-display rounded-full transition-all duration-200 ${
                    active
                      ? "bg-[#00d4ff] text-[#010611] font-bold shadow-[0_0_16px_rgba(0,212,255,0.7)]"
                      : "text-[#cbd5e1] hover:text-white hover:bg-white/[0.06] font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Section: Shield Icon + Register Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Verified Society Shield Icon Squircle Badge */}
            <div
              className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#040e1e] border border-[#142844] hover:border-[#00d4ff]/50 text-slate-300 hover:text-[#00d4ff] transition-all shadow-sm"
              title="Verified Technical Society • RVSCET TechXpo 2.0"
            >
              <ShieldCheck className="w-4 h-4 text-slate-300 hover:text-[#00d4ff] transition-colors" />
            </div>

            {/* Glowing Cyan Register / Join Pill Button */}
            <Link
              to="/join"
              className="bg-[#00d4ff] hover:bg-[#38e1ff] text-[#010611] font-display font-bold text-sm sm:text-base px-6 sm:px-7 py-2.5 rounded-full shadow-[0_0_22px_rgba(0,212,255,0.65)] hover:shadow-[0_0_30px_rgba(0,212,255,0.85)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 tracking-tight"
            >
              <span>Register</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Right Controls: Register Pill + Menu Toggle */}
          <div className="flex items-center sm:hidden gap-2">
            <Link
              to="/join"
              className="bg-[#00d4ff] text-[#010611] px-3.5 py-1.5 text-xs font-bold font-display rounded-full shadow-[0_0_12px_rgba(0,212,255,0.5)] flex items-center gap-1"
            >
              <span>Register</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
            
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-white hover:text-cyan bg-[#040e1e] border border-[#142844] rounded-2xl focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer Menu (Rounded Floating Card) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mt-2 p-4 rounded-3xl border border-white/10 bg-[#061124]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden space-y-1"
            >
              <div className="px-3 py-2 mb-2 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center border border-[#00d4ff]/40 bg-[#030917] p-1">
                    <img src="/logo.png" alt="Circuitron" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-display font-black text-sm tracking-tight text-[#00d4ff]">
                    Circuitron
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
                  RVSCET • TECHXPO 2.0
                </span>
              </div>

              {navLinks.map((link, idx) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-full text-sm font-display transition-all ${
                      active
                        ? "bg-[#00d4ff] text-[#030914] font-bold shadow-[0_0_15px_rgba(0,212,255,0.5)]"
                        : "text-white/80 hover:text-cyan hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.name}</span>
                      <span className={`font-mono text-xs ${active ? "text-[#030914]/70" : "text-white/40"}`}>
                        0{idx + 1}
                      </span>
                    </div>
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/[0.08] flex flex-col gap-2">
                <Link
                  to="/join"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#00d4ff] text-[#030914] font-display font-bold py-3 text-center justify-center rounded-full shadow-[0_0_20px_rgba(0,212,255,0.6)] flex items-center gap-1.5"
                >
                  <span>Register &amp; Join Society</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
                <div className="text-center pt-1">
                  <span className="text-[10px] font-mono text-steel-light">
                    RVSCET Jamshedpur • TECHXPO 2.0
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}

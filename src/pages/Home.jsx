import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Wifi,
  Radio,
  Bot,
  FlaskConical,
  Wrench,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Activity,
  Terminal,
  Sliders,
  Gauge,
  Zap,
  ShieldCheck,
  Binary,
} from "lucide-react";
import { clubInfo } from "../data/clubInfo";
import { technicalDomains } from "../data/domains";
import { projects } from "../data/projects";
import { completedActivities, upcomingActivities } from "../data/activities";
import { galleryItems } from "../data/gallery";
import { facultyAdvisors, executiveTeam } from "../data/team";
import LightboxModal from "../components/LightboxModal";
import EngineeringProgressBar from "../components/EngineeringProgressBar";
import HeroHardwareDeck from "../components/HeroHardwareDeck";
import SiliconArsenal from "../components/SiliconArsenal";

const HERO_WORDS = [
  "Hardware.",
  "Autonomous Rovers.",
  "Combat Battlebots.",
  "IoT Sensor Networks.",
  "Custom Silicon PCBs.",
];

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);
  const [activeDomainIdx, setActiveDomainIdx] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % HERO_WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const featuredProjects = projects.slice(0, 4);
  const featuredGallery = galleryItems.slice(0, 6);

  const domainIcons = {
    "embedded-systems": Cpu,
    iot: Wifi,
    "electronics-design": Radio,
    "robotics-automation": Bot,
    "research-innovation": FlaskConical,
  };

  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1];

  const openLightbox = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIdx(index);
  };

  return (
    <div className="text-offwhite min-h-screen relative z-10">
      
      {/* =========================================================================
          SECTION B — HERO: THE HARDWARE FRONTIER
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-24 border-b border-white/[0.08] overflow-hidden bg-radial-hero">
        
        {/* Subtle accent glow line in Circuitron Cyan */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: easeCurve }}
          className="absolute top-0 left-0 w-64 h-[2px] bg-gradient-to-r from-cyan via-[#56D4F7] to-transparent shadow-[0_0_15px_rgba(18,181,226,0.8)] pointer-events-none origin-left"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Column: Mission, Headlines & Real Metrics (5 cols) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              {/* Technical Metadata & Lab Status Bar */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: easeCurve }}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-xs font-mono text-cyan backdrop-blur-md shadow-[0_0_15px_rgba(18,181,226,0.2)]"
              >
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
                <span className="text-white font-medium">RVSCET JAMSHEDPUR</span>
                <span className="text-white/30">•</span>
                <span className="text-cyan font-bold uppercase tracking-wider">OFFICIAL HARDWARE SOCIETY</span>
              </motion.div>

              {/* Main Headline with Kinetic Rotating Word */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2, ease: easeCurve }}
                className="space-y-2 sm:space-y-3"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] sm:leading-[1.04]">
                  Where Curiosity <br />
                  Becomes{" "}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={HERO_WORDS[wordIdx]}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="text-gradient-cyan inline-block drop-shadow-[0_0_25px_rgba(0,212,255,0.35)]"
                    >
                      {HERO_WORDS[wordIdx]}
                    </motion.span>
                  </AnimatePresence>
                </h1>
              </motion.div>

              {/* Mobile: Punchy Cyber Feature Pills (Replaces Wall-of-Text Paragraph) */}
              <div className="flex sm:hidden items-center gap-2 flex-wrap pt-1">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan/15 border border-cyan/40 text-cyan font-semibold flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
                  Autonomous Rovers
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.05] border border-white/10 text-white font-medium">
                  Combat Robotics
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan/10 border border-cyan/30 text-cyan font-semibold">
                  Custom Silicon PCBs
                </span>
              </div>

              {/* Desktop Only: Full Narrative Paragraph & Statement */}
              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: easeCurve }}
                className="hidden sm:block text-base sm:text-lg text-steel-light font-sans leading-relaxed"
              >
                Circuitron is the premier student-led electronics, robotics, and embedded systems laboratory at R.V.S. College of Engineering &amp; Technology. We turn curious minds into engineers through hands-on microcontroller firmware, custom PCB fabrication, and autonomous IoT telemetry.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.38, ease: easeCurve }}
                className="hidden sm:block border-l-2 border-cyan bg-cyan/5 pl-4 py-2.5 rounded-r-lg border-y border-r border-white/5 text-xs font-mono text-steel-light"
              >
                "{clubInfo.statement}"
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45, ease: easeCurve }}
                className="pt-1 flex items-center gap-3"
              >
                <Link to="/projects" className="btn-glow-cyan text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-6">
                  <span>Explore Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>

                <Link to="/join" className="btn-glass text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-5">
                  <span>Join Club</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan" />
                </Link>
              </motion.div>

              {/* Mobile: Compact Single-Row Cyber Metric Strip */}
              <div className="sm:hidden flex items-center justify-between p-3.5 rounded-2xl glass-card border-white/10 text-center font-mono">
                <div>
                  <span className="font-display font-extrabold text-base text-cyan block">500+</span>
                  <span className="text-[9px] text-steel-light uppercase">Mentored</span>
                </div>
                <span className="text-white/20">|</span>
                <div>
                  <span className="font-display font-extrabold text-base text-white block">18+</span>
                  <span className="text-[9px] text-steel-light uppercase">Prototypes</span>
                </div>
                <span className="text-white/20">|</span>
                <div>
                  <span className="font-display font-extrabold text-base text-cyan block">5</span>
                  <span className="text-[9px] text-steel-light uppercase">Domains</span>
                </div>
                <span className="text-white/20">|</span>
                <div>
                  <span className="font-display font-extrabold text-base text-white block">2018</span>
                  <span className="text-[9px] text-steel-light uppercase">Founded</span>
                </div>
              </div>

              {/* Desktop Only: Authentic 4-Card Impact Grid */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55, ease: easeCurve }}
                className="hidden sm:block pt-4 border-t border-white/[0.08]"
              >
                <div className="grid grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                    <span className="font-display font-extrabold text-2xl text-cyan block">500+</span>
                    <span className="text-[10px] font-mono text-steel-light uppercase">Engineers Mentored</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                    <span className="font-display font-extrabold text-2xl text-white block">18+</span>
                    <span className="text-[10px] font-mono text-steel-light uppercase">Lab Prototypes</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                    <span className="font-display font-extrabold text-2xl text-cyan block">5</span>
                    <span className="text-[10px] font-mono text-steel-light uppercase">Core Domains</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                    <span className="font-display font-extrabold text-2xl text-white block">2018</span>
                    <span className="text-[10px] font-mono text-steel-light uppercase">Founded Year</span>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Interactive Hardware Holodeck (7 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35, ease: easeCurve }}
              className="lg:col-span-7 relative"
            >
              <HeroHardwareDeck />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C — ABOUT CIRCUITRON & ENGINEERING STANDARDS
          ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08] relative bg-gradient-to-b from-transparent via-cyan/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: easeCurve }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            {/* Left: Real Lab Photo in Glassmorphic Frame */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card rounded-2xl p-2.5 overflow-hidden border border-white/10 shadow-xl">
                <div className="relative rounded-xl overflow-hidden h-72 sm:h-80 bg-[#030712] flex items-center justify-center p-2">
                  <img
                    src="/assets/gallery/IMG-20251024-WA0003.webp"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none"
                  />
                  <img
                    src="/assets/gallery/IMG-20251024-WA0003.webp"
                    alt="Students working on breadboards and embedded circuits in the Circuitron Lab"
                    className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-lg drop-shadow-lg"
                  />
                  <div className="absolute bottom-3 left-3 right-3 z-20 p-2.5 bg-[#050816]/90 backdrop-blur-md rounded-lg border border-cyan/25 text-xs font-mono flex justify-between items-center shadow-md">
                    <span className="text-white font-medium">CIRCUITRON LAB ROOM 304</span>
                    <span className="text-cyan font-bold">RVSCET</span>
                  </div>
                </div>
              </div>

              {/* Two Stats Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card p-4 rounded-xl border border-white/10">
                  <span className="font-mono text-steel-light text-[11px] block">ESTABLISHED</span>
                  <span className="font-display font-extrabold text-white text-xl">2018</span>
                  <p className="text-steel-light text-[11px] mt-1">
                    Continuous student innovation at RVSCET.
                  </p>
                </div>
                <div className="glass-card p-4 rounded-xl border border-cyan/20">
                  <span className="font-mono text-steel-light text-[11px] block">COLLABORATION</span>
                  <span className="font-display font-extrabold text-cyan text-xl">Inter-Dept</span>
                  <p className="text-steel-light text-[11px] mt-1">
                    Uniting ECE, EEE, CSE &amp; Mechanical.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative & Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                  // 01 — THE COMMUNITY &amp; PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                  Engineering Beyond The Classroom.
                </h2>
              </div>

              <div className="space-y-4 text-steel-light text-sm sm:text-base leading-relaxed">
                <p>
                  Circuitron was founded in 2018 at R.V.S. College of Engineering and Technology with a singular mission: to bridge the chasm between theoretical textbook equations and practical, tangible hardware engineering.
                </p>
                <p>
                  We operate as an open, student-led technical laboratory. Here, members learn to design schematics, debug low-level microcontrollers on oscilloscopes, solder custom PCBs, and develop real-world IoT telemetry systems that solve actual problems.
                </p>
              </div>

              {/* Core Pillars (Glass Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="glass-card p-4 rounded-xl border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-display font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan" />
                    <span>Hands-On First</span>
                  </div>
                  <p className="text-xs text-steel-light leading-relaxed">
                    Every member builds physical hardware from day one.
                  </p>
                </div>

                <div className="glass-card p-4 rounded-xl border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-display font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan" />
                    <span>Cross-Branch</span>
                  </div>
                  <p className="text-xs text-steel-light leading-relaxed">
                    Hardware, firmware, mechanical design, and cloud software combined.
                  </p>
                </div>

                <div className="glass-card p-4 rounded-xl border border-white/10 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-display font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan" />
                    <span>Real Deployment</span>
                  </div>
                  <p className="text-xs text-steel-light leading-relaxed">
                    Field-tested prototypes, not just desktop simulators.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-display text-cyan hover:underline font-semibold">
                  <span>Read our full origin &amp; philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </motion.div>

          {/* Laboratory Hardware Rig & Instrumentation Deck */}
          <div className="mt-16 pt-12 border-t border-white/[0.08] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan"></span>
                <span className="text-white font-semibold uppercase tracking-wider">HARDWARE BENCH INSTRUMENTATION &amp; TEST RIGS</span>
              </div>
              <span className="text-steel-light font-mono text-[11px]">CALIBRATED // RVSCET ECE &amp; EEE LAB SUITE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Rig 1: Digital Storage Oscilloscope */}
              <div className="glass-card p-5 rounded-2xl space-y-3 border border-white/10 hover:border-cyan/50 transition-all">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-cyan font-bold px-2 py-0.5 rounded-full bg-cyan/15 border border-cyan/30">INST-01</span>
                  <span className="text-steel-light">100 MHz / 1GSa/s</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-cyan" />
                  <h4 className="font-display font-bold text-base text-white">Digital Storage Oscilloscope</h4>
                </div>
                <p className="text-xs text-steel-light leading-relaxed">
                  4-channel bus waveform analysis, I2C/SPI decoding, and PWM signal rise/fall time profiling.
                </p>
                <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-cyan">
                  BENCHTOP 4-CHANNEL DSO ANALYZER
                </div>
              </div>

              {/* Rig 2: Precision DC Power Supply */}
              <div className="glass-card p-5 rounded-2xl space-y-3 border border-white/10 hover:border-cyan/50 transition-all">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-cyan font-bold px-2 py-0.5 rounded-full bg-cyan/15 border border-cyan/30">INST-02</span>
                  <span className="text-cyan font-bold">30V / 5A LINEAR</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-cyan" />
                  <h4 className="font-display font-bold text-base text-white">Bench Linear Power Supply</h4>
                </div>
                <p className="text-xs text-steel-light leading-relaxed">
                  Low-ripple isolated DC voltage rails with adjustable over-current protection for prototype bring-up.
                </p>
                <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-cyan">
                  PRECISION DUAL RAIL LAB PSU
                </div>
              </div>

              {/* Rig 3: Hakko Soldering Station */}
              <div className="glass-card p-5 rounded-2xl space-y-3 border border-white/10 hover:border-cyan/50 transition-all">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-cyan font-bold px-2 py-0.5 rounded-full bg-cyan/15 border border-cyan/30">INST-03</span>
                  <span className="text-steel-light">ESD-SAFE / 480°C</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Wrench className="w-5 h-5 text-cyan" />
                  <h4 className="font-display font-bold text-base text-white">SMD Rework &amp; Soldering</h4>
                </div>
                <p className="text-xs text-steel-light leading-relaxed">
                  Ceramic core heating, micro-chisel tips, and hot air reflow for fine-pitch 0805 and QFP component assembly.
                </p>
                <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-cyan">
                  TEMPERATURE-CONTROLLED STATION
                </div>
              </div>

              {/* Rig 4: Logic Analyzer */}
              <div className="glass-card p-5 rounded-2xl space-y-3 border border-white/10 hover:border-cyan/50 transition-all">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-cyan font-bold px-2 py-0.5 rounded-full bg-cyan/15 border border-cyan/30">INST-04</span>
                  <span className="text-cyan font-bold">8-CH DIGITAL</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Binary className="w-5 h-5 text-cyan" />
                  <h4 className="font-display font-bold text-base text-white">USB Logic Analyzer</h4>
                </div>
                <p className="text-xs text-steel-light leading-relaxed">
                  Packet decoding for UART, SPI, I2C, and CAN buses with nanosecond state transition verification.
                </p>
                <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-cyan">
                  LOGIC PROTOCOL ANALYZER
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          THE SILICON ARSENAL & COMPONENT VAULT (Interactive Hardware Stack)
          ========================================================================= */}
      <SiliconArsenal />

      {/* =========================================================================
          SECTION D — TECHNICAL DOMAINS & INTERACTIVE BLUEPRINT CONSOLE
          ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08] relative bg-radial-section backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                // 02 — TECHNICAL PILLARS &amp; CURRICULUM
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Our 5 Engineering Domains
              </h2>
              <p className="text-sm sm:text-base text-steel-light leading-relaxed">
                Circuitron's engineering work is structured across five specialized disciplines. Select a domain below to inspect hardware chipsets, laboratory topics, and real student prototypes.
              </p>
            </div>

            <Link to="/domains" className="btn-glass self-start md:self-auto shrink-0">
              <span>View All Domains Curriculum</span>
              <ArrowRight className="w-4 h-4 text-cyan" />
            </Link>
          </div>

          {/* Domain Pill Tab Switcher */}
          <div className="pt-8 pb-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {technicalDomains.map((dom, idx) => {
              const IconComp = domainIcons[dom.id] || Cpu;
              const isSelected = activeDomainIdx === idx;
              return (
                <button
                  key={dom.id}
                  onClick={() => setActiveDomainIdx(idx)}
                  className={`px-4 py-2.5 text-xs font-mono transition-all flex items-center gap-2.5 rounded-full whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan to-navy text-white font-bold shadow-[0_0_15px_rgba(18,181,226,0.5)] border border-cyan/60"
                      : "bg-white/5 text-steel-light hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-cyan"}`} />
                  <span>{dom.code} // {dom.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Domain Blueprint Console Card */}
          {(() => {
            const currentDomain = technicalDomains[activeDomainIdx];
            const DomainIcon = domainIcons[currentDomain.id] || Cpu;
            return (
              <motion.div
                key={currentDomain.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: easeCurve }}
                className="glass-card-interactive rounded-2xl p-6 sm:p-8 border border-cyan/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left 6 cols: Title, Overview & Photo */}
                  <div className="lg:col-span-6 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-cyan rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs text-cyan font-bold tracking-wider">
                          ACTIVE DOMAIN // {currentDomain.code}
                        </span>
                      </div>
                      <span className="px-3 py-1 font-mono text-[10px] rounded-full bg-cyan/15 border border-cyan/30 text-cyan font-semibold">
                        {currentDomain.badge}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white flex items-center gap-3">
                        <DomainIcon className="w-7 h-7 text-cyan" />
                        <span>{currentDomain.title}</span>
                      </h3>
                      <p className="font-mono text-xs text-steel-light">
                        {currentDomain.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-steel-light leading-relaxed">
                      {currentDomain.description}
                    </p>

                    {/* Real Domain Photograph in Glass Frame (Full Image Cleanly Visible) */}
                    <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#030712] flex items-center justify-center p-2">
                      <img
                        src={currentDomain.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none"
                      />
                      <img
                        src={currentDomain.image}
                        alt={currentDomain.title}
                        className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-lg drop-shadow-lg"
                      />
                      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-xs font-mono text-white bg-[#050816]/90 px-3 py-1.5 rounded-lg backdrop-blur-md border border-cyan/25 shadow-md">
                        <span className="text-cyan font-semibold">{currentDomain.shortName} Prototype Lab</span>
                        <span className="text-steel-light">RVSCET</span>
                      </div>
                    </div>
                  </div>

                  {/* Right 6 cols: Hardware Chip Stack & Syllabus */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    {/* Chip & Hardware Stack */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-steel-light uppercase tracking-wider flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-cyan" />
                          <span className="text-white font-medium">SILICON &amp; HARDWARE ARCHITECTURES</span>
                        </span>
                        <span className="text-cyan font-bold">{currentDomain.technologies.length} TECH CORES</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentDomain.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-mono rounded-full bg-white/[0.04] border border-cyan/30 text-white hover:border-cyan hover:bg-cyan/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Practical Syllabus Checklist */}
                    <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                      <span className="text-xs font-mono text-steel-light uppercase tracking-wider block font-medium">
                        LABORATORY TOPICS &amp; COMPETENCIES:
                      </span>
                      <div className="space-y-2.5">
                        {currentDomain.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-steel-light">
                            <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Domain Action Buttons */}
                    <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                      <Link
                        to={`/domains#${currentDomain.id}`}
                        className="btn-glow-cyan text-xs py-2 px-5"
                      >
                        <span>Open Domain Curriculum</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to="/join"
                        className="btn-glass text-xs py-2 px-5"
                      >
                        <span>Join This Domain</span>
                      </Link>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })()}

          {/* Quick Domain Grid below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-8">
            {technicalDomains.map((dom, idx) => {
              const IconComp = domainIcons[dom.id] || Cpu;
              const isSelected = activeDomainIdx === idx;
              return (
                <div
                  key={dom.id}
                  onClick={() => setActiveDomainIdx(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-br from-cyan/20 to-navy/40 border-cyan shadow-[0_0_15px_rgba(18,181,226,0.3)]"
                      : "glass-card border-white/5 hover:border-cyan/40"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="text-cyan font-bold">{dom.code}</span>
                    <IconComp className="w-3.5 h-3.5 text-steel-light" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {dom.title}
                  </h4>
                  <p className="text-[11px] text-steel-light mt-1 line-clamp-1">
                    {dom.tagline}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION E — FEATURED HARDWARE PROJECTS SHOWCASE
          ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08] relative bg-gradient-to-b from-transparent via-cyan/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                // 03 — HARDWARE IN ACTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Featured Engineering Projects
              </h2>
              <p className="text-sm sm:text-base text-steel-light leading-relaxed">
                Real working prototypes engineered, wired, and fabricated by Circuitron members. Every project represents documented hardware and tested firmware.
              </p>
            </div>

            <Link to="/projects" className="btn-glow-cyan self-start md:self-auto shrink-0">
              <span>Explore All Projects ({projects.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Projects Grid with Rounded Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : (idx % 2) * 0.1, ease: easeCurve }}
                className="glass-card rounded-2xl border border-white/10 hover:border-cyan/50 transition-all flex flex-col group overflow-hidden shadow-xl"
              >
                {/* Real Project Image (Full Image Cleanly Visible) */}
                <div className="relative h-60 sm:h-72 bg-[#030712] overflow-hidden border-b border-white/[0.08] flex items-center justify-center p-3">
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-lg drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)] group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 z-20 px-3 py-1 font-mono text-[10px] rounded-full bg-[#050816]/90 border border-cyan/40 text-cyan font-bold backdrop-blur-md shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block mr-1.5 animate-pulse"></span>
                    {project.status.toUpperCase()}
                  </div>

                  <div className="absolute top-3 right-3 z-20 px-3 py-1 font-mono text-[10px] rounded-full bg-[#050816]/90 border border-white/10 text-white backdrop-blur-md shadow-sm">
                    {project.year}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-xs font-mono text-steel-light bg-[#050816]/90 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-sm">
                    <span className="text-cyan font-bold">{project.domain}</span>
                    <span className="text-steel-light text-[10px]">RVSCET LAB BUILD</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-steel-light leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Engineering Highlights */}
                    {project.highlights && (
                      <div className="space-y-1.5 pt-1">
                        {project.highlights.slice(0, 2).map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-steel-light font-mono">
                            <span className="text-cyan font-bold">›</span>
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="pt-2">
                      <span className="font-mono text-[10px] text-steel-light uppercase tracking-wider block mb-1.5">
                        HARDWARE &amp; FIRMWARE STACK:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-cyan/10 border border-cyan/30 text-cyan"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contributors & Link */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <span className="font-mono text-steel-light text-[11px]">
                      {project.contributors[0]}
                    </span>
                    <Link
                      to={`/projects#${project.id}`}
                      className="font-display font-bold text-cyan hover:underline flex items-center gap-1.5"
                    >
                      <span>Project Specs</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION F — LEARNING AND ACTIVITIES
          ========================================================================= */}
      <section id="events" className="py-20 sm:py-28 border-b border-white/[0.08] relative bg-radial-section backdrop-blur-[2px] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                // 04 — KNOWLEDGE &amp; ACTIVITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Workshops &amp; Activities
              </h2>
              <p className="text-sm sm:text-base text-steel-light leading-relaxed">
                Active technical clinics, hands-on bootcamps, and robotics trials conducted by Circuitron at the RVSCET campus.
              </p>
            </div>

            <Link to="/activities" className="btn-glass self-start md:self-auto shrink-0">
              <span>View Full Activity Log</span>
              <ArrowRight className="w-4 h-4 text-cyan" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12">
            
            {/* Completed Activities Showcase (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between pb-2 text-xs font-mono text-steel-light border-b border-white/[0.08]">
                <span>RECENT COMPLETED SESSIONS</span>
                <span className="text-cyan font-bold">VERIFIED ARCHIVE</span>
              </div>

              <div className="space-y-4">
                {completedActivities.slice(0, 3).map((act) => (
                  <div
                    key={act.id}
                    className="p-5 glass-card rounded-2xl border border-white/10 hover:border-cyan/50 transition-all flex flex-col sm:flex-row gap-5 items-start shadow-md"
                  >
                    <div className="w-full sm:w-44 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-[#030712] border border-cyan/20">
                      <img
                        src={act.image}
                        alt={act.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-cyan/15 border border-cyan/30 text-cyan font-bold">
                          {act.badge}
                        </span>
                        <span className="text-xs font-mono text-steel-light">
                          {act.date} • {act.venue}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-white">
                        {act.title}
                      </h3>

                      <p className="text-xs text-steel-light leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Standing & Upcoming Sessions (4 cols) */}
            <div id="schedule" className="lg:col-span-4 space-y-4 scroll-mt-28">
              <div className="flex items-center justify-between pb-2 text-xs font-mono text-steel-light border-b border-white/[0.08]">
                <span>LAB SCHEDULE &amp; CLINICS</span>
                <span className="text-cyan font-bold">CURRENT</span>
              </div>

              <div className="space-y-4">
                {upcomingActivities.map((up) => (
                  <div
                    key={up.id}
                    className="p-5 glass-card rounded-2xl border border-cyan/20 space-y-3 shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-cyan/15 text-cyan border border-cyan/30 font-bold">
                        {up.badge}
                      </span>
                      <span className="font-mono text-[10px] text-steel-light">
                        {up.status}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-base text-white">
                      {up.title}
                    </h4>

                    <div className="space-y-1 text-xs font-mono text-steel-light">
                      <div className="flex items-center gap-2 text-white">
                        <Calendar className="w-3.5 h-3.5 text-cyan" />
                        <span>{up.schedule}</span>
                      </div>
                      <p className="text-steel-light text-[11px] pt-1">
                        {up.venue}
                      </p>
                    </div>

                    <p className="text-xs text-steel-light leading-relaxed pt-1">
                      {up.description}
                    </p>

                    <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-cyan">
                      {up.eligibility}
                    </div>
                  </div>
                ))}

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-steel-light space-y-1">
                  <span className="text-white block font-semibold">NOTICE:</span>
                  <p className="text-[11px] leading-relaxed">
                    Event calendar updates are published strictly following academic council confirmation.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION G — EDITORIAL PHOTOGRAPHIC GALLERY
          ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08] relative bg-gradient-to-b from-transparent via-cyan/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                // 05 — VISUAL ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Photographic Archive
              </h2>
              <p className="text-sm sm:text-base text-steel-light leading-relaxed">
                Authentic documentation of workshops, robotics arenas, hardware prototypes, and student engineering ceremonies at RVSCET.
              </p>
            </div>

            <Link to="/gallery" className="btn-glass self-start md:self-auto shrink-0">
              <span>Explore Complete Gallery ({galleryItems.length})</span>
              <ArrowRight className="w-4 h-4 text-cyan" />
            </Link>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
            {featuredGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item, index)}
                className="group cursor-pointer glass-card rounded-2xl border border-white/10 hover:border-cyan/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg"
              >
                <div className="relative h-56 sm:h-64 bg-[#030712] overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={item.src}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                  />
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-lg drop-shadow-md group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 z-20 px-3 py-1 text-[10px] font-mono rounded-full bg-[#050816]/90 border border-cyan/40 text-cyan backdrop-blur-md shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 bg-[#060E1C]/90 border-t border-white/[0.06] space-y-1">
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-cyan transition-colors truncate">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] font-mono text-steel-light">
                    <span>{item.date}</span>
                    <span className="text-cyan flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION H — TEAM & FACULTY LEADERSHIP
          ========================================================================= */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08] relative bg-radial-section backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                // 06 — PEOPLE &amp; GOVERNANCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Faculty &amp; Executive Leadership
              </h2>
              <p className="text-sm sm:text-base text-steel-light leading-relaxed">
                Guided by senior faculty coordinators and driven by passionate student engineers at R.V.S. College of Engineering and Technology.
              </p>
            </div>

            <Link to="/team" className="btn-glass self-start md:self-auto shrink-0">
              <span>View Full Committee</span>
              <ArrowRight className="w-4 h-4 text-cyan" />
            </Link>
          </div>

          {/* Faculty Mentors */}
          <div className="pt-12">
            <span className="font-mono text-xs text-steel-light uppercase tracking-wider block mb-6 font-semibold">
              FACULTY PRINCIPAL INVESTIGATORS &amp; ADVISORS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facultyAdvisors.map((fac) => (
                <div
                  key={fac.id}
                  className="p-6 glass-card rounded-2xl border border-white/10 hover:border-cyan/40 transition-all flex flex-col sm:flex-row gap-5 items-center sm:items-start shadow-lg"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-[#030712] border border-cyan/30 shadow-md">
                    <img
                      src={fac.image}
                      alt={fac.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-2 text-center sm:text-left flex-1">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-cyan/15 border border-cyan/30 text-cyan font-bold">
                      {fac.tier}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white">
                      {fac.name}
                    </h3>
                    <p className="font-mono text-xs text-cyan font-medium">
                      {fac.role} • {fac.department}
                    </p>
                    <p className="text-xs text-steel-light leading-relaxed pt-1">
                      {fac.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Student Leads Preview */}
          <div className="pt-12">
            <span className="font-mono text-xs text-steel-light uppercase tracking-wider block mb-6 font-semibold">
              EXECUTIVE STUDENT LEADS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {executiveTeam.map((lead) => (
                <div
                  key={lead.id}
                  className="group glass-card rounded-2xl border border-white/10 hover:border-cyan/50 transition-all duration-300 p-5 flex flex-col justify-between shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="aspect-square rounded-xl overflow-hidden bg-[#030712] border border-white/10">
                      <img
                        src={lead.image}
                        alt={lead.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-cyan uppercase tracking-wider block font-bold">
                        {lead.role}
                      </span>
                      <h4 className="font-display font-bold text-base text-white group-hover:text-cyan transition-colors">
                        {lead.name}
                      </h4>
                      <p className="font-mono text-[11px] text-steel-light">
                        {lead.department}
                      </p>
                    </div>

                    <p className="text-xs text-steel-light leading-relaxed line-clamp-2">
                      {lead.bio}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                    <span className="text-steel-light">CIRCUITRON</span>
                    <a
                      href={lead.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-steel-light hover:text-cyan flex items-center gap-1 transition-colors"
                      aria-label={`${lead.name} LinkedIn Profile`}
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION I — JOIN CIRCUITRON CTA (Radiant Glassmorphic Banner)
          ========================================================================= */}
      <section id="contact" className="py-20 sm:py-28 relative bg-gradient-to-b from-transparent via-[#061226]/80 to-transparent border-b border-white/[0.08] overflow-hidden scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="glass-card-interactive rounded-3xl p-8 sm:p-14 text-center space-y-6 border border-cyan/40 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(18,181,226,0.25)] relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan/15 border border-cyan/40 text-xs font-mono text-cyan font-bold">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              <span>COMMUNITY INVITATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              YOUR NEXT IDEA STARTS HERE.
            </h2>

            <p className="text-base sm:text-lg text-steel-light font-sans max-w-2xl mx-auto leading-relaxed">
              Whether your curiosity lies in microcontrollers, sensor telemetry, autonomous rovers, or high-speed PCB fabrication, Circuitron provides the lab bench, tools, and mentorship to bring your engineering ideas into reality.
            </p>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to="/join" className="btn-glow-cyan text-sm py-3 px-8">
                <span>Join Circuitron Today</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={`mailto:${clubInfo.contact.email}`}
                className="btn-glass text-sm py-3 px-8"
              >
                <span>Contact Lab Mentors</span>
                <ExternalLink className="w-4 h-4 text-cyan" />
              </a>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-steel-light">
              <span>OPEN TO ALL RVSCET ENGINEERING STUDENTS</span>
              <span>•</span>
              <span>NO PRIOR HARDWARE EXPERIENCE REQUIRED</span>
              <span>•</span>
              <span className="text-cyan font-bold">DEPT. OF ECE &amp; EEE</span>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox for Gallery Preview */}
      {selectedPhoto && (
        <LightboxModal
          item={selectedPhoto}
          items={featuredGallery}
          currentIndex={currentPhotoIdx}
          onClose={() => setSelectedPhoto(null)}
          onPrev={() => {
            const nextIdx = (currentPhotoIdx - 1 + featuredGallery.length) % featuredGallery.length;
            setCurrentPhotoIdx(nextIdx);
            setSelectedPhoto(featuredGallery[nextIdx]);
          }}
          onNext={() => {
            const nextIdx = (currentPhotoIdx + 1) % featuredGallery.length;
            setCurrentPhotoIdx(nextIdx);
            setSelectedPhoto(featuredGallery[nextIdx]);
          }}
        />
      )}

    </div>
  );
}

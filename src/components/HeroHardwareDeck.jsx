import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Zap,
  Radio,
  Bot,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Sliders,
  Flame,
  Activity,
  Compass,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

const PROTOTYPES = [
  {
    id: "agro-rover",
    code: "CIR-ROV-01",
    title: "Autonomous Agro-Rover",
    domain: "Robotics & Precision IoT",
    status: "FIELD DEMONSTRATED",
    image: "/assets/gallery/smart-agro-rover-demonstration.webp",
    headline: "Autonomous Soil Sensing & GPS Waypoint Navigation",
    description: "Multi-terrain agricultural rover with onboard solar MPPT charging, obstacle-avoidance sonar, and 10km LoRa telemetry mesh.",
    stats: [
      { label: "TELEMETRY RANGE", value: "1.2 km" },
      { label: "SOLAR HARVEST", value: "18W MPPT" },
      { label: "PROCESSOR", value: "240 MHz Dual-Core" },
      { label: "DRIVE SYSTEM", value: "4x Planetary ESC" },
    ],
    subsystems: {
      silicon: "ESP32-WROOM-32D Dual-Core Xtensa + FreeRTOS multi-threaded scheduler for simultaneous motor drive & wireless telemetry.",
      power: "3S 18650 Li-ion battery pack with CN3791 MPPT solar step-down buck controller and over-discharge BMS.",
      sensors: "DHT22 ambient temperature, capacitive soil moisture probe, NPK sensor bus, and HC-SR04 sonar radar.",
    },
    techTags: ["ESP32", "FreeRTOS", "LoRa 433MHz", "Solar MPPT", "Robotics", "Autonomous"],
  },
  {
    id: "smart-helmet",
    code: "CIR-HLM-02",
    title: "IoT Smart Safety Helmet",
    domain: "Embedded Systems & Safety",
    status: "PROTOTYPE VERIFIED",
    image: "/assets/gallery/smart-helmet-iot-safety-presentation.webp",
    headline: "Automated Crash Impact SOS & Alcohol Ignition Interlock",
    description: "Intelligent industrial & rider safety headgear with real-time piezoelectric impact sensing, GSM geolocation beaconing, and sobriety verification.",
    stats: [
      { label: "RESPONSE TIME", value: "<120 ms" },
      { label: "BATTERY LIFE", value: "36 Hours" },
      { label: "IMPACT SENSOR", value: "Piezo High-G" },
      { label: "EMERGENCY SOS", value: "GSM + GPS" },
    ],
    subsystems: {
      silicon: "High-reliability microcontroller running event-driven interrupt architecture to detect high-G sudden deceleration.",
      power: "Ultra-slim 3.7V 1200mAh Lithium-Polymer cell with TP4056 USB-C fast charging and low-quiescent LDO regulators.",
      sensors: "MQ-3 high-sensitivity alcohol gas sensor, SW-420 crash shock sensor, and NEO-6M satellite positioning beacon.",
    },
    techTags: ["ATmega", "GPS NEO-6M", "GSM SIM800L", "Piezo Impact", "Gas Sensor", "IoT"],
  },
  {
    id: "robo-race",
    code: "CIR-BOT-03",
    title: "All-Terrain Combat Racer",
    domain: "High-Torque Robotics",
    status: "CHAMPIONSHIP WINNER",
    image: "/assets/gallery/all-terrain-robo-race-championship.webp",
    headline: "Differential Drive Rover Built for Extreme Arenas",
    description: "Rugged competition robot engineered with metal gearboxes, high-discharge LiPo bus, and low-latency 2.4GHz spread spectrum control.",
    stats: [
      { label: "TOP SPEED", value: "28 km/h" },
      { label: "PEAK CURRENT", value: "45A Burst" },
      { label: "BATTERY BUS", value: "11.1V 3S LiPo" },
      { label: "RADIO LINK", value: "2.4GHz FHSS" },
    ],
    subsystems: {
      silicon: "Deterministic micro-controller executing high-frequency 20kHz PWM motor commutation and real-time battery voltage monitoring.",
      power: "3S 2200mAh 35C high-discharge lithium-polymer pack with XT60 heavy-gauge bus and Schottky flyback diodes.",
      sensors: "Optical wheel quadrature encoders for closed-loop speed control and onboard hall-effect current shunts.",
    },
    techTags: ["Robotics", "PWM ESC", "LiPo 3S 35C", "Differential Drive", "2.4GHz RF"],
  },
  {
    id: "smart-grid",
    code: "CIR-ENG-04",
    title: "Eco Power Grid Monitor",
    domain: "Energy & Distributed IoT",
    status: "EXHIBITION AWARD",
    image: "/assets/gallery/eco-power-plant-clean-energy-model.webp",
    headline: "Renewable Generation Telemetry & Smart Load Shedding",
    description: "Demonstration model for distributed clean energy generation with automated phase monitoring, solar-hydro telemetry, and cloud dashboard.",
    stats: [
      { label: "MONITORING", value: "Real-Time AC/DC" },
      { label: "CLOUD BROKER", value: "MQTT / WebSockets" },
      { label: "EFFICIENCY", value: "94.2% Peak" },
      { label: "GRID BUS", value: "Isolated Dual Rail" },
    ],
    subsystems: {
      silicon: "IoT gateway node parsing analog voltage/current sensors with 16-bit external ADC and pushing telemetry to cloud brokers.",
      power: "Dual solar and simulated hydro turbine input with automatic solid-state relay switching and battery buffer storage.",
      sensors: "ACS712 hall-effect current sensors, ZMPT101B AC voltage transformers, and environmental temperature monitors.",
    },
    techTags: ["Clean Tech", "MQTT", "Power Electronics", "Sensors", "IoT Grid"],
  },
];

export default function HeroHardwareDeck() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeSubsystem, setActiveSubsystem] = useState("silicon");
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const activeProto = PROTOTYPES[activeIdx];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    if (isPaused || isScanning) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % PROTOTYPES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, isScanning]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % PROTOTYPES.length);
    setActiveSubsystem("silicon");
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + PROTOTYPES.length) % PROTOTYPES.length);
    setActiveSubsystem("silicon");
  };

  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      setTimeout(() => setScanComplete(false), 3000);
    }, 900);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="rounded-3xl overflow-hidden glass-card border-cyan/40 shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_50px_rgba(0,212,255,0.2)] flex flex-col transition-all relative"
    >
      {/* Top Deck Banner: Circuitron Hardware Matrix */}
      <div className="bg-[#09152a] border-b border-white/[0.08] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan/30 to-[#050c18] border border-cyan/50 p-1 flex items-center justify-center shadow-[0_0_12px_rgba(0,212,255,0.3)] shrink-0">
            <img src="/logo.png" alt="Circuitron" className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-display font-extrabold text-sm text-white tracking-tight flex items-center gap-2">
              <span>CIRCUITRON PROTOTYPE HOLODECK</span>
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
            </span>
            <span className="font-mono text-[10px] text-steel-light block">
              RVSCET Department of ECE &amp; EEE // Verified Student Hardware
            </span>
          </div>
        </div>

        {/* Live Lab Status Pill & Auto-Rotation Status */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/[0.05] border border-white/10 text-steel-light hover:text-cyan flex items-center gap-1 transition-colors"
            title={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
          >
            {isPaused ? <Play className="w-3 h-3 text-cyan" /> : <Pause className="w-3 h-3" />}
            <span className="hidden sm:inline">{isPaused ? "PAUSED" : "AUTO"}</span>
          </button>

          <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan/15 border border-cyan/40 text-cyan font-bold shadow-[0_0_10px_rgba(0,212,255,0.25)]">
            ● {activeIdx + 1} / {PROTOTYPES.length}
          </span>
        </div>
      </div>

      {/* Prototype Selector Pills */}
      <div className="p-3 sm:p-4 bg-[#050c18]/90 border-b border-white/[0.08] flex items-center gap-2 overflow-x-auto no-scrollbar">
        {PROTOTYPES.map((proto, idx) => {
          const isSelected = activeIdx === idx;
          return (
            <button
              key={proto.id}
              onClick={() => {
                setActiveIdx(idx);
                setActiveSubsystem("silicon");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                isSelected
                  ? "bg-cyan text-[#040e1a] font-bold shadow-[0_0_15px_rgba(0,212,255,0.5)] border border-cyan"
                  : "bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-steel-light hover:text-white"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#040e1a]" : "bg-cyan"}`}></span>
              <span>{proto.code}: {proto.title}</span>
            </button>
          );
        })}
      </div>

      {/* Auto-Rotation Progress Bar Line */}
      <div className="h-[2px] bg-white/[0.06] w-full relative overflow-hidden">
        <motion.div
          key={activeIdx + (isPaused ? "-paused" : "-playing")}
          initial={{ width: "0%" }}
          animate={{ width: isPaused ? "0%" : "100%" }}
          transition={{ duration: 4.0, ease: "linear" }}
          className="h-full bg-gradient-to-r from-cyan via-[#56D4F7] to-cyan shadow-[0_0_8px_rgba(0,212,255,0.8)]"
        />
      </div>

      {/* Main Display Canvas & Showcase Body */}
      <div className="p-4 sm:p-6 space-y-5">
        
        {/* Machine Photo Showcase Stage (Full Image Cleanly Visible with Ambient Cyber Glow) */}
        <div className="relative h-[320px] xs:h-[380px] sm:h-[460px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-[#030713] shadow-2xl group flex items-center justify-center p-3 sm:p-5">
          <AnimatePresence>
            <motion.div
              key={activeProto.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center p-3 sm:p-5"
            >
              {/* Ambient Cyber Backdrop Glow */}
              <img
                src={activeProto.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-25 scale-110 pointer-events-none"
              />

              {/* Clean, Full Foreground Machine Image (100% Uncropped & Visible on Web & Mobile) */}
              <img
                src={activeProto.image}
                alt={activeProto.title}
                className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-xl drop-shadow-[0_15px_45px_rgba(0,0,0,0.85)] group-hover:scale-[1.015] transition-transform duration-500"
              />
            </motion.div>
          </AnimatePresence>

          {/* Previous / Next Chevron Navigation Buttons */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#050c18]/80 hover:bg-cyan hover:text-[#040e1a] text-white border border-white/15 hover:border-cyan transition-all z-20 shadow-xl backdrop-blur-md opacity-80 sm:opacity-0 group-hover:opacity-100"
            aria-label="Previous prototype"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>
          
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#050c18]/80 hover:bg-cyan hover:text-[#040e1a] text-white border border-white/15 hover:border-cyan transition-all z-20 shadow-xl backdrop-blur-md opacity-80 sm:opacity-0 group-hover:opacity-100"
            aria-label="Next prototype"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Scanning Laser Line Effect when active */}
          {isScanning && (
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 0.9, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent shadow-[0_0_20px_#00d4ff] pointer-events-none z-20"
            />
          )}

          {/* Top Left Status Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap items-center gap-1.5 sm:gap-2 z-20">
            <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-mono bg-[#050c18]/90 backdrop-blur-md border border-cyan/40 text-cyan font-bold shadow-[0_0_10px_rgba(0,212,255,0.3)]">
              {activeProto.status}
            </span>
            <span className="px-2 sm:px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/[0.08] backdrop-blur-md border border-white/10 text-white font-medium">
              {activeProto.domain}
            </span>
          </div>

          {/* Top Right Quick Diagnostic Trigger */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
            <button
              type="button"
              onClick={handleSimulateScan}
              disabled={isScanning}
              className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-mono bg-[#050c18]/90 hover:bg-cyan hover:text-[#040e1a] backdrop-blur-md border border-cyan/40 text-cyan transition-all flex items-center gap-1.5 shadow-md font-bold"
            >
              {isScanning ? (
                <>
                  <Activity className="w-3 h-3 animate-spin text-cyan" />
                  <span className="hidden xs:inline">DIAGNOSTIC SCAN...</span>
                </>
              ) : scanComplete ? (
                <>
                  <CheckCircle2 className="w-3 h-3 text-[#10b981]" />
                  <span className="text-[#10b981]">SYSTEMS NOMINAL</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3 h-3" />
                  <span className="hidden xs:inline">SIMULATE RUN</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Machine Title & Mission Overview Strip (Clean, Uncluttered, High-Contrast) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#061021]/90 border border-white/10 backdrop-blur-md shadow-lg space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-2.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-cyan/15 border border-cyan/30 text-cyan font-bold">
                {activeProto.code}
              </span>
              <h3 className="font-display font-extrabold text-lg sm:text-2xl text-white">
                {activeProto.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-steel-light hidden sm:inline">
              RVSCET HARDWARE INITIATIVE
            </span>
          </div>

          <p className="text-xs sm:text-sm text-steel-light leading-relaxed">
            <span className="text-white font-medium">{activeProto.headline}</span> — {activeProto.description}
          </p>
        </div>

        {/* 4 Mission Telemetry Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {activeProto.stats.map((st, i) => (
            <div key={i} className="p-3 rounded-2xl bg-[#09152a] border border-white/10 text-xs font-mono space-y-0.5">
              <span className="text-white/40 block text-[10px] uppercase font-medium">{st.label}</span>
              <span className="text-cyan font-bold text-sm block truncate">{st.value}</span>
            </div>
          ))}
        </div>

        {/* Interactive Subsystem Inspector Tabs */}
        <div className="p-4 sm:p-5 rounded-2xl glass-card border-white/10 space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
            <span className="text-xs font-mono text-white font-bold flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-cyan" />
              INSPECT INTERNAL SUBSYSTEM:
            </span>

            <div className="flex items-center gap-1.5">
              {[
                { id: "silicon", label: "Silicon MCU", icon: Cpu },
                { id: "power", label: "Power & Rail", icon: Zap },
                { id: "sensors", label: "Sensors & Bus", icon: Radio },
              ].map((sub) => {
                const isSubActive = activeSubsystem === sub.id;
                const Icon = sub.icon;
                return (
                  <button
                    key={sub.id}
                    onClick={() => setActiveSubsystem(sub.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                      isSubActive
                        ? "bg-cyan/20 border border-cyan text-cyan font-bold shadow-[0_0_10px_rgba(0,212,255,0.3)]"
                        : "bg-white/[0.04] border border-white/5 text-steel-light hover:text-white"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{sub.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subsystem Technical Detail */}
          <div className="text-xs font-mono text-steel-light leading-relaxed">
            <p className="font-light">
              <strong className="text-white font-semibold">ENGINEERING SPEC: </strong>
              {activeProto.subsystems[activeSubsystem]}
            </p>
          </div>

          {/* Technology Chips & Project Link */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06]">
            <div className="flex flex-wrap gap-1.5">
              {activeProto.techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan/10 border border-cyan/25 text-cyan font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to="/projects"
              className="text-xs font-display font-semibold text-cyan hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Explore Full Project Specs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

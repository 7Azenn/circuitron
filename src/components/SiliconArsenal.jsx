import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Zap, Radio, Bot, Sparkles, Terminal, Activity, Layers, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CHIPS = [
  {
    id: "stm32",
    code: "STM32F401CCU6",
    family: "ARM Cortex-M4",
    frequency: "84 MHz",
    flash: "256 KB Flash / 64 KB SRAM",
    peripherals: "DMA, Hardware FPU, 12-bit ADC, USB OTG, SPI/I2C/UART",
    tagline: "The High-Performance Embedded Brain",
    application: "Autonomous Flight Controllers & Precision Motion Systems",
    voltage: "3.3V Logic",
    package: "UFQFPN48",
    color: "#00d4ff",
  },
  {
    id: "esp32",
    code: "ESP32-S3-WROOM-1",
    family: "Dual-Core Xtensa LX7",
    frequency: "240 MHz",
    flash: "8 MB Flash / 512 KB SRAM + 2MB PSRAM",
    peripherals: "Wi-Fi 802.11 b/g/n, BLE 5.0 Mesh, AI Vector Instructions",
    tagline: "The Connected IoT Supercluster",
    application: "Autonomous Agro-Rover Cloud Telemetry & Smart City Grids",
    voltage: "3.0V - 3.6V",
    package: "SMD-44 Module",
    color: "#10b981",
  },
  {
    id: "rp2040",
    code: "RP2040 DUAL-CORE",
    family: "Dual ARM Cortex-M0+",
    frequency: "133 MHz",
    flash: "External QSPI up to 16 MB",
    peripherals: "8x Programmable I/O (PIO) State Machines, 2x SPI, 2x I2C",
    tagline: "Custom Silicon Protocol Generator",
    application: "High-Speed Logic Analyzers & Custom Stepper Step-Generators",
    voltage: "1.8V - 3.3V",
    package: "QFN-56",
    color: "#f59e0b",
  },
  {
    id: "lora",
    code: "SEMTECH SX1278",
    family: "Long-Range RF Transceiver",
    frequency: "433 MHz / 868 MHz",
    flash: "Hardware Packet FIFO (256B)",
    peripherals: "+20 dBm RF Output, -148 dBm Sensitivity, FSK/GFSK/LoRa",
    tagline: "10km Non-Line-of-Sight Wireless Telemetry",
    application: "Agricultural Remote Soil Nodes & Emergency Beacons",
    voltage: "1.8V - 3.7V",
    package: "SMD-16 Module",
    color: "#a855f7",
  },
  {
    id: "drv8833",
    code: "TI DRV8833",
    family: "Dual H-Bridge Motor Driver",
    frequency: "50 kHz PWM",
    flash: "Integrated Flywheel Diodes",
    peripherals: "Dual 1.5A Continuous (2A Peak), Overcurrent & Thermal Trip",
    tagline: "High-Torque Physical Actuation",
    application: "Combat Battlebots & Differential Drive Chassis",
    voltage: "2.7V - 10.8V",
    package: "TSSOP-16 PowerPAD",
    color: "#ef4444",
  },
  {
    id: "mpu6050",
    code: "INVENSENSE MPU-6050",
    family: "6-Axis Motion Tracking DMP",
    frequency: "400 kHz I2C Fast-Mode",
    flash: "Internal 1024-byte FIFO",
    peripherals: "3-Axis Gyro (±2000°/s) + 3-Axis Accel (±16g), Digital Motion Processor",
    tagline: "Inertial Orientation & Crash Sense",
    application: "IoT Smart Safety Helmets & Self-Balancing Inverted Pendulums",
    voltage: "2.375V - 3.46V",
    package: "QFN-24",
    color: "#38bdf8",
  },
];

export default function SiliconArsenal() {
  const [activeChipId, setActiveChipId] = useState("stm32");
  const activeChip = CHIPS.find((c) => c.id === activeChipId) || CHIPS[0];

  return (
    <section className="py-20 sm:py-28 border-b border-white/[0.08] relative overflow-hidden bg-gradient-to-b from-transparent via-[#061124]/40 to-transparent">
      {/* Background Cyber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-xs font-mono text-cyan mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan animate-pulse" />
              <span>THE HARDWARE STACK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              The Silicon Arsenal.
            </h2>
            <p className="text-steel-light text-sm sm:text-base max-w-xl mt-2 font-light">
              We don't do toy drag-and-drop block coding. Circuitron members program bare-metal registers, design hardware PCB layers, and interface with industry-grade silicon.
            </p>
          </div>

          <div className="text-xs font-mono text-steel-light shrink-0">
            <span className="text-cyan font-bold">6 ARCHITECTURES</span> // LAB ACCREDITED
          </div>
        </div>

        {/* Interactive Chip Switcher & Holographic Specs View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Chip Selector Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {CHIPS.map((chip) => {
              const isSelected = chip.id === activeChipId;
              return (
                <button
                  key={chip.id}
                  onClick={() => setActiveChipId(chip.id)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 relative group overflow-hidden ${
                    isSelected
                      ? "bg-[#08172e] border-cyan/60 shadow-[0_0_25px_rgba(0,212,255,0.25)] scale-[1.01]"
                      : "bg-[#050c18]/80 hover:bg-[#071324] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white group-hover:text-cyan transition-colors">
                      {chip.code}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full transition-all"
                      style={{
                        backgroundColor: chip.color,
                        boxShadow: isSelected ? `0 0 10px ${chip.color}` : "none",
                      }}
                    ></span>
                  </div>

                  <div className="mt-1 flex items-center justify-between text-[11px] font-mono text-steel-light">
                    <span>{chip.family}</span>
                    <span className="text-cyan font-semibold">{chip.frequency}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Holographic Silicon Inspector HUD (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChip.id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-8 rounded-3xl glass-card border-cyan/40 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(0,212,255,0.15)] space-y-6 relative overflow-hidden"
              >
                {/* Silicon Circuit Laser Watermark */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-radial-accent opacity-20 pointer-events-none" />

                {/* Top Chip Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-cyan" />
                      <span className="text-xs font-mono text-cyan uppercase tracking-wider font-bold">
                        {activeChip.family}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                      {activeChip.code}
                    </h3>
                  </div>

                  <div className="text-right font-mono text-xs">
                    <span className="px-3 py-1 rounded-full text-xs font-bold inline-block" style={{ backgroundColor: `${activeChip.color}20`, color: activeChip.color, border: `1px solid ${activeChip.color}50` }}>
                      {activeChip.frequency} CLOCK
                    </span>
                    <span className="block text-steel-light text-[11px] mt-1">{activeChip.package}</span>
                  </div>
                </div>

                {/* Tagline Creed */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-cyan font-medium">
                  "{activeChip.tagline}"
                </div>

                {/* Technical Specifications Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-[#050c18] border border-white/10 space-y-1">
                    <span className="text-white/40 block text-[10px] uppercase">MEMORY ARCHITECTURE:</span>
                    <span className="text-white font-semibold text-sm">{activeChip.flash}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#050c18] border border-white/10 space-y-1">
                    <span className="text-white/40 block text-[10px] uppercase">OPERATING VOLTAGE:</span>
                    <span className="text-cyan font-semibold text-sm">{activeChip.voltage}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#050c18] border border-white/10 space-y-1 col-span-1 sm:col-span-2">
                    <span className="text-white/40 block text-[10px] uppercase">HARDWARE PERIPHERALS &amp; BUSES:</span>
                    <span className="text-white font-medium text-xs leading-relaxed">{activeChip.peripherals}</span>
                  </div>
                </div>

                {/* Real-World Lab Application */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-white/40 font-mono block text-[10px] uppercase">RVSCET LAB DEPLOYMENT:</span>
                    <span className="text-white font-display font-semibold text-sm">{activeChip.application}</span>
                  </div>

                  <Link
                    to="/domains"
                    className="btn-glow-cyan text-xs py-2 px-4 self-start sm:self-auto shrink-0"
                  >
                    <span>Master This Chip</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

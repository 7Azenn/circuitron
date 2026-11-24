import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Zap,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Volume2,
  VolumeX,
  Crosshair,
  Sparkles,
  Cpu,
  Layers,
} from "lucide-react";

// Real Hardware Signals Available on Circuitron Lab Bench
const HARDWARE_PROBES = [
  {
    id: "spi-clock",
    name: "STM32 SPI_SCK",
    code: "PROBE-01",
    freq: 16.0, // MHz
    vpp: 3.3,
    type: "clock",
    domain: "Embedded Systems",
    desc: "16.0 MHz high-speed SPI bus master clock driving OLED display & SD card storage.",
    ch1Wave: "square",
    ch2Wave: "spi-data",
  },
  {
    id: "i2c-sensor",
    name: "ESP32 I2C_SCL",
    code: "PROBE-02",
    freq: 4.0, // 400 kHz
    vpp: 3.3,
    type: "i2c",
    domain: "IoT Telemetry",
    desc: "400 kHz Fast-Mode I2C bus communicating with MPU-6050 6-DOF IMU & BME280 sensor.",
    ch1Wave: "square",
    ch2Wave: "i2c-data",
  },
  {
    id: "motor-esc",
    name: "PWM MOTOR ESC",
    code: "PROBE-03",
    freq: 2.0, // 20 kHz
    vpp: 5.0,
    type: "pwm",
    domain: "Robotics Drive",
    desc: "20 kHz PWM gate drive controlling brushless motor speed on Autonomous Agro-Rover.",
    ch1Wave: "pwm",
    ch2Wave: "current-ripple",
  },
  {
    id: "lora-burst",
    name: "LORA 433MHz RF",
    code: "PROBE-04",
    freq: 28.0,
    vpp: 2.8,
    type: "rf",
    domain: "Wireless Mesh",
    desc: "433 MHz SX1278 FSK packet telemetry burst transmitted across RVSCET campus.",
    ch1Wave: "sine",
    ch2Wave: "pulse",
  },
];

export default function HardwareWorkbenchDeck() {
  const [activeProbeIdx, setActiveProbeIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [timebase, setTimebase] = useState(25); // 10 to 60 (horizontal zoom)
  const [voltsDiv, setVoltsDiv] = useState(1.0); // 0.5 to 2.0 (vertical zoom)
  const [isCh2Active, setIsCh2Active] = useState(true);
  const [isSurge, setIsSurge] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [triggerLevel, setTriggerLevel] = useState(1.65); // Volts

  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);

  const activeProbe = HARDWARE_PROBES[activeProbeIdx];

  // Web Audio Synthesizer Beep
  const playBeep = (freq = 900, duration = 0.05, type = "sine") => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  };

  // Trigger Single Surge / Auto-Lock
  const handleAutoLock = () => {
    setIsSurge(true);
    playBeep(1200, 0.15, "triangle");
    setTimeout(() => {
      setIsSurge(false);
    }, 400);
  };

  // Oscilloscope Screen Renderer (Dual-Channel Real Phosphor Canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    let offset = 0;

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      // CRT Phosphor Dark Backdrop
      ctx.fillStyle = isSurge ? "#0d2238" : "#040b17";
      ctx.fillRect(0, 0, w, h);

      // Graticule Divisions (8 Vertical x 10 Horizontal divisions)
      const numCols = 10;
      const numRows = 8;
      const dx = w / numCols;
      const dy = h / numRows;

      ctx.strokeStyle = "rgba(18, 181, 226, 0.12)";
      ctx.lineWidth = 0.7;

      // Draw grid lines & sub-division tick marks
      for (let i = 0; i <= numCols; i++) {
        const x = i * dx;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let j = 0; j <= numRows; j++) {
        const y = j * dy;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Center Major Axes
      ctx.strokeStyle = "rgba(18, 181, 226, 0.35)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(w / 2, 0);
      ctx.lineTo(w / 2, h);
      ctx.stroke();

      // Tick marks on center axes
      ctx.fillStyle = "rgba(18, 181, 226, 0.5)";
      const tickStep = dx / 5;
      for (let x = 0; x <= w; x += tickStep) {
        ctx.fillRect(x, h / 2 - 2, 1, 4);
      }
      for (let y = 0; y <= h; y += dy / 5) {
        ctx.fillRect(w / 2 - 2, y, 4, 1);
      }

      // Advance animation offset only when running
      if (isRunning) {
        offset += (activeProbe.freq * 0.003) * (timebase / 25);
      }

      // ==========================================
      // CHANNEL 1 TRACE: Electric Cyan (#00d4ff)
      // ==========================================
      const amp1 = (30 * voltsDiv) * (isSurge ? 1.6 : 1);
      ctx.strokeStyle = isSurge ? "#ffffff" : "#00d4ff";
      ctx.lineWidth = isSurge ? 3 : 2;
      ctx.shadowColor = isSurge ? "#00ffff" : "rgba(0, 212, 255, 0.9)";
      ctx.shadowBlur = isSurge ? 16 : 8;
      ctx.beginPath();

      const wave1 = activeProbe.ch1Wave;
      const freqFactor = (activeProbe.freq * 0.18) * (timebase / 25);

      for (let x = 0; x < w; x++) {
        const t = (x / w) * Math.PI * freqFactor + offset;
        let y = h / 2 - 15; // Channel 1 baseline slightly offset upward

        if (wave1 === "square") {
          // Digital clock with realistic finite rise/fall time & overshoot
          const sinVal = Math.sin(t);
          const rise = Math.min(1, Math.max(-1, sinVal * 12));
          y += -rise * amp1 + (Math.sin(t * 8) * (amp1 * 0.04));
        } else if (wave1 === "pwm") {
          const phase = t % (Math.PI * 2);
          const dutyThreshold = Math.PI * 1.25; // 62.5% duty
          y += (phase < dutyThreshold ? -1 : 1) * amp1;
        } else if (wave1 === "sine") {
          y += -Math.sin(t) * amp1;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // ==========================================
      // CHANNEL 2 TRACE: Phosphor Yellow (#EAB308)
      // ==========================================
      if (isCh2Active) {
        const amp2 = 22 * voltsDiv;
        ctx.strokeStyle = "#eab308";
        ctx.lineWidth = 1.8;
        ctx.shadowColor = "rgba(234, 179, 8, 0.8)";
        ctx.shadowBlur = 6;
        ctx.beginPath();

        const wave2 = activeProbe.ch2Wave;
        for (let x = 0; x < w; x++) {
          const t = (x / w) * Math.PI * (freqFactor * 0.5) + offset * 0.7;
          let y = h / 2 + 25; // Channel 2 baseline offset downward

          if (wave2 === "spi-data" || wave2 === "i2c-data") {
            // Simulated digital packets with intermittent byte bursts
            const packetPhase = (t * 0.4) % (Math.PI * 2);
            if (packetPhase < Math.PI * 1.4) {
              const bitPattern = Math.sign(Math.sin(t * 3.2)) * Math.sign(Math.cos(t * 1.5));
              y += -bitPattern * amp2 * 0.85;
            }
          } else if (wave2 === "current-ripple") {
            // Inductive motor ripple waveform
            y += -(Math.sin(t * 2) * amp2 * 0.6 + Math.cos(t * 6) * amp2 * 0.25);
          } else if (wave2 === "pulse") {
            // Telemetry ping pulses
            const burst = (t * 0.3) % (Math.PI * 2);
            y += burst < 0.4 ? -amp2 * 1.2 : 0;
          }

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Reset Shadow
      ctx.shadowBlur = 0;

      // On-Screen Trigger Marker Arrow (T on right side)
      const trigY = h / 2 - (triggerLevel - 1.65) * 20;
      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.moveTo(w - 2, trigY);
      ctx.lineTo(w - 10, trigY - 5);
      ctx.lineTo(w - 10, trigY + 5);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 9px monospace";
      ctx.fillText("T", w - 9, trigY + 3);

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isRunning, activeProbe, timebase, voltsDiv, isCh2Active, isSurge, triggerLevel]);

  return (
    <div className="rounded-3xl overflow-hidden border border-cyan/40 bg-[#06101e] shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_50px_rgba(0,212,255,0.25)] flex flex-col transition-all">
      
      {/* =========================================================================
          AUTHENTIC DSO INSTRUMENT BEZEL & TOP BAR
          ========================================================================= */}
      <div className="bg-[#09152a] border-b border-white/[0.08] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        
        {/* Instrument Model Brand Badge */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center border border-cyan/40 bg-[#050c18] p-1 shadow-[0_0_15px_rgba(0,212,255,0.3)] shrink-0">
            <img
              src="/logo.png"
              alt="Circuitron"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xs sm:text-sm text-white tracking-tight">
                CIRCUITRON CORE SIGNAL LAB
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan/15 border border-cyan/40 text-cyan font-bold shadow-[0_0_8px_rgba(0,212,255,0.25)]">
                CIR-DSO-400
              </span>
            </div>
            <span className="font-mono text-[10px] text-steel-light">
              RVSCET Hardware &amp; IoT Society • Real-Time Dual-Channel Bus Analyzer
            </span>
          </div>
        </div>

        {/* Oscilloscope Header Telemetry Flags */}
        <div className="flex items-center gap-2 font-mono text-xs">
          {/* Status Indicator */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10b981]/15 border border-[#10b981]/40 text-[#10b981] font-bold text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span>{isRunning ? "AUTO TRIG'D" : "STOPPED"}</span>
          </div>

          {/* Sound FX Toggle */}
          <button
            type="button"
            onClick={() => {
              setAudioEnabled(!audioEnabled);
              playBeep(800, 0.05);
            }}
            className={`p-1.5 rounded-full border transition-all ${
              audioEnabled
                ? "bg-cyan/20 border-cyan text-cyan shadow-[0_0_10px_rgba(0,212,255,0.4)]"
                : "bg-white/[0.05] border-white/10 text-white/50 hover:text-white"
            }`}
            title="Toggle Oscilloscope Click Sound FX"
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>

      {/* =========================================================================
          OSCILLOSCOPE PHOSPHOR DISPLAY (CANVAS)
          ========================================================================= */}
      <div className="relative bg-[#040b17] p-2 sm:p-3 border-b border-white/[0.08]">
        
        {/* Top Channel Volts/Div Readouts Overlay */}
        <div className="absolute top-4 left-5 right-5 flex items-center justify-between text-[11px] font-mono pointer-events-none z-10">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#00d4ff]/20 border border-[#00d4ff]/50 text-[#00d4ff] font-bold">
              1 = {(500 * (1 / voltsDiv)).toFixed(0)}mV
            </span>
            {isCh2Active && (
              <span className="px-2 py-0.5 rounded bg-[#eab308]/20 border border-[#eab308]/50 text-[#eab308] font-bold">
                2 = {(1000 * (1 / voltsDiv)).toFixed(0)}mV
              </span>
            )}
            <span className="px-2 py-0.5 rounded bg-white/[0.08] text-white/80 font-medium hidden sm:inline-block">
              H = {(timebase * 0.4).toFixed(1)}ns
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#040b17]/90 px-2.5 py-0.5 rounded border border-white/10">
            <span className="text-white/60">FREQ:</span>
            <span className="text-cyan font-bold">{activeProbe.freq.toFixed(3)} MHz</span>
          </div>
        </div>

        {/* 60fps Phosphor Oscilloscope Screen */}
        <div className="rounded-2xl overflow-hidden border border-cyan/30 shadow-inner">
          <canvas
            ref={canvasRef}
            width={640}
            height={260}
            className="w-full h-56 sm:h-64 object-cover block"
          />
        </div>

        {/* Bottom On-Screen Measurement Readout Ribbon */}
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-mono">
          <div className="p-2 rounded-xl bg-[#09152a] border border-white/10 flex justify-between items-center">
            <span className="text-[#00d4ff] font-bold">CH1 V_PP:</span>
            <span className="text-white font-medium">{activeProbe.vpp.toFixed(2)} V</span>
          </div>
          <div className="p-2 rounded-xl bg-[#09152a] border border-white/10 flex justify-between items-center">
            <span className="text-[#00d4ff] font-bold">CH1 V_RMS:</span>
            <span className="text-white font-medium">{(activeProbe.vpp / 2.828).toFixed(2)} V</span>
          </div>
          <div className="p-2 rounded-xl bg-[#09152a] border border-white/10 flex justify-between items-center">
            <span className="text-[#eab308] font-bold">CH2 DUTY:</span>
            <span className="text-white font-medium">49.8 %</span>
          </div>
          <div className="p-2 rounded-xl bg-[#09152a] border border-white/10 flex justify-between items-center">
            <span className="text-[#10b981] font-bold">TRIG LOCK:</span>
            <span className="text-white font-medium">100 MSa/s</span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          AUTHENTIC DSO PHYSICAL CONTROL BENCH (Buttons, Knobs, Probes)
          ========================================================================= */}
      <div className="p-4 sm:p-6 bg-[#071324] space-y-5">
        
        {/* Signal Probe Channel Selector */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-white font-bold flex items-center gap-1.5">
              <Crosshair className="w-3.5 h-3.5 text-cyan" />
              LABORATORY TEST POINT PROBE SELECTOR:
            </span>
            <span className="text-cyan font-semibold text-[11px]">ACTIVE: {activeProbe.code}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {HARDWARE_PROBES.map((probe, idx) => {
              const isSelected = activeProbeIdx === idx;
              return (
                <button
                  key={probe.id}
                  onClick={() => {
                    setActiveProbeIdx(idx);
                    playBeep(450 + idx * 150, 0.06);
                  }}
                  className={`p-3 rounded-2xl text-left border transition-all duration-200 ${
                    isSelected
                      ? "bg-gradient-to-br from-cyan/25 to-[#0b254a] border-cyan text-white shadow-[0_0_15px_rgba(0,212,255,0.35)] scale-[1.02]"
                      : "bg-[#09152a]/70 hover:bg-[#0b1c36] border-white/10 text-steel-light hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className="font-bold text-cyan">{probe.code}</span>
                    <span className="text-white/40">{probe.freq}MHz</span>
                  </div>
                  <span className="font-display font-bold text-xs block text-white truncate">
                    {probe.name}
                  </span>
                  <span className="text-[10px] font-mono text-steel-light block mt-0.5 truncate">
                    {probe.domain}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-[11px] font-mono text-steel-light pt-1 font-light">
            {activeProbe.desc}
          </p>
        </div>

        {/* DSO Tactical Buttons & Horizontal/Vertical Scale Knobs */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-3 border-t border-white/[0.08] items-center">
          
          {/* Action Triggers (RUN/STOP, AUTO-LOCK, CH2 TOGGLE) */}
          <div className="sm:col-span-5 flex flex-wrap items-center gap-2">
            {/* Run / Stop Toggle */}
            <button
              type="button"
              onClick={() => {
                setIsRunning(!isRunning);
                playBeep(isRunning ? 400 : 800, 0.05);
              }}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-1.5 shadow-md ${
                isRunning
                  ? "bg-[#10b981] text-[#040e1a] hover:bg-[#34d399]"
                  : "bg-[#ef4444] text-white hover:bg-[#f87171]"
              }`}
            >
              {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isRunning ? "RUNNING" : "STOPPED"}</span>
            </button>

            {/* Auto Lock / Signal Surge */}
            <button
              type="button"
              onClick={handleAutoLock}
              className="px-4 py-2.5 rounded-xl font-mono text-xs font-bold bg-cyan/20 border border-cyan text-cyan hover:bg-cyan/30 transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,212,255,0.25)]"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>AUTO LOCK</span>
            </button>

            {/* CH2 Data Bus Toggle */}
            <button
              type="button"
              onClick={() => {
                setIsCh2Active(!isCh2Active);
                playBeep(650, 0.05);
              }}
              className={`px-3 py-2.5 rounded-xl font-mono text-xs font-bold border transition-all ${
                isCh2Active
                  ? "bg-[#eab308]/20 border-[#eab308] text-[#eab308]"
                  : "bg-white/[0.05] border-white/10 text-white/40 hover:text-white"
              }`}
            >
              <span>CH2: {isCh2Active ? "ON" : "OFF"}</span>
            </button>
          </div>

          {/* Interactive Dials / Sliders (Timebase & Volts/Div) */}
          <div className="sm:col-span-7 grid grid-cols-2 gap-3 font-mono text-xs">
            {/* Timebase Slider */}
            <div className="p-2.5 rounded-xl bg-[#09152a] border border-white/10 space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-white/60">TIMEBASE:</span>
                <span className="text-cyan font-bold">{(timebase * 0.4).toFixed(1)} ns/div</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="1"
                value={timebase}
                onChange={(e) => {
                  setTimebase(parseFloat(e.target.value));
                  playBeep(parseFloat(e.target.value) * 15 + 400, 0.02);
                }}
                className="w-full accent-cyan cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
              />
            </div>

            {/* Volts/Div Slider */}
            <div className="p-2.5 rounded-xl bg-[#09152a] border border-white/10 space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-white/60">VOLTS/DIV:</span>
                <span className="text-[#00d4ff] font-bold">{(500 / voltsDiv).toFixed(0)} mV</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={voltsDiv}
                onChange={(e) => {
                  setVoltsDiv(parseFloat(e.target.value));
                  playBeep(parseFloat(e.target.value) * 200 + 400, 0.02);
                }}
                className="w-full accent-cyan cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

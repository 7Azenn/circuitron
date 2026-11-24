import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Layers,
  Wrench,
  Users2,
  CheckCircle2,
  Compass,
  Target,
  Zap,
  ShieldCheck,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { clubInfo } from "../data/clubInfo";
import { facultyAdvisors } from "../data/team";
import EngineeringProgressBar from "../components/EngineeringProgressBar";

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1];

  return (
    <div className="bg-transparent text-offwhite min-h-screen relative z-10">
      <PageHeader
        code="// 01-ABOUT"
        tagline="ORIGIN, MISSION &amp; PHILOSOPHY"
        title="We Don't Just Study Technology. We Build It."
        description="Circuitron is the official Electronics &amp; IoT Club of R.V.S. College of Engineering and Technology (RVSCET), Jamshedpur. A community of hardware builders, firmware hackers, and curious innovators."
        breadcrumbs={[{ name: "About" }]}
      />

      {/* Story & Origin Section */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-xs font-mono text-cyan backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
                <span>FOUNDED 2018 • RVSCET JAMSHEDPUR</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
                From Curiosity to Tangible Engineering.
              </h2>

              <div className="space-y-4 text-steel-light text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Circuitron was founded in 2018 at RVS College of Engineering &amp; Technology, Jamshedpur, by a group of passionate electronics and robotics students who realized that real engineering begins when you touch a physical breadboard.
                </p>
                <p>
                  While engineering lectures teach the governing equations of Maxwell, Fourier transforms, and Boolean algebra, Circuitron was established to give students the lab benches, equipment, and mentorship required to build physical manifestations of those principles.
                </p>
                <p>
                  Over the years, the club has grown into the premier hardware collective on campus. We organize intensive hands-on clinics, design multi-layered printed circuit boards, build combat and racing robots, and architect telemetry networks for smart agriculture and energy grids.
                </p>
              </div>

              {/* Verified Facts Matrix */}
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-steel-light block text-[11px] mb-1">INSTITUTION</span>
                  <span className="text-white font-semibold text-sm">RVSCET Jamshedpur</span>
                </div>
                <div className="p-4 rounded-xl glass-card">
                  <span className="text-steel-light block text-[11px] mb-1">CAMPUS SEAT</span>
                  <span className="text-white font-semibold text-sm">Dept. of ECE &amp; EEE</span>
                </div>
                <div className="p-4 rounded-xl glass-card col-span-2 sm:col-span-1">
                  <span className="text-steel-light block text-[11px] mb-1">STATUS</span>
                  <span className="text-cyan font-semibold text-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan inline-block animate-pulse"></span>
                    Active Society
                  </span>
                </div>
              </div>
            </div>

            {/* Photographic Composition */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-2.5 rounded-2xl glass-card-interactive overflow-hidden shadow-2xl">
                <div className="rounded-xl overflow-hidden relative h-80 sm:h-96 bg-[#030713] flex items-center justify-center p-2">
                  <img
                    src="/assets/gallery/IMG-20251024-WA0004.webp"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                  />
                  <img
                    src="/assets/gallery/IMG-20251024-WA0004.webp"
                    alt="Student project exhibition and jury inspection at RVSCET"
                    className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-lg drop-shadow-lg hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 z-20 p-2.5 rounded-lg bg-[#050816]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono shadow-md">
                    <span className="text-white font-medium">PROJECT EVALUATION BENCH</span>
                    <span className="text-cyan font-bold">RVSCET LAB</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-card border-cyan/20 text-xs text-steel-light space-y-2">
                <span className="font-mono text-cyan text-xs font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan" />
                  FOUNDATIONAL CREED
                </span>
                <p className="font-mono text-white text-xs leading-relaxed">
                  "{clubInfo.statement}"
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Hands-on Engineering Matters */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-xs font-mono text-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
              <span>PHILOSOPHY &amp; PEDAGOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Why Hands-On Engineering Matters.
            </h2>
            <p className="text-steel-light text-base leading-relaxed font-light">
              In an era dominated by simulation software and abstract code, physical engineering is more critical than ever. Silicon, copper, and physical radio waves don't always behave like ideal SPICE models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl glass-card-interactive space-y-5">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shadow-[0_0_15px_rgba(18,181,226,0.15)]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Signal Integrity &amp; Real World Physics
              </h3>
              <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-light">
                When you design real circuits, trace capacitance, inductance, thermal dissipation, and ground noise cannot be ignored. We teach students how physical laws dictate reliable hardware.
              </p>
            </div>

            <div className="p-7 rounded-2xl glass-card-interactive space-y-5">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shadow-[0_0_15px_rgba(18,181,226,0.15)]">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Failure is a Diagnostic Data Point
              </h3>
              <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-light">
                A smoked MOSFET or an unexpected interrupt loop is the fastest teacher in engineering. We encourage rapid prototyping, test-bench instrumentation, and iterative refinement.
              </p>
            </div>

            <div className="p-7 rounded-2xl glass-card-interactive space-y-5">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan shadow-[0_0_15px_rgba(18,181,226,0.15)]">
                <Users2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Multidisciplinary Integration
              </h3>
              <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-light">
                Modern technology demands simultaneous mastery of electronics, embedded firmware, mechanical chassis fabrication, and cloud networks. Circuitron unifies these fields under one roof.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Facilities & Lab Infrastructure */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-xs font-mono text-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
                <span>CAMPUS INFRASTRUCTURE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Our Hardware Prototyping Laboratory
              </h2>
              <p className="text-steel-light text-sm sm:text-base leading-relaxed font-light">
                Located within the Department of Electronics &amp; Communication Engineering at RVSCET Jamshedpur, our workspace provides members with the specialized equipment needed to take concepts from breadboard to manufactured PCB.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Digital Storage Oscilloscopes (DSO) & Logic Analyzers for bus decoding",
                  "Regulated Dual-Channel DC Bench Power Supplies with current-limiting",
                  "Temperature-controlled ESD-safe Soldering and Desoldering Stations",
                  "Extensive Microcontroller Inventory (STM32, ESP32, AVR, NodeMCU, PIC)",
                  "Sensor testing suite: environmental, gas, IMU accelerometers, ultrasonic & LiDAR",
                  "High-torque motor test beds and LiPo battery safety charging chambers",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-steel-light">
                    <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              {/* Laboratory Telemetry Progress Bars */}
              <div className="pt-6 border-t border-white/[0.08] space-y-3">
                <span className="font-mono text-[11px] text-cyan uppercase tracking-wider block font-semibold">
                  LABORATORY READINESS &amp; CAPACITIES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <EngineeringProgressBar
                    code="CAP-01"
                    label="DSO & Test Instrumentation"
                    value={100}
                    color="cyan"
                    delay={0.2}
                  />
                  <EngineeringProgressBar
                    code="CAP-02"
                    label="ESD Soldering Stations"
                    value={100}
                    color="cyan"
                    delay={0.3}
                  />
                  <EngineeringProgressBar
                    code="CAP-03"
                    label="Microcontroller Stock"
                    value={96}
                    color="cyan"
                    delay={0.4}
                  />
                  <EngineeringProgressBar
                    code="CAP-04"
                    label="Sensor Calibration Suite"
                    value={94}
                    color="cyan"
                    delay={0.5}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-2.5 rounded-2xl glass-card-interactive overflow-hidden shadow-2xl">
                <div className="rounded-xl overflow-hidden relative h-80 sm:h-96 bg-[#030713] flex items-center justify-center p-2">
                  <img
                    src="/assets/gallery/IMG-20251024-WA0003.webp"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                  />
                  <img
                    src="/assets/gallery/IMG-20251024-WA0003.webp"
                    alt="Circuitron electronics laboratory setup at RVSCET"
                    className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-lg drop-shadow-lg hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 z-20 p-2.5 rounded-lg bg-[#050816]/90 backdrop-blur-md border border-white/10 text-xs font-mono text-steel-light flex justify-between items-center shadow-md">
                    <span className="text-white font-medium">ELECTRONICS LAB BENCH 03</span>
                    <span className="text-cyan font-bold">RVSCET ECE DEPT</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Faculty Advisory */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-xs font-mono text-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
              <span>ACADEMIC GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Faculty Advisory &amp; Mentorship
            </h2>
            <p className="text-steel-light text-sm sm:text-base leading-relaxed font-light">
              Circuitron operates under the faculty guidance of RVSCET professors who champion practical student engineering and institutional support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyAdvisors.map((advisor) => (
              <div
                key={advisor.id}
                className="p-6 sm:p-7 rounded-2xl glass-card-interactive flex flex-col sm:flex-row gap-6 items-center sm:items-start"
              >
                <div className="w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-[#050816] border border-white/10 shadow-lg">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2 text-center sm:text-left flex-1">
                  <span className="px-3 py-0.5 text-[11px] font-mono rounded-full bg-cyan/10 border border-cyan/30 text-cyan inline-block font-semibold">
                    {advisor.tier}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    {advisor.name}
                  </h3>
                  <p className="font-mono text-xs text-cyan">
                    {advisor.role}
                  </p>
                  <p className="font-mono text-[11px] text-steel-light">
                    {advisor.department}
                  </p>
                  <p className="text-xs text-steel-light leading-relaxed pt-2 font-light">
                    {advisor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-10 sm:p-14 rounded-3xl glass-card border-white/10 relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-1/4 w-80 h-40 bg-cyan/10 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              See the Technology in Action.
            </h2>
            <p className="text-steel-light text-sm sm:text-base max-w-xl mx-auto font-light">
              Explore our specialized technical domains or inspect our documented hardware projects.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/domains" className="btn-glow-cyan">
                <span>Explore Technical Domains</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/projects" className="btn-glass">
                <span>View Hardware Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

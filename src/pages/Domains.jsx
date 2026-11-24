import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Wifi,
  Radio,
  Bot,
  FlaskConical,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Wrench,
  Terminal,
  Activity,
  Sparkles,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { technicalDomains } from "../data/domains";
import { projects } from "../data/projects";
import EngineeringProgressBar from "../components/EngineeringProgressBar";

export default function Domains() {
  const domainIcons = {
    "embedded-systems": Cpu,
    iot: Wifi,
    "electronics-design": Radio,
    "robotics-automation": Bot,
    "research-innovation": FlaskConical,
  };

  return (
    <div className="bg-transparent text-offwhite min-h-screen relative z-10">
      <PageHeader
        code="// 02-DOMAINS"
        tagline="TECHNICAL PILLARS &amp; DISCIPLINES"
        title="Five Specialized Engineering Domains."
        description="Circuitron structures its laboratory research, workshops, and student mentorship across five core hardware and firmware domains."
        breadcrumbs={[{ name: "Domains" }]}
      />

      {/* Domain Fast Jump Sub-Nav */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#050816]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-4 no-scrollbar">
          <span className="text-[11px] font-mono text-cyan uppercase tracking-wider shrink-0 hidden sm:inline-flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
            DOMAINS JUMP:
          </span>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {technicalDomains.map((dom) => (
              <a
                key={dom.id}
                href={`#${dom.id}`}
                className="px-3.5 py-1.5 text-xs font-mono rounded-full bg-white/[0.04] hover:bg-cyan/15 border border-white/10 hover:border-cyan text-steel-light hover:text-cyan transition-all whitespace-nowrap shadow-sm"
              >
                {dom.code} // {dom.shortName}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Domains Content */}
      <div className="divide-y divide-white/[0.08]">
        {technicalDomains.map((domain, index) => {
          const IconComponent = domainIcons[domain.id] || Cpu;
          const relatedProjects = projects.filter((p) => p.domainId === domain.id);

          return (
            <section
              key={domain.id}
              id={domain.id}
              className="py-20 sm:py-28 scroll-mt-28 relative overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Domain Header Pill Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 text-xs font-mono rounded-full bg-cyan/15 text-cyan border border-cyan/40 font-bold shadow-[0_0_12px_rgba(18,181,226,0.2)]">
                      {domain.code}
                    </span>
                    <span className="font-mono text-xs text-steel-light uppercase tracking-wider">
                      DISCIPLINE SPECIFICATION
                    </span>
                  </div>

                  <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/[0.04] border border-white/10 text-steel-light">
                    {domain.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  {/* Left Column: Description, Topics, Technologies */}
                  <div className="lg:col-span-7 space-y-7">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/20 to-circuitron/30 border border-cyan/30 flex items-center justify-center text-cyan shadow-[0_0_20px_rgba(18,181,226,0.2)] shrink-0">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                          {domain.title}
                        </h2>
                        <p className="font-mono text-xs sm:text-sm text-cyan mt-1 font-medium">
                          {domain.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-steel-light text-sm sm:text-base leading-relaxed font-light">
                      {domain.description}
                    </p>

                    {/* Key Laboratory Topics */}
                    <div className="space-y-3 pt-2">
                      <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">
                        LABORATORY TOPICS &amp; CURRICULUM:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-steel-light font-mono">
                        {domain.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl glass-card border-white/10">
                            <span className="text-cyan font-bold">&gt;</span>
                            <span className="text-white/90">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hardware & Tools Stack */}
                    <div className="space-y-2.5 pt-2">
                      <span className="font-mono text-xs text-steel-light uppercase tracking-wider block">
                        COMPONENTS, ARCHITECTURES &amp; PROTOCOLS:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {domain.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-mono bg-cyan/10 border border-cyan/25 text-cyan font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Domain Readiness Metric Progress Bar */}
                    <div className="pt-2">
                      <EngineeringProgressBar
                        code={`${domain.code}-SPEC`}
                        label={`${domain.shortName} Laboratory Track Readiness`}
                        value={95 + (index % 5)}
                        color="cyan"
                        delay={0.2}
                      />
                    </div>

                    {/* Related Projects CTA */}
                    {relatedProjects.length > 0 && (
                      <div className="pt-4 border-t border-white/[0.08]">
                        <span className="font-mono text-xs text-steel-light uppercase tracking-wider block mb-3 font-semibold">
                          VALIDATED PROTOTYPES DEVELOPED IN THIS DOMAIN:
                        </span>
                        <div className="space-y-2.5">
                          {relatedProjects.map((proj) => (
                            <Link
                              key={proj.id}
                              to={`/projects#${proj.id}`}
                              className="p-3.5 rounded-xl glass-card-interactive flex items-center justify-between group transition-all"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-cyan"></span>
                                <span className="font-display font-semibold text-sm text-white group-hover:text-cyan transition-colors">
                                  {proj.title}
                                </span>
                              </div>
                              <span className="font-mono text-xs text-steel-light flex items-center gap-1 group-hover:text-cyan transition-colors">
                                <span>Inspect Specs</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right Column: Visual Photographic Showcase */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-2.5 rounded-2xl glass-card-interactive overflow-hidden shadow-2xl">
                      <div className="h-72 sm:h-80 rounded-xl overflow-hidden relative bg-[#030814] flex items-center justify-center p-2">
                        <img
                          src={domain.image}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                        />
                        <img
                          src={domain.image}
                          alt={`${domain.title} at Circuitron RVSCET`}
                          className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-lg drop-shadow-lg hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute bottom-3 left-3 right-3 z-20 p-2.5 rounded-lg bg-[#050816]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono shadow-md">
                          <span className="text-white font-medium">LAB BENCH EVIDENCE</span>
                          <span className="text-cyan font-bold">{domain.code} // RVSCET</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl glass-card border-white/10 text-xs space-y-2.5">
                      <span className="font-mono text-white uppercase tracking-wider block font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-cyan" />
                        STUDENT PATHWAY:
                      </span>
                      <p className="text-steel-light leading-relaxed font-light">
                        Students joining this domain receive dedicated laboratory access, breadboard toolkits, component kits, and direct mentorship from core team leads.
                      </p>
                      <Link
                        to="/join"
                        className="inline-flex items-center gap-1.5 text-cyan font-mono hover:underline pt-1 text-xs font-semibold"
                      >
                        <span>Apply to join {domain.shortName} track</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-10 sm:p-14 rounded-3xl glass-card border-white/10 space-y-5 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-80 h-40 bg-cyan/10 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              Ready to Build in One of These Domains?
            </h2>
            <p className="text-steel-light text-sm sm:text-base max-w-lg mx-auto font-light">
              Join Circuitron to access test instruments, microcontroller kits, and collaborative project teams at RVSCET.
            </p>
            <div className="pt-2">
              <Link to="/join" className="btn-glow-cyan">
                <span>Join the Circuitron Lab</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

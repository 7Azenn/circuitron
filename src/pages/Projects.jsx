import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  ExternalLink,
  ArrowUpRight,
  Cpu,
  Layers,
  Wrench,
  CheckCircle2,
  Calendar,
  X,
  FileText,
  Code,
  Sparkles,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";
import { technicalDomains } from "../data/domains";
import EngineeringProgressBar from "../components/EngineeringProgressBar";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const easeCurve = [0.16, 1, 0.3, 1];
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const domainFilterOptions = ["All", ...technicalDomains.map((d) => d.title)];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesDomain =
        selectedDomain === "All" ||
        project.domain.toLowerCase().includes(selectedDomain.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
        project.contributors.some((c) => c.toLowerCase().includes(query));

      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <div className="bg-transparent text-offwhite min-h-screen relative z-10">
      <PageHeader
        code="// 03-PROJECTS"
        tagline="DOCUMENTED HARDWARE ARTIFACTS"
        title="Hardware &amp; IoT Project Showcase."
        description="Explore functional embedded devices, autonomous rovers, and sensor telemetry systems engineered by Circuitron at RVSCET Jamshedpur."
        breadcrumbs={[{ name: "Projects" }]}
      />

      {/* Controls Bar: Filters & Search */}
      <section className="border-b border-white/[0.08] bg-[#050816]/70 backdrop-blur-xl py-6 sticky top-16 sm:top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Domain Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider shrink-0 mr-1 hidden sm:inline-flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
                FILTER DOMAIN:
              </span>
              {domainFilterOptions.map((domainName) => (
                <button
                  key={domainName}
                  type="button"
                  onClick={() => setSelectedDomain(domainName)}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-full border transition-all whitespace-nowrap shadow-sm ${
                    selectedDomain === domainName
                      ? "bg-gradient-to-r from-cyan to-circuitron text-white border-cyan font-bold shadow-[0_0_15px_rgba(18,181,226,0.4)]"
                      : "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-steel-light hover:text-white"
                  }`}
                >
                  {domainName}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80 shrink-0">
              <Search className="w-4 h-4 text-cyan absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search tech, components, title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-white/[0.04] border border-white/10 focus:border-cyan/60 pl-10 pr-9 py-2 text-xs font-mono text-white placeholder:text-steel-light/60 focus:outline-none backdrop-blur-md transition-all shadow-inner focus:shadow-[0_0_15px_rgba(18,181,226,0.2)]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-light hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Results Summary */}
          <div className="pt-4 flex items-center justify-between text-xs font-mono text-steel-light border-t border-white/[0.06] mt-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
              <span>SHOWING {filteredProjects.length} OF {projects.length} PROJECTS</span>
            </span>
            {searchQuery && (
              <span className="text-cyan font-semibold">
                KEYWORD: "{searchQuery}"
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center rounded-2xl glass-card border-white/10 space-y-4">
              <p className="font-mono text-sm text-steel-light">
                NO PROJECTS MATCHED YOUR FILTER CRITERIA.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedDomain("All");
                  setSearchQuery("");
                }}
                className="btn-glass text-xs"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  id={project.id}
                  layout
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : (idx % 4) * 0.08, ease: easeCurve }}
                  whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                  className="group rounded-2xl glass-card-interactive flex flex-col justify-between overflow-hidden shadow-xl"
                >
                  {/* Image Frame (Full Image Cleanly Visible) */}
                  <div className="relative h-60 sm:h-72 bg-[#040916] overflow-hidden border-b border-white/[0.08] flex items-center justify-center p-3">
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

                    <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#050816]/90 backdrop-blur-md border border-cyan/40 text-cyan font-bold shadow-[0_0_10px_rgba(18,181,226,0.3)]">
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-20">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#050816]/90 backdrop-blur-md border border-white/10 text-white">
                        {project.year}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-xs font-mono bg-[#050816]/90 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                      <span className="text-cyan font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        {project.domain}
                      </span>
                      <span className="text-steel-light text-[10px]">RVSCET LAB BUILD</span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-cyan transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-light">
                        {project.description}
                      </p>

                      {/* Engineering Highlights */}
                      {project.highlights && (
                        <div className="space-y-1.5 pt-2">
                          <span className="font-mono text-[11px] text-white uppercase tracking-wider block font-semibold">
                            KEY HIGHLIGHTS:
                          </span>
                          {project.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-steel-light">
                              <span className="text-cyan font-bold font-mono">›</span>
                              <span className="text-white/80">{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Components / Stack */}
                      <div className="pt-2">
                        <span className="font-mono text-[11px] text-steel-light uppercase tracking-wider block mb-2 font-medium">
                          COMPONENTS &amp; HARDWARE STACK:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan/10 border border-cyan/25 text-cyan font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Contributors & Actions */}
                    <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="font-mono text-[11px] text-steel-light">
                        <span className="text-white/40">BY: </span>
                        <span className="text-white/80">{project.contributors.join(" • ")}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className="font-display font-semibold text-xs text-cyan hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>Full Specifications</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Project Specs Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/85 backdrop-blur-xl p-4 sm:p-6"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: shouldReduceMotion ? 1 : 0.96, opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: shouldReduceMotion ? 1 : 0.96, opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              transition={{ duration: 0.24, ease: easeCurve }}
              className="relative max-w-3xl w-full rounded-2xl glass-card border-white/10 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#050816]/90 text-xs font-mono">
                <span className="text-cyan font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
                  PROJECT SPECIFICATION SHEET
                </span>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1 rounded-lg text-steel-light hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan/15 text-cyan border border-cyan/40 font-bold inline-block">
                    {activeModalProject.domain}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {activeModalProject.title}
                  </h3>
                  <p className="font-mono text-xs text-steel-light">
                    Status: <span className="text-cyan font-semibold">{activeModalProject.status}</span> • Academic Year: {activeModalProject.year}
                  </p>
                </div>

                <div className="h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10 relative bg-[#030814] flex items-center justify-center p-3">
                  <img
                    src={activeModalProject.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                  />
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-lg drop-shadow-xl"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    Description &amp; Operation
                  </h4>
                  <p className="text-sm text-steel-light leading-relaxed font-light">
                    {activeModalProject.description}
                  </p>
                </div>

                {activeModalProject.highlights && (
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                      Technical Highlights
                    </h4>
                    <ul className="space-y-1.5 text-xs text-steel-light font-mono">
                      {activeModalProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan font-bold">›</span>
                          <span className="text-white/90">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    Hardware &amp; Firmware Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-cyan/10 border border-cyan/30 text-cyan font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification & Bench Metrics */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[11px] text-cyan uppercase tracking-wider block font-semibold">
                    BENCHMARK &amp; REPRODUCIBILITY METRICS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <EngineeringProgressBar
                      code="VERIF-01"
                      label="Laboratory Test Bench Pass"
                      value={100}
                      color="cyan"
                      delay={0.15}
                    />
                    <EngineeringProgressBar
                      code="VERIF-02"
                      label="Documentation Completeness"
                      value={96}
                      color="cyan"
                      delay={0.25}
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-steel-light">
                  <span>CONTRIBUTORS: </span>
                  <span className="text-white font-medium">{activeModalProject.contributors.join(", ")}</span>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-white/[0.08] bg-[#050816]/90 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="btn-glass py-2 px-5 text-xs"
                >
                  Close Specification
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

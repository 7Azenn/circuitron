import React from "react";
import { ArrowUpRight, Mail, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { facultyAdvisors, executiveTeam, coreTeam } from "../data/team";

export default function Team() {
  return (
    <div className="bg-transparent text-offwhite min-h-screen relative z-10">
      <PageHeader
        code="// 06-TEAM"
        tagline="GOVERNANCE &amp; CORE COMMITTEE"
        title="Faculty Mentors &amp; Student Committee."
        description="The leadership collective driving laboratory operations, hardware workshops, technical standards, and institutional outreach at RVSCET Jamshedpur."
        breadcrumbs={[{ name: "Team" }]}
      />

      {/* Tier 1: Faculty Advisory */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                TIER 01 // ACADEMIC GOVERNANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Faculty Principal Investigators &amp; Coordinators
              </h2>
            </div>
            <span className="text-xs font-mono text-steel-light">
              R.V.S. COLLEGE OF ENGINEERING &amp; TECHNOLOGY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyAdvisors.map((fac) => (
              <div
                key={fac.id}
                className="p-6 sm:p-8 rounded-2xl glass-card-interactive flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden bg-[#050816] border border-white/10 shadow-lg">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan/15 border border-cyan/40 text-cyan font-semibold">
                      {fac.tier}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/10 text-steel-light flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
                      VERIFIED
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    {fac.name}
                  </h3>

                  <p className="font-mono text-xs text-cyan font-medium">
                    {fac.role}
                  </p>

                  <p className="font-mono text-[11px] text-steel-light">
                    {fac.department}
                  </p>

                  <p className="text-xs sm:text-sm text-steel-light leading-relaxed pt-2 font-light">
                    {fac.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tier 2: Executive Leadership */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                TIER 02 // STUDENT LEADERSHIP
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Executive Leadership Team
              </h2>
            </div>
            <span className="text-xs font-mono text-steel-light">
              OPERATIONAL COMMITTEE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveTeam.map((member) => (
              <div
                key={member.id}
                className="group rounded-2xl glass-card-interactive p-5 sm:p-6 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl bg-[#050816] overflow-hidden border border-white/10 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div>
                    <span className="font-mono text-[11px] text-cyan uppercase tracking-wider block font-semibold">
                      {member.role}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-steel-light">
                      {member.department}
                    </p>
                  </div>

                  <p className="text-xs text-steel-light leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <span className="text-white/40">EXECUTIVE</span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-light hover:text-cyan flex items-center gap-1 transition-colors font-medium"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tier 3: Core Operations */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                TIER 03 // LAB OPERATIONS &amp; DIVISIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Core Operations &amp; Technical Leads
              </h2>
            </div>
            <span className="text-xs font-mono text-steel-light">
              HARDWARE • MEDIA • INVENTORY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {coreTeam.map((member) => (
              <div
                key={member.id}
                className="group rounded-2xl glass-card-interactive p-5 sm:p-6 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl bg-[#050816] overflow-hidden border border-white/10 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div>
                    <span className="font-mono text-[11px] text-cyan uppercase tracking-wider block font-semibold">
                      {member.role}
                    </span>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-cyan transition-colors">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-steel-light">
                      {member.department}
                    </p>
                  </div>

                  <p className="text-xs text-steel-light leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <span className="text-white/40">CORE LEAD</span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-light hover:text-cyan flex items-center gap-1 transition-colors font-medium"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

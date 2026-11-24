import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Clock,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Sparkles,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import {
  completedActivities,
  upcomingActivities,
  activityCategories,
} from "../data/activities";

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCompleted =
    selectedCategory === "All"
      ? completedActivities
      : completedActivities.filter((act) => act.type === selectedCategory);

  return (
    <div className="bg-transparent text-offwhite min-h-screen relative z-10">
      <PageHeader
        code="// 04-ACTIVITIES"
        tagline="KNOWLEDGE TRANSFER &amp; COMPETITIONS"
        title="Learning Sessions, Workshops &amp; Activities."
        description="From microcontroller bring-up workshops to state-level robotics arena trials, explore Circuitron's active learning culture at RVSCET Jamshedpur."
        breadcrumbs={[{ name: "Activities" }]}
      />

      {/* Standing & Upcoming Sessions Section */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] mb-8 gap-4">
            <div>
              <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                CURRENT CALENDAR
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Standing Clinics &amp; Upcoming Sessions
              </h2>
            </div>
            <span className="px-3.5 py-1 text-xs font-mono rounded-full bg-cyan/15 border border-cyan/40 text-cyan self-start sm:self-auto font-semibold shadow-[0_0_12px_rgba(18,181,226,0.2)]">
              ACTIVE ACADEMIC TERM
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingActivities.map((up) => (
              <div
                key={up.id}
                className="p-6 sm:p-7 rounded-2xl glass-card-interactive space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan/15 border border-cyan/30 text-cyan font-semibold">
                      {up.badge}
                    </span>
                    <span className="text-xs font-mono text-steel-light flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
                      {up.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {up.title}
                  </h3>

                  <div className="space-y-2 text-xs font-mono text-steel-light">
                    <div className="flex items-center gap-2 text-white">
                      <Clock className="w-4 h-4 text-cyan shrink-0" />
                      <span>{up.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan shrink-0" />
                      <span>{up.venue}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-steel-light leading-relaxed pt-1 font-light">
                    {up.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-steel-light">
                  <span className="text-white/60">{up.eligibility}</span>
                  <Link to="/join" className="text-cyan hover:underline flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform">
                    <span>Attend Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 sm:p-5 rounded-2xl glass-card border-white/10 text-xs font-mono text-steel-light flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan shrink-0" />
              <span>NOTICE: Specific date confirmations for guest technical symposiums are published strictly following departmental approval.</span>
            </span>
            <Link to="/join" className="text-cyan hover:underline shrink-0 font-semibold flex items-center gap-1">
              <span>Contact Organizing Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Completed Activities Archive */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08] mb-8">
            <div>
              <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                VERIFIED ARCHIVE
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                Completed Technical Activities
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {activityCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-full border transition-all whitespace-nowrap shadow-sm ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-cyan to-circuitron text-white border-cyan font-bold shadow-[0_0_15px_rgba(18,181,226,0.4)]"
                      : "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-steel-light hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Activities List */}
          <div className="space-y-6">
            {filteredCompleted.map((act) => (
              <div
                key={act.id}
                className="p-6 sm:p-7 rounded-2xl glass-card-interactive flex flex-col lg:flex-row gap-6 items-start"
              >
                {/* Photo Thumbnail (Full Image Visible) */}
                <div className="w-full lg:w-72 h-52 lg:h-48 shrink-0 rounded-xl overflow-hidden bg-[#030713] border border-white/10 relative flex items-center justify-center p-2">
                  <img
                    src={act.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                  />
                  <img
                    src={act.image}
                    alt={act.title}
                    className="relative z-10 max-h-full max-w-full object-contain mx-auto rounded-lg drop-shadow hover:scale-102 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan/10 border border-cyan/30 text-cyan font-semibold">
                      {act.badge}
                    </span>
                    <span className="text-xs font-mono text-steel-light">
                      {act.date} • {act.venue}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-light">
                    {act.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-steel-light">
                    <div className="flex items-center gap-1.5 text-white/90">
                      <Users className="w-3.5 h-3.5 text-cyan" />
                      <span>{act.participants}</span>
                    </div>
                    {act.outcomes && (
                      <div className="flex items-center gap-1.5 text-cyan">
                        <Award className="w-3.5 h-3.5" />
                        <span>{act.outcomes}</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="p-10 sm:p-14 rounded-3xl glass-card border-white/10 space-y-5 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-80 h-40 bg-cyan/10 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              Want to Participate in the Next Session?
            </h2>
            <p className="text-steel-light text-sm sm:text-base max-w-lg mx-auto font-light">
              Sessions are free and open to all RVSCET students interested in hardware engineering, robotics, and IoT.
            </p>
            <div className="pt-2">
              <Link to="/join" className="btn-glow-cyan">
                <span>Join Upcoming Clinics</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import React, { useState } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageSquare,
  MapPin,
  Send,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import { clubInfo } from "../data/clubInfo";

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    branch: "",
    year: "",
    domainInterest: "Embedded Systems",
    message: "",
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Circuitron Membership] Inquiry from ${formData.name} (${formData.branch})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Branch / Dept: ${formData.branch}\n` +
      `Academic Year: ${formData.year}\n` +
      `Domain of Interest: ${formData.domainInterest}\n\n` +
      `Message / Interests:\n${formData.message}\n`
    );
    window.location.href = `mailto:${clubInfo.contact.email}?subject=${subject}&body=${body}`;
  };

  const faqs = [
    {
      q: "Do I need prior experience in electronics, robotics, or coding?",
      a: "No. Circuitron operates on a peer-mentorship model. First-year and beginner students are welcomed and trained from foundational breadboard circuits, soldering safety, and basic microcontroller programming.",
    },
    {
      q: "Which engineering departments can join Circuitron?",
      a: "Circuitron is open to all engineering departments at RVSCET, including ECE, EEE, CSE, Mechanical Engineering, and allied branches. Real hardware engineering requires cross-disciplinary collaboration.",
    },
    {
      q: "When and where does the club meet?",
      a: "Standing open laboratory clinics occur every Saturday from 2:00 PM to 5:00 PM in the Circuitron Hardware Prototyping Lab, Department of Electronics & Communication Engineering, RVSCET campus.",
    },
    {
      q: "Will I get access to laboratory equipment and components?",
      a: "Yes. Active members get hands-on access to digital storage oscilloscopes, regulated bench power supplies, microcontrollers (STM32, ESP32, AVR), soldering benches, and sensor modules.",
    },
  ];

  return (
    <div className="bg-transparent text-offwhite min-h-screen relative z-10">
      <PageHeader
        code="// 07-JOIN"
        tagline="MEMBERSHIP &amp; COMMUNITY INTAKE"
        title="Your Next Idea Starts Here."
        description="Join the official Electronics and IoT collective of RVSCET. Work alongside passionate peer engineers, access dedicated lab benches, and build physical technology."
        breadcrumbs={[{ name: "Join" }]}
      />

      {/* 3 Step Pathway */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
              HOW TO GET INVOLVED
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              The Three-Step Intake Pathway
            </h2>
            <p className="text-steel-light text-sm sm:text-base font-light">
              A transparent, straightforward onboarding journey for RVSCET students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl glass-card-interactive space-y-4 relative shadow-xl">
              <span className="font-mono text-4xl font-extrabold text-cyan">01</span>
              <h3 className="font-display font-bold text-xl text-white">
                Submit Your Profile
              </h3>
              <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-light">
                Fill out the official student registration form with your department, academic year, and technical areas of curiosity.
              </p>
              <div className="pt-2">
                <a
                  href={clubInfo.membership.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-cyan hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open Intake Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-7 rounded-2xl glass-card-interactive space-y-4 relative shadow-xl">
              <span className="font-mono text-4xl font-extrabold text-cyan">02</span>
              <h3 className="font-display font-bold text-xl text-white">
                Attend Saturday Lab Clinic
              </h3>
              <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-light">
                Visit the Circuitron Lab in the ECE Department during weekend open hours. Meet current team leads, inspect ongoing prototypes, and learn safety standards.
              </p>
              <div className="pt-2 text-xs font-mono text-cyan font-medium">
                Every Saturday • 2:00 PM – 5:00 PM
              </div>
            </div>

            <div className="p-7 rounded-2xl glass-card-interactive space-y-4 relative shadow-xl">
              <span className="font-mono text-4xl font-extrabold text-cyan">03</span>
              <h3 className="font-display font-bold text-xl text-white">
                Join a Project Sprint
              </h3>
              <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-light">
                Pick an engineering domain track—Embedded Systems, IoT, PCB Design, Robotics, or R&amp;D—and collaborate on a real physical build with peer engineers.
              </p>
              <div className="pt-2 text-xs font-mono text-steel-light">
                Receive lab hardware kit &amp; mentor
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Intake Hub: Official Form & Direct Email Dispatch */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Links & Criteria (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                  PRIMARY APPLICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  Official Registration
                </h3>
                <p className="text-xs sm:text-sm text-steel-light leading-relaxed font-light">
                  The primary recruitment and membership record for Circuitron is managed through our verified intake registry.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl glass-card-interactive space-y-4 shadow-xl">
                <div className="flex items-center justify-between text-xs font-mono text-steel-light">
                  <span>STATUS</span>
                  <span className="text-cyan font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
                    ACCEPTING APPLICANTS
                  </span>
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  Official Club Intake Form
                </h4>
                <p className="text-xs text-steel-light leading-relaxed font-light">
                  Use your Google or institutional account to complete the standard student registration form.
                </p>
                <a
                  href={clubInfo.membership.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow-cyan w-full py-3 text-center justify-center font-display"
                >
                  <span>Open Official Registration Form</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Verified Contact Details */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-xs text-steel-light uppercase tracking-wider block font-medium">
                  DIRECT CONTACT DESKS:
                </span>
                
                <a
                  href={clubInfo.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl glass-card-interactive flex items-center justify-between transition-colors text-xs font-mono text-steel-light hover:text-cyan"
                >
                  <span className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-cyan" />
                    <span>WhatsApp Helpdesk ({clubInfo.contact.phones[0].display})</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${clubInfo.contact.email}`}
                  className="p-3.5 rounded-xl glass-card-interactive flex items-center justify-between transition-colors text-xs font-mono text-steel-light hover:text-cyan"
                >
                  <span className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan" />
                    <span>{clubInfo.contact.email}</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="p-3.5 rounded-xl glass-card flex items-start gap-2.5 text-xs font-mono text-steel-light">
                  <MapPin className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                  <span>
                    Dept. of ECE &amp; EEE, RVSCET Campus, Edalbera, Jamshedpur - 831001
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Direct Inquiry Message Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl glass-card space-y-6 shadow-xl border-white/10">
                <div>
                  <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
                    CONTACT THE LAB LEADS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">
                    Send an Inquiry or Project Idea
                  </h3>
                  <p className="text-xs text-steel-light mt-1 font-light">
                    Have a specific question about hardware tracks, lab hours, or a project concept? Send a message directly to the executive committee.
                  </p>
                </div>

                <form onSubmit={handleSubmitInquiry} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-steel-light block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan/60 p-3 text-xs font-mono text-white placeholder:text-steel-light/60 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-steel-light block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan/60 p-3 text-xs font-mono text-white placeholder:text-steel-light/60 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-steel-light block">
                        Department / Branch *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. ECE / EEE / CSE / ME"
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan/60 p-3 text-xs font-mono text-white placeholder:text-steel-light/60 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-steel-light block">
                        Academic Year *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 1st Year / 2nd Year"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan/60 p-3 text-xs font-mono text-white placeholder:text-steel-light/60 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-steel-light block">
                      Primary Domain of Interest
                    </label>
                    <select
                      value={formData.domainInterest}
                      onChange={(e) => setFormData({ ...formData, domainInterest: e.target.value })}
                      className="w-full rounded-xl bg-[#09152a] border border-white/10 focus:border-cyan/60 p-3 text-xs font-mono text-white focus:outline-none"
                    >
                      <option value="Embedded Systems">Embedded Systems (ARM, STM32, Firmware)</option>
                      <option value="Internet of Things">Internet of Things (Sensors, MQTT, Telemetry)</option>
                      <option value="Electronics & Circuit Design">Electronics &amp; Circuit Design (KiCad, PCB Layout)</option>
                      <option value="Robotics & Automation">Robotics &amp; Automation (Rovers, Combat Bots, Actuators)</option>
                      <option value="Research & Innovation">Research &amp; Innovation (Applied Green Tech, Safety)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-steel-light block">
                      Message / Project Idea / Question *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us what you want to learn, an idea you want to build, or any questions about the club..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan/60 p-3 text-xs font-mono text-white placeholder:text-steel-light/60 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-glow-cyan w-full py-3.5 justify-center text-xs font-mono uppercase tracking-wider"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      <span>Dispatch Direct Email Inquiry</span>
                    </button>
                    <p className="text-[11px] font-mono text-steel-light mt-2 text-center">
                      Opens your configured email client addressed directly to circuitronrvscet@gmail.com with your formatted profile.
                    </p>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="font-mono text-xs text-cyan uppercase tracking-wider block font-semibold">
              COMMON INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl glass-card border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>
                    <span className="p-1 text-cyan">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-steel-light leading-relaxed border-t border-white/[0.06] pt-3 font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

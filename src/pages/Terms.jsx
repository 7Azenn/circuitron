import React from "react";
import PageHeader from "../components/PageHeader";
import { clubInfo } from "../data/clubInfo";

export default function Terms() {
  return (
    <div className="bg-transparent text-offwhite min-h-screen relative z-10">
      <PageHeader
        code="// LEGAL-02"
        tagline="TERMS OF USE &amp; LAB PROTOCOL"
        title="Terms and Conditions."
        description="Operational terms, lab conduct standards, and digital platform usage guidelines for Circuitron at RVSCET Jamshedpur."
        breadcrumbs={[{ name: "Terms" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-steel-light leading-relaxed">
          
          <div className="p-4 rounded-xl glass-card font-mono text-xs text-steel-light">
            EFFECTIVE DATE: NOVEMBER 2026 • RVSCET INSTITUTIONAL PLATFORM
          </div>

          <div className="p-7 rounded-2xl glass-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              1. Acceptance of Terms
            </h2>
            <p className="font-light">
              By accessing the Circuitron website (<a href="https://www.circuitron.in" className="text-cyan hover:underline">www.circuitron.in</a>), participating in club workshops, utilizing campus laboratory facilities, or representing Circuitron in competitive tournaments, you agree to comply with these terms and the disciplinary codes of R.V.S. College of Engineering and Technology.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              2. Laboratory Safety &amp; Equipment Protocol
            </h2>
            <p className="font-light">
              Hardware engineering involves physical risks including high-discharge LiPo batteries, soldering heat, rotating motor armatures, and mains voltages. All members must adhere to strict lab safety rules:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-steel-light pl-2 font-mono">
              <li>Always wear eye protection when operating rotary cutting tools or desoldering components.</li>
              <li>Never charge or discharge LiPo batteries unattended or outside approved fire-safe enclosures.</li>
              <li>Ensure test bench power supplies have current limits enabled before connecting new circuit prototypes.</li>
              <li>Respect shared laboratory equipment (oscilloscopes, power supplies, multimeters) and return components to designated inventory bins.</li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl glass-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              3. Intellectual Property &amp; Open Source
            </h2>
            <p className="font-light">
              Circuitron promotes an open, collaborative engineering culture. Schematic files, PCB Gerber outputs, and firmware repositories published by the club are intended for educational and non-commercial research use under standard open-source licenses, unless otherwise stated by project sponsors or institutional grants.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              4. Code of Conduct &amp; Equity
            </h2>
            <p className="font-light">
              Circuitron is dedicated to providing an inclusive, harassment-free environment for all students regardless of gender, branch, academic background, or skill level. Collaborative teamwork, constructive peer code review, and patient hardware debugging are foundational club expectations.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              5. Institutional Affiliation
            </h2>
            <p className="font-light">
              Circuitron is an officially recognized student engineering society operating under the administrative authority of the Department of Electronics &amp; Communication Engineering and the management of R.V.S. College of Engineering and Technology, Jamshedpur.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

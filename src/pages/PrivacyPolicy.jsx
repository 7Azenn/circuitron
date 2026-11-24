import React from "react";
import PageHeader from "../components/PageHeader";
import { clubInfo } from "../data/clubInfo";

export default function PrivacyPolicy() {
  return (
    <div className="bg-transparent text-offwhite min-h-screen relative z-10">
      <PageHeader
        code="// LEGAL-01"
        tagline="INSTITUTIONAL GOVERNANCE"
        title="Privacy Policy."
        description="Official privacy notice governing student member details, event attendee registrations, and digital records for Circuitron — Electronics &amp; IoT Club, RVSCET Jamshedpur."
        breadcrumbs={[{ name: "Privacy Policy" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-steel-light leading-relaxed">
          
          <div className="p-4 rounded-xl glass-card font-mono text-xs text-steel-light">
            LAST REVISED: NOVEMBER 2026 • APPLICABLE TO CIRCUITRON.IN &amp; CLUB REGISTRIES
          </div>

          <div className="p-7 rounded-2xl glass-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              1. Overview &amp; Data Controller
            </h2>
            <p className="font-light">
              Circuitron is the recognized Electronics &amp; IoT technical society at R.V.S. College of Engineering and Technology (RVSCET), Jamshedpur. This digital platform (<a href="https://www.circuitron.in" className="text-cyan hover:underline">www.circuitron.in</a>) serves as the permanent institutional record of our activities, technical publications, project archives, and student membership.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              2. Information We Collect
            </h2>
            <p className="font-light">
              We only collect information directly provided by students, faculty, or competition participants through verified application and intake forms:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-steel-light pl-2 font-mono">
              <li>Full Name, Institutional Email Address, and Contact Number</li>
              <li>Academic Branch, Department (ECE, EEE, CSE, ME, etc.), and Year of Study</li>
              <li>Laboratory track preferences and project domain choices</li>
              <li>Photographic and video documentation of official campus workshops and competitions</li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl glass-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              3. Purpose of Data Use
            </h2>
            <p className="font-light">
              Student information is used exclusively for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-steel-light pl-2 font-mono">
              <li>Managing laboratory access and workbench scheduling in the Department of ECE/EEE</li>
              <li>Verifying team member roles and certifying official workshop attendance</li>
              <li>Publishing documented student hardware contributions and achievements</li>
              <li>Communicating upcoming academic clinics and competition announcements</li>
            </ul>
            <p className="font-light pt-2">
              Circuitron does not monetize, sell, lease, or share personal student information with commercial advertising networks or third-party vendors.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              4. Media &amp; Photographic Archival
            </h2>
            <p className="font-light">
              Photographs, videos, and technical diagrams captured during Circuitron workshops, guest seminars, and exhibitions held on the RVSCET campus are archived to maintain an authentic institutional record of engineering achievements. If you are an RVSCET student or alumni appearing in our photographic archive and request modification or attribution update, you may contact our media leads at <a href={`mailto:${clubInfo.contact.email}`} className="text-cyan hover:underline">{clubInfo.contact.email}</a>.
            </p>
          </div>

          <div className="p-7 rounded-2xl glass-card space-y-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              5. Contact &amp; Governance
            </h2>
            <p className="font-light">
              For any questions regarding this policy or club data records:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs text-steel-light space-y-1">
              <p><strong className="text-white">Circuitron — Electronics &amp; IoT Club</strong></p>
              <p>R.V.S. College of Engineering &amp; Technology</p>
              <p>Edalbera, PO Bhilai Pahari, Jamshedpur, Jharkhand - 831001</p>
              <p>Email: <a href={`mailto:${clubInfo.contact.email}`} className="text-cyan">{clubInfo.contact.email}</a></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, MessageSquare, ExternalLink, ArrowUpRight } from "lucide-react";
import { clubInfo } from "../data/clubInfo";
import { technicalDomains } from "../data/domains";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Technical Domains", path: "/domains" },
    { name: "Hardware Projects", path: "/projects" },
    { name: "Activities & Workshops", path: "/activities" },
    { name: "Photographic Archive", path: "/gallery" },
    { name: "Core Committee", path: "/team" },
    { name: "Join Community", path: "/join" },
  ];

  return (
    <footer className="bg-[#030612]/95 backdrop-blur-2xl border-t border-white/[0.08] relative pt-16 pb-12 overflow-hidden text-steel-light">
      {/* Subtle top indicator line with cyan drop-glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] max-w-full h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent shadow-[0_0_20px_rgba(18,181,226,0.6)] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(18,181,226,0.2)] bg-gradient-to-br from-[#0B1527] to-[#050816]">
                <img
                  src="/logo.png"
                  alt="Circuitron Logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 p-2 flex items-center justify-center">
                <img
                  src="/assets/rvscet-logo.webp"
                  alt="RVSCET Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                  CIRCUITRON
                </h3>
                <p className="font-mono text-xs text-cyan tracking-wide">
                  IOT &amp; EMBEDDED SYSTEM CLUB
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/25 text-[11px] font-mono text-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
              <span>CONNECTING TOMORROW</span>
            </div>

            <p className="text-sm text-steel-light leading-relaxed max-w-sm">
              The official hardware engineering society and digital platform of R.V.S. College of Engineering and Technology, Jamshedpur. Promoting hands-on experimentation, embedded systems research, and physical computing.
            </p>

            {/* Social Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block mb-2.5">
                VERIFIED COMMUNITY CHANNELS
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {clubInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-cyan/10 border border-white/10 hover:border-cyan/50 text-xs font-mono text-white hover:text-cyan transition-all flex items-center gap-1.5 shadow-sm"
                    aria-label={`Circuitron on ${social.name}`}
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-steel-light" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white border-b border-white/[0.08] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
              <span>INDEX</span>
            </h4>
            <ul className="space-y-2 text-xs font-display">
              {navLinks.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-steel-light hover:text-cyan hover:translate-x-0.5 transition-all block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Domains (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white border-b border-white/[0.08] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
              <span>DOMAINS</span>
            </h4>
            <ul className="space-y-2 text-xs font-display">
              {technicalDomains.map((dom) => (
                <li key={dom.id}>
                  <Link
                    to={`/domains#${dom.id}`}
                    className="text-steel-light hover:text-cyan hover:translate-x-0.5 transition-all block py-1 truncate"
                  >
                    {dom.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institution & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white border-b border-white/[0.08] pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
              <span>CAMPUS &amp; CONTACT</span>
            </h4>
            
            <div className="p-4 rounded-xl glass-card space-y-3 text-xs">
              <a
                href={clubInfo.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 text-steel-light hover:text-white transition-colors"
                title="View on Google Maps"
              >
                <MapPin className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="text-white block group-hover:text-cyan">
                    {clubInfo.address.campus}
                  </strong>
                  {clubInfo.address.street}, {clubInfo.address.city}, {clubInfo.address.state} — {clubInfo.address.pincode}
                </span>
              </a>

              <div className="flex items-center gap-2 text-steel-light pt-1">
                <Mail className="w-4 h-4 text-cyan shrink-0" />
                <a
                  href={`mailto:${clubInfo.contact.email}`}
                  className="font-mono text-xs hover:text-cyan transition-colors"
                >
                  {clubInfo.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-steel-light">
                <Phone className="w-4 h-4 text-cyan shrink-0" />
                <div className="font-mono text-xs flex items-center gap-1.5 flex-wrap">
                  <a href={`tel:${clubInfo.contact.phones[0].raw}`} className="hover:text-cyan">
                    {clubInfo.contact.phones[0].display}
                  </a>
                  <span className="text-white/20">/</span>
                  <a href={`tel:${clubInfo.contact.phones[1].raw}`} className="hover:text-cyan">
                    {clubInfo.contact.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-steel-light pt-1 border-t border-white/[0.06]">
                <MessageSquare className="w-4 h-4 text-cyan shrink-0" />
                <a
                  href={clubInfo.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-cyan hover:underline flex items-center gap-1"
                >
                  <span>WhatsApp Community Desk</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-steel-light gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <p>
              &copy; {currentYear} Circuitron — Electronics &amp; IoT Club, RVSCET Jamshedpur.
            </p>
            <div className="flex items-center gap-3">
              <Link to="/privacy-policy" className="hover:text-cyan transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link to="/terms" className="hover:text-cyan transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>

          <div className="font-mono text-[11px] text-steel-light flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-cyan inline-block animate-pulse"></span>
            <span className="text-white/80">RVSCET DIGITAL PLATFORM • EST. {clubInfo.foundedYear}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

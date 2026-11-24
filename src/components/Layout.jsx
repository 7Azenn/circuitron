import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CircuitBackground from "./CircuitBackground";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050816] text-offwhite antialiased relative">
      <ScrollToTop />
      
      {/* Animated Circuitron Background System (Cosmic Navy #050816, Cyan Grid, Glows & Interactive Nodes) */}
      <CircuitBackground />

      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-lime text-graphite font-mono text-xs font-bold"
      >
        Skip to main content
      </a>

      <Navbar />
      
      <main id="main-content" className="flex-1 relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

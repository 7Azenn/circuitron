import React, { useEffect, useRef } from "react";

/**
 * CircuitBackground — Authentic Circuitron.in Background System
 * 
 * Recreates the exact background atmosphere of https://www.circuitron.in/:
 * 1. Deep Cosmic Dark Navy Base (#050816)
 * 2. 40px x 40px Cyan Technical Grid (.circuit-bg)
 * 3. Multi-point Cyan & Violet Ambient Radial Glows (.circuit-bg-glow)
 * 4. Interactive Constellation Particle Mesh (floating electric cyan, azure & royal blue nodes)
 * 5. Dynamic Circuit Connections with gentle proximity linking and cursor reactivity
 * 6. Slow, quiet, calm speed that doesn't distract or degrade performance
 */
export default function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;
    let isScrolling = false;
    let scrollTimeout = null;

    // Motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = mediaQuery.matches;
    const handleMotionChange = (e) => {
      isReducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Mouse coordinates (client viewport)
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleScroll = () => {
      isScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 120);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Particle nodes configuration (exact color palette from circuitron.in particles-vendor)
    const NODE_COLORS = ["#00fffc", "#0091ff", "#12B5E2", "#4e75ff", "#8f00ff"];
    let particles = [];
    let circuitPaths = [];

    // Resize handler
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initScene();
    };

    const initScene = () => {
      particles = [];
      circuitPaths = [];

      // Density calculation: ~35 nodes on desktop, ~16 on mobile
      const count = Math.max(14, Math.min(48, Math.floor((width * height) / 28000)));

      for (let i = 0; i < count; i++) {
        const color = NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)];
        const speed = (0.2 + Math.random() * 0.35); // Slow, gentle speed
        const angle = Math.random() * Math.PI * 2;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.2 + Math.random() * 1.6, // 1.2px - 2.8px
          color,
          baseAlpha: 0.25 + Math.random() * 0.45,
          alpha: 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.02,
        });
      }

      // Generate a few subtle 40px grid-aligned circuit traces across screen
      const gridSize = 40;
      const traceCount = Math.max(3, Math.min(7, Math.floor(width / 320)));

      for (let t = 0; t < traceCount; t++) {
        let startX = Math.floor((Math.random() * width) / gridSize) * gridSize;
        let startY = Math.floor((Math.random() * height) / gridSize) * gridSize;

        const segments = [{ x: startX, y: startY }];
        let currX = startX;
        let currY = startY;

        const segLength = 3 + Math.floor(Math.random() * 3);
        let dir = Math.random() > 0.5 ? 0 : 1; // 0 = horizontal, 1 = vertical

        for (let s = 0; s < segLength; s++) {
          const step = (2 + Math.floor(Math.random() * 4)) * gridSize;
          if (dir === 0) {
            currX += (Math.random() > 0.5 ? 1 : -1) * step;
            currX = Math.max(gridSize, Math.min(width - gridSize, currX));
            segments.push({ x: currX, y: currY });
            dir = 1;
          } else {
            currY += (Math.random() > 0.5 ? 1 : -1) * step;
            currY = Math.max(gridSize, Math.min(height - gridSize, currY));
            segments.push({ x: currX, y: currY });
            dir = 0;
          }
        }

        // Calculate total path length
        let totalLen = 0;
        for (let i = 0; i < segments.length - 1; i++) {
          totalLen += Math.hypot(
            segments[i + 1].x - segments[i].x,
            segments[i + 1].y - segments[i].y
          );
        }

        circuitPaths.push({
          segments,
          totalLen,
          pulsePos: Math.random() * totalLen,
          pulseSpeed: 0.55 + Math.random() * 0.45, // Slow electric packet
          color: t % 2 === 0 ? "#00fffc" : "#0091ff",
        });
      }
    };

    window.addEventListener("resize", resize);
    resize();

    // Main Animation Loop
    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      }

      // 1. Render Subtle Circuit Traces with vias and traveling pulses
      ctx.lineWidth = 1;
      circuitPaths.forEach((path) => {
        // Draw static trace line
        ctx.strokeStyle = "rgba(0, 191, 255, 0.07)";
        ctx.beginPath();
        ctx.moveTo(path.segments[0].x, path.segments[0].y);
        for (let s = 1; s < path.segments.length; s++) {
          ctx.lineTo(path.segments[s].x, path.segments[s].y);
        }
        ctx.stroke();

        // Draw small vias at segment joints
        for (let s = 0; s < path.segments.length; s++) {
          ctx.fillStyle = "rgba(0, 191, 255, 0.14)";
          ctx.beginPath();
          ctx.arc(path.segments[s].x, path.segments[s].y, 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw traveling circuit pulse
        if (!isReducedMotion) {
          path.pulsePos += path.pulseSpeed * (isScrolling ? 0.4 : 1.0);
          if (path.pulsePos > path.totalLen) path.pulsePos = 0;

          // Find current coordinate on path
          let accum = 0;
          let pulseX = path.segments[0].x;
          let pulseY = path.segments[0].y;

          for (let i = 0; i < path.segments.length - 1; i++) {
            const segDist = Math.hypot(
              path.segments[i + 1].x - path.segments[i].x,
              path.segments[i + 1].y - path.segments[i].y
            );
            if (accum + segDist >= path.pulsePos) {
              const ratio = (path.pulsePos - accum) / (segDist || 1);
              pulseX = path.segments[i].x + (path.segments[i + 1].x - path.segments[i].x) * ratio;
              pulseY = path.segments[i].y + (path.segments[i + 1].y - path.segments[i].y) * ratio;
              break;
            }
            accum += segDist;
          }

          // Glow pulse point
          ctx.fillStyle = path.color;
          ctx.shadowColor = path.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 2. Interconnecting Links between Particles
      const maxDist = 125;
      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const dSq = dx * dx + dy * dy;

          if (dSq < maxDistSq) {
            const dist = Math.sqrt(dSq);
            const alpha = (1 - dist / maxDist) * 0.18; // 0.18 max opacity as in circuitron.in
            ctx.strokeStyle = `rgba(0, 145, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Link to mouse cursor on proximity
        if (mouse.active) {
          const mdx = mouse.x - p1.x;
          const mdy = mouse.y - p1.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          const mouseDist = 135;

          if (mDistSq < mouseDist * mouseDist) {
            const mDist = Math.sqrt(mDistSq);
            const mAlpha = (1 - mDist / mouseDist) * 0.35;
            ctx.strokeStyle = `rgba(0, 255, 252, ${mAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Gentle repulsion so nodes breathe around cursor
            const force = (1 - mDist / mouseDist) * 0.6;
            p1.x -= (mdx / mDist) * force;
            p1.y -= (mdy / mDist) * force;
          }
        }
      }

      // 3. Render Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!isReducedMotion) {
          // Slow movement
          p.x += p.vx;
          p.y += p.vy;

          // Wrap around screen boundaries with margin
          if (p.x < -15) p.x = width + 15;
          else if (p.x > width + 15) p.x = -15;
          if (p.y < -15) p.y = height + 15;
          else if (p.y > height + 15) p.y = -15;

          // Gentle breathing pulse
          p.pulse += p.pulseSpeed;
          p.alpha = p.baseAlpha + Math.sin(p.pulse) * 0.15;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.15, Math.min(0.75, p.alpha));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow halo for larger nodes
        if (p.radius > 2.0) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
      ctx.globalAlpha = 1.0;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMotionChange);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050816]"
      aria-hidden="true"
    >
      {/* Layer 1: 40px Circuit Grid Pattern (Exact match to circuitron.in .circuit-bg) */}
      <div
        className="fixed inset-0 circuit-bg opacity-30 pointer-events-none"
        style={{ zIndex: 0, willChange: "transform", transform: "translateZ(0px)" }}
      />

      {/* Layer 2: Multi-center Cyan & Purple Glows (Exact match to circuitron.in .circuit-bg-glow) */}
      <div
        className="fixed inset-0 circuit-bg-glow pointer-events-none"
        style={{ zIndex: 0, willChange: "transform", transform: "translateZ(0px)" }}
      />

      {/* Layer 3: Interactive Connected Particles & Circuit Lines Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full block pointer-events-none"
        style={{ zIndex: 1, willChange: "transform", transform: "translateZ(0px)" }}
      />
    </div>
  );
}

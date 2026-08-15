"use client";

import React, { useEffect, useRef } from "react";

const ASCII_CHARS = ["0", "1", "*", "#", "+", "$", ">", "_", "@", ];

export default function AsciiCursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let lastPos = { x: 0, y: 0 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      const dist = Math.hypot(e.clientX - lastPos.x, e.clientY - lastPos.y);

      // Spawn a particle every 12px of cursor movement
      if (dist > 12) {
        lastPos = { x: e.clientX, y: e.clientY };

        const randomChar =
          ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)];

        particles.push({
          x: e.clientX + (Math.random() * 8 - 4),
          y: e.clientY + (Math.random() * 8 - 4),
          char: randomChar,
          opacity: 1,
          scale: Math.random() * 0.4 + 0.8,
          vx: (Math.random() - 0.5) * 0.8,
          vy: Math.random() * -0.6 - 0.2, // Float upwards
          life: 0,
          maxLife: 75 + Math.random() * 15,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = 1 - p.life / p.maxLife;

        ctx.save();
        ctx.font = '12px "Courier New", Courier, monospace';
        ctx.fillStyle = `oklch(0.79 0.21 151.71 / ${p.opacity})`;
        ctx.shadowColor = "oklch(0.79 0.21 151.71 / 0.6)";
        ctx.shadowBlur = 4;
        ctx.translate(p.x, p.y);
        ctx.scale(p.scale, p.scale);
        ctx.fillText(p.char, 0, 0);
        ctx.restore();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
    />
  );
}

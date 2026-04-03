"use client"

import { useState } from "react";

// ─── Données centralisées (partie gauche) ────────────────────────────────────
const LEFT_CONTENT = {
  preTitle: "Strategically positioned to",
  highlight: "harness the opportunity",
  postTitle: "set across the energy transition",
  highlightLine2: "investment landscape",
  cta: {
    label: "View our approach",
    href: "#",
  },
};

// ─── Données centralisées (accordéon droite) ─────────────────────────────────
const ACCORDION_ITEMS = [
  {
    id: "power-demand",
    title: "Increasing demand for power",
    body: "Demand for power is expected to surge drastically over the coming years, driven by the greater amounts of datacenters and electrification infrastructure needed to support increasing adoption of AI, EVs, heat pumps, cloud migration, and cryptocurrencies.¹ Our investments in diverse, clean energy assets ensure a reliable supply of power, ready to meet the needs of businesses and communities for decades to come.",
    defaultOpen: true,
  },
  {
    id: "grid-resilience",
    title: "Greater need for grid resilience",
    body: "As growing energy demands put more of a strain on grid infrastructure, the need for resiliency to supply consistent power is critical.² Our assets and investments help ensure reliable power distribution and access to clean energy, addressing the need for a stronger, more secure, and more flexible energy network.",
    defaultOpen: false,
  },
  {
    id: "decarbonization",
    title: "Achieving decarbonization and energy independence",
    body: "We help drive the transition to a low-carbon, energy-secure future by investing in renewable generation, storage, and grid infrastructure. Our diversified portfolio positions us at the forefront of the global energy transition, enabling communities to achieve lasting energy independence.",
    defaultOpen: false,
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface AccordionItemProps {
  id: string;
  title: string;
  body: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({ id, title, body, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className="border-b border-white/10 py-6 cursor-pointer group"
      onClick={() => onToggle(id)}
    >
      <div className="flex items-start gap-4">
        {/* Circle indicator */}
        <div
          className="mt-1 shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300"
          style={{
            borderColor: isOpen ? "#c8a96e" : "rgba(255,255,255,0.4)",
            backgroundColor: isOpen ? "transparent" : "transparent",
          }}
        >
          {isOpen && (
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#c8a96e" }}
            />
          )}
        </div>

        {/* Title + Body */}
        <div className="flex-1">
          <h3
            className="text-lg font-semibold leading-snug transition-colors duration-300"
            style={{
              color: isOpen ? "#ffffff" : "rgba(255,255,255,0.6)",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            {title}
          </h3>

          {/* Animated body */}
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
          >
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontFamily: "'Lora', Georgia, serif",
              }}
            >
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function InterventionSection() {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(ACCORDION_ITEMS.filter((i) => i.defaultOpen).map((i) => i.id))
  );

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,500&family=Lora:wght@400;500&display=swap');

        .energy-section {
          position: relative;
          overflow: hidden;
          min-height: 520px;
          background: #1a1f1a;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(10,14,10,0.82) 0%,
            rgba(10,14,10,0.60) 50%,
            rgba(10,14,10,0.75) 100%
          );
          z-index: 1;
        }

        .bg-forest {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80');
          background-size: cover;
          background-position: center 40%;
          z-index: 0;
          filter: saturate(0.5) brightness(0.6);
        }

        .content-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2.5rem;
          align-items: start;
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
            padding: 3rem 1.5rem;
          }
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 2.5rem;
          padding: 0.75rem 1.5rem;
          border: 1.5px solid rgba(255,255,255,0.7);
          border-radius: 999px;
          background: transparent;
          color: #fff;
          font-size: 0.9rem;
          font-family: 'Lora', Georgia, serif;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s;
          text-decoration: none;
        }

        .cta-btn:hover {
          background: rgba(255,255,255,0.08);
          border-color: #c8a96e;
        }

        .cta-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.6);
          transition: border-color 0.25s;
        }

        .cta-btn:hover .cta-arrow {
          border-color: #c8a96e;
        }
      `}</style>

      <section className="energy-section">
        <div className="bg-forest" />
        <div className="bg-overlay" />

        <div className="content-grid">
          {/* ── LEFT ── */}
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                color: "#ffffff",
              }}
            >
              {LEFT_CONTENT.preTitle}{" "}
              <em style={{ color: "#c8a96e", fontStyle: "italic" }}>
                {LEFT_CONTENT.highlight}
              </em>{" "}
              {LEFT_CONTENT.postTitle}{" "}
              <em style={{ color: "#c8a96e", fontStyle: "italic", display: "block" }}>
                {LEFT_CONTENT.highlightLine2}
              </em>
            </h2>

            <a href={LEFT_CONTENT.cta.href} className="cta-btn">
              {LEFT_CONTENT.cta.label}
              <span className="cta-arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* ── RIGHT — Accordion ── */}
          <div>
            {ACCORDION_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                title={item.title}
                body={item.body}
                isOpen={openIds.has(item.id)}
                onToggle={toggle}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
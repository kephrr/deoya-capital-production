import { TextAlignStart } from "lucide-react";
import { homeContent } from "@/content/home";

const LEFT_CONTENT = homeContent.domainesIntervention.leftContent;
const ITEMS = homeContent.domainesIntervention.items;

// ─── Main Component ───────────────────────────────────────────────────────────
export default function DomaineSection() {
  return (
    <>
      <style>{`
        .energy-section {
          position: relative;
          overflow: hidden;
          min-height: 520px;
          background: #1a1f1a;
        }

        .bg-overlay {
         opacity: 0.6;
          position: absolute;
          inset: 0;
          background: var(--primary);
          z-index: 1;
        }

        .bg-forest {
          position: absolute;
          inset: 0;
          background-image: url('paper-job-office-teamwork-business-analyst.jpg');
          background-size: cover;
          background-position: center 40%;
          z-index: 0;
          filter: saturate(0.5) brightness(0.65);
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
          font-family: var(--font-sans);
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-white">
              {LEFT_CONTENT.preTitle}{" "}
              <span className="text-accent italic font-bold">
                {LEFT_CONTENT.highlight}
              </span>{" "}
              {LEFT_CONTENT.postTitle}{" "}
              <span className="text-accent italic block font-bold">
                {LEFT_CONTENT.highlightLine2}
              </span>
            </h2>
          </div>

          {/* ── RIGHT — Items statiques ── */}
          <div>
            {ITEMS.map((item, index) => (
              <div
                key={item.id}
                style={{
                  borderBottom: index < ITEMS.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                }}
              >
                <div className="flex items-start gap-4">
                  <TextAlignStart color="#DF585E" size={20} />

                  {/* Title + Body */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold leading-snug text-white font-serif">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
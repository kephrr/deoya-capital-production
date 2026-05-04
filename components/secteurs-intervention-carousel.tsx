"use client"
import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { images } from "@/content/images";

// ─── Component ────────────────────────────────────────────────────────────────
export default function SecteursCarousel() {
  const t = useTranslations('expertises.secteursCarousel')
  const tLabels = useTranslations('expertises.labels')
  // Utiliser les traductions directement
  const slides = [
    {
      id: "energie",
      quote: t('energie.quote'),
      enjeux: t.raw('energie.enjeux'),
      segments: t.raw('energie.segments'),
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
      bg: "#081833",
    },
    {
      id: "infrastructure", 
      quote: t('infrastructure.quote'),
      enjeux: t.raw('infrastructure.enjeux'),
      segments: t.raw('infrastructure.segments'),
      image: "/roadconstructionmachinery.jpg",
      bg: "#DF585E",
    },
    {
      id: "industrie",
      quote: t('industrie.quote'),
      enjeux: t.raw('industrie.enjeux'),
      segments: t.raw('industrie.segments'),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
      bg: "#081833",
    },
    {
      id: "finance",
      quote: t('finance.quote'),
      enjeux: t.raw('finance.enjeux'),
      segments: t.raw('finance.segments'),
      image: "/hands-working-with-office-items.jpg",
      bg: "#DF585E",
    }
  ]
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (animating || index === current) return;
      setDirection(dir);
      setPrev(current);
      setCurrent(index);
      setAnimating(true);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 700);
    },
    [animating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const goToPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setTimeout(next, 6000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next]);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <>
      <style>{`
        .slide-enter-next { animation: slideInRight 0.7s cubic-bezier(0.77,0,0.18,1) forwards; }
        .slide-enter-prev { animation: slideInLeft 0.7s cubic-bezier(0.77,0,0.18,1) forwards; }
        .slide-leave-next { animation: slideOutLeft 0.7s cubic-bezier(0.77,0,0.18,1) forwards; }
        .slide-leave-prev { animation: slideOutRight 0.7s cubic-bezier(0.77,0,0.18,1) forwards; }

        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes slideOutLeft { from { transform: translateX(0); } to { transform: translateX(-100%); } }
        @keyframes slideOutRight { from { transform: translateX(0); } to { transform: translateX(100%); } }

        .progress-line {
          animation: progressLine 6s linear;
        }
        @keyframes progressLine {
          from { width: 0%; }
          to   { width: 55%; }
        }

        .arc {
          right: -120px;
          top: 50%;
          transform: translateY(-50%);
          width: 340px;
          height: 340px;
          border-radius: 50%;
          border: 60px solid rgba(255,255,255,0.06);
        }
        .arc-2 {
          right: -200px;
          width: 500px;
          height: 500px;
          border-color: rgba(255,255,255,0.04);
        }

        .quotemark span {
          display: block;
          width: 18px;
          height: 22px;
          border-top: 3.5px solid rgba(255,255,255,0.7);
          border-left: 3.5px solid rgba(255,255,255,0.7);
          border-radius: 3px 0 0 0;
        }
      `}</style>

      <div className="relative w-full h-150 lg:h-130 overflow-hidden font-sans">

        {/* ── Leaving slide ── */}
        {prevSlide && (
          <div className={`absolute inset-0 grid grid-cols-1
           lg:grid-cols-[45%_55%] slide-leave-${direction}`} aria-hidden="true">
            {/* Image - First column on desktop */}
            <div className="relative overflow-hidden hidden lg:block">
              <img src={prevSlide.image} alt="" className="w-full h-full object-cover block" />
            </div>

            {/* Text content - Second column on desktop */}
            <div 
              className="relative p-8 lg:p-16 lg:pl-16 lg:pr-14 
              flex flex-col overflow-hidden pb-20 lg:pb-16 md:pb-8"
              style={{ background: prevSlide.bg }}
            >
              <div className="arc absolute pointer-events-none hidden lg:block" />
              <div className="arc arc-2 absolute pointer-events-none hidden lg:block" />
              <div>
                <div className="flex gap-1 mb-6">
                  <span className="quotemark-span" />
                  <span className="quotemark-span" />
                </div>
                <p className="font-serif italic text-white text-4xl font-bold leading-[1.45] m-0 flex-1">
                  {prevSlide.quote}
                </p>
              </div>
              <div className="mt-8">
                <div className="space-y-3">
                  <div>
                    <p className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-white/70 m-0 mb-2">{tLabels('enjeuxCles')}</p>
                    <ul className="font-sans font-light text-sm leading-[1.6] text-white/75 m-0 space-y-1">
                      {prevSlide.enjeux.map((enjeu: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-white/50">→</span>
                          <span>{enjeu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12">
                    <p className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-white/70 m-0 mb-2">{tLabels('sousSegmentsCouverts')}</p>
                    <p className="font-sans font-light text-sm leading-[1.6] text-white/75 m-0">
                      {prevSlide.segments.join(' | ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Active slide ── */}
        <div
          className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-[45%_55%] 
            ${animating ? `slide-enter-${direction}` : ""}`}
          key={slide.id}
        >
          {/* Image - First column on desktop */}
          <div className="relative overflow-hidden hidden lg:block">
            <img src={slide.image} alt="" className="w-full h-full object-cover block" />
          </div>

          {/* Text content - Second column on desktop */}
          <div 
            className="relative p-8 lg:p-16 lg:pl-16 lg:pr-14 flex flex-col overflow-hidden pb-20 lg:pb-16"
            style={{ background: slide.bg }}
          >
            <div className="arc absolute pointer-events-none hidden lg:block" />
            <div className="arc arc-2 absolute pointer-events-none hidden lg:block" />
            <div>
              <div className="flex gap-1 mb-6">
                <span className="quotemark-span" />
                <span className="quotemark-span" />
              </div>
              <p className="font-serif italic text-white text-4xl font-bold leading-[1.45] m-0 flex-1">
                {slide.quote}
              </p>
            </div>
            <div className="mt-8">
              <div className="space-y-3">
                <div>
                  <p className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-white/70 m-0 mb-2">{tLabels('enjeuxCles')}</p>
                  <ul className="font-sans font-light text-sm leading-[1.6] text-white/75 m-0 space-y-1">
                    {slide.enjeux.map((enjeu: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-white/50">→</span>
                        <span>{enjeu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12">
                  <p className="font-sans font-semibold text-xs tracking-[0.12em] uppercase text-white/70 m-0 mb-2">{tLabels('sousSegmentsCouverts')}</p>
                  <p className="font-sans font-light text-sm leading-[1.6] text-white/75 m-0">
                    {slide.segments.join(' | ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress line */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-white/60 progress-line" key={`prog-${current}`} />
          </div>
        </div>

        {/* ── Controls overlay ── */}
        <div className="absolute bottom-[1.8rem] left-8 lg:left-16 flex items-center gap-5 z-10">
          <button 
            className="w-8 h-8 rounded-full border border-white/45 bg-transparent flex items-center 
            justify-center cursor-pointer text-white transition-all hover:border-white hover:bg-white/10" 
            onClick={goToPrev} 
            aria-label="Précédent"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="flex gap-1.5 items-center">
            {slides.map((s: any, i: number) => (
              <button
                key={s.id}
                className={`w-1.5 h-1.5 rounded-full bg-white/35 cursor-pointer transition-all border-none p-0 ${i === current ? "bg-white scale-140" : ""}`}
                onClick={() => goTo(i, i > current ? "next" : "prev")}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button 
            className="w-8 h-8 rounded-full border border-white/45 bg-transparent flex items-center justify-center cursor-pointer text-white transition-all hover:border-white hover:bg-white/10" 
            onClick={next} 
            aria-label="Suivant"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </>
  );
}
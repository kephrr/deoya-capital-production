"use client"
import { useRef, useState, useCallback } from "react";
import { useTranslations } from "next-intl";

// ─── Types ────────────────────────────────────────────────────────
interface Card {
  id: string;
  title: string;
  description: string;
}

interface Header {
  preTitle: string;
  highlight1: string;
  midTitle: string;
  highlight2: string;
  postTitle: string;
  description: string;
  objectif: string;
}

interface ExpertiseCarouselProps {
  header: Header;
  cards: Card[];
  index?: number; // Ajout de l'index pour l'alternance des couleurs
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ExpertiseCarousel({ header, cards, index = 0 }: ExpertiseCarouselProps) {
  const t = useTranslations('expertises.expertiseCarousel')
  const CARD_WIDTH = 260;
  const CARD_GAP = 16;
  const STEP = CARD_WIDTH + CARD_GAP;

  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

  const maxScroll =
    cards.length * STEP - CARD_GAP - (typeof window !== "undefined" ? window.innerWidth * 0.72 : 800);

  // Calculate mobile slides (2 cards per slide)
  const mobileSlides = [];
  for (let i = 0; i < cards.length; i += 2) {
    mobileSlides.push(cards.slice(i, i + 2));
  }

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const next = el.scrollLeft + dir * STEP * 2;
    el.scrollTo({ left: next, behavior: "smooth" });
  }, []);

  const handleScroll = () => {
    if (trackRef.current) setScrollPos(trackRef.current.scrollLeft);
  };

  const goToMobileSlide = useCallback((slideIndex: number) => {
    setCurrentMobileSlide(slideIndex);
  }, []);

  const nextMobileSlide = useCallback(() => {
    setCurrentMobileSlide((prev) => (prev + 1) % mobileSlides.length);
  }, [mobileSlides.length]);

  const prevMobileSlide = useCallback(() => {
    setCurrentMobileSlide((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length);
  }, [mobileSlides.length]);

  const canPrev = scrollPos > 0 && cards.length > 4;
  const canNext = scrollPos < maxScroll && cards.length > 4;
  const canPrevMobile = currentMobileSlide > 0;
  const canNextMobile = currentMobileSlide < mobileSlides.length - 1;

  return (
    <>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Safari and Chrome */
        }
      `}</style>
      <section className="py-16 px-0 pb-16 overflow-hidden">
        {/* Header */}
        <div className="max-w-[1100px] mx-auto px-10 
        grid grid-cols-1 gap-8 gap-x-16 items-start
        mb-10 md:grid-cols-1">
          <div>
            {
              index===3 ? (
                <h2 className="font-serif text-accent text-4xl font-semibold leading-tight m-0">
                  {header.highlight1}</h2>
              ) : 
              <h2 className="font-serif text-4xl font-semibold leading-tight text-foreground m-0">
                {header.preTitle}{" "}
                <em className={`italic text-accent`}>{header.highlight1}</em>{" "}
                {header.midTitle}{" "}
                <em className={`italic text-accent`}>{header.highlight2}</em>
                <br />
                {header.postTitle}
              </h2>
            }
            
          </div>

          <div className="pt-1">
            
            <p className="font-sans text-sm font-light leading-[1.7] text-muted-foreground m-0"> 
              {header.description}<br />
              {header.objectif !== "" && (
                <>
                  <span className="font-bold text-foreground">{t('objectifLabel')}</span> {header.objectif}
                </>
              )}
            </p>
          </div>
        </div>

        {/* Desktop Carousel - Hidden on mobile */}
        <div className="hidden md:block">
          <div
            className="overflow-x-auto overflow-y-visible 
            px-10 py-2 pb-6 cursor-grab active:cursor-grabbing scrollbar-hide"
            ref={trackRef}
            onScroll={handleScroll}
          >
            <div className={`flex gap-4 ${cards.length < 5 ? 'justify-center' : ''}`}>
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 w-full md:w-65 bg-white rounded-lg 
                  border border-border shadow-sm p-6 group"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="font-serif text-lg font-semibold text-primary mb-4">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Footer: progress + nav */}
          <div className="max-w-[1100px] mx-auto mt-6 px-10 flex items-center gap-6">
            {/* Progress bar */}
            <div className="h-0.5 bg-black/12 rounded-sm overflow-hidden flex-1">
              <div
                className="h-full bg-accent rounded-sm transition-all duration-200 ease-in-out"
                style={{
                  width: `${Math.min(100, (scrollPos / Math.max(1, maxScroll)) * 100)}%`,
                }}
              />
            </div>

            {/* Nav arrows */}
            <div className="flex gap-2">
              <button 
                className="w-8.5 h-8.5 rounded-full border border-black/25 bg-transparent flex items-center justify-center cursor-pointer transition-all text-[#1a1a1a] disabled:opacity-30 disabled:cursor-default hover:border-accent hover:text-accent" 
                onClick={() => scrollBy(-1)} 
                disabled={!canPrev} 
                aria-label={t('precedent')}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="w-8.5 h-8.5 rounded-full border border-black/25 bg-transparent flex items-center justify-center cursor-pointer transition-all text-[#1a1a1a] disabled:opacity-30 disabled:cursor-default hover:border-accent hover:text-accent" 
                onClick={() => scrollBy(1)} 
                disabled={!canNext} 
                aria-label={t('suivant')}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Carousel - Visible only below 680px */}
        <div className="md:hidden px-10">
          <div className="relative">
            {/* Mobile Slides */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentMobileSlide * 100}%)` }}
              >
                {mobileSlides.map((slideCards, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full shrink-0 px-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {slideCards.map((card) => (
                        <div
                          key={card.id}
                          className="bg-white rounded-lg border border-border shadow-sm p-4"
                        >
                          <div className="flex flex-col h-full">
                            <h3 className="font-serif text-base font-semibold text-primary mb-3">
                              {card.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed grow">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button 
                className="w-8 h-8 rounded-full border border-black/25 bg-transparent flex items-center justify-center cursor-pointer transition-all text-[#1a1a1a] disabled:opacity-30 disabled:cursor-default hover:border-accent hover:text-accent" 
                onClick={prevMobileSlide}
                disabled={!canPrevMobile}
                aria-label={t('precedent')}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Mobile Dots */}
              <div className="flex gap-2">
                {mobileSlides.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all border-none p-0 ${
                      i === currentMobileSlide 
                        ? "bg-accent w-6" 
                        : "bg-black/20"
                    }`}
                    onClick={() => goToMobileSlide(i)}
                    aria-label={`${t('slide')} ${i + 1}`}
                  />
                ))}
              </div>

              <button 
                className="w-8 h-8 rounded-full border border-black/25 bg-transparent flex items-center justify-center cursor-pointer transition-all text-[#1a1a1a] disabled:opacity-30 disabled:cursor-default hover:border-accent hover:text-accent" 
                onClick={nextMobileSlide}
                disabled={!canNextMobile}
                aria-label={t('suivant')}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

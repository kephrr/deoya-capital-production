'use client'

import { ArrowRight } from "lucide-react"
import { homeContent } from "@/content/home"
import { useEffect, useRef } from "react"

interface HeroBackgroundProps {
  backgroundImage?: string;
}

function HeroBackground({ backgroundImage = '/dark-abstract-pattern.jpg' }: HeroBackgroundProps) {
  return (
    <div 
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
      aria-hidden="true"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
  )
}

interface VideoHeroBackgroundProps {
  videoSrc?: string;
}

function VideoHeroBackground({ videoSrc = '/Video DEOYA.mp4' }: VideoHeroBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Forcer le démarrage de la vidéo sur Safari
      const playPromise = video.play()
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error)
          // Tenter de jouer après une interaction utilisateur
          const attemptPlay = () => {
            video.play().catch(e => console.log("Still cannot play:", e))
          }
          
          // Écouter le premier événement d'interaction
          const events = ['click', 'touchstart', 'keydown']
          const handleInteraction = () => {
            attemptPlay()
            events.forEach(event => document.removeEventListener(event, handleInteraction))
          }
          
          events.forEach(event => document.addEventListener(event, handleInteraction, { once: true }))
        })
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-primary/70" />
    </div>
  )
}

interface HeroProps {
  backgroundImage?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  showCta?: boolean;
  showPreTitle?:boolean;
  height?: string;
  mxAuto?: boolean;
  ctaMarginTop?: string;
  onClickCta?: () => void;
}



export function Hero({ 
  backgroundImage = '/dark-abstract-pattern.jpg',
  label = 'DEOYA CAPITAL',
  title = 'Cabinet d’intelligence économique et stratégique dédié aux investissements internationaux et aux dynamiques transcontinentales.',
  subtitle = 'Nous analysons les environnements politiques, sectoriels et géostratégiques afin d’accompagner les entreprises et les investisseurs dans leurs décisions d’expansion, d’implantation et de développement sur les marchés internationaux.',
  ctaText = 'Découvrir nos expertises',
  ctaHref = '#expertises',
  showCta = true,
  showPreTitle = true,
  height = 'min-h-screen',
  mxAuto = false,
  ctaMarginTop = 'mt-10',
  onClickCta
}: HeroProps) {
  return (
    <section className={`relative flex ${height} items-center overflow-hidden bg-primary text-primary-foreground`}>
      <HeroBackground backgroundImage={backgroundImage} />

      <div className={`relative ${mxAuto ? 'mx-auto' : ''} w-7xl px-6 py-32 lg:px-8 lg:py-40`}>
        <div className="max-w-6xl">
          {/* Small label */}
          {showPreTitle && (
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary-foreground/50">
              {label}
            </p>
          )}
          

          {/* Main heading */}
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-5xl text-lg font-light leading-relaxed text-primary-foreground/70 text-pretty md:text-xl whitespace-pre-line">
            {subtitle}
          </p>

          {/* CTAs */}
          {showCta && (
            <div className={`${ctaMarginTop} flex flex-col gap-4 sm:flex-row sm:items-center`}>
              <a
                href={ctaHref}
                onClick={onClickCta}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </a>
              
            </div>
          )}
        </div>
      </div>

      {/* Gold decorative line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />
    </section>
  )
}

interface VideoHeroProps {
  videoSrc?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  showCta?: boolean;
  showPreTitle?: boolean;
  height?: string;
}

export function VideoHero({ 
  videoSrc,
  label,
  title,
  subtitle,
  ctaText,
  ctaHref,
  showCta,
  showPreTitle,
  height
}: VideoHeroProps) {
  const content = homeContent
  const videoHeroContent = content.videoHero

  const finalVideoSrc = videoSrc ?? videoHeroContent.videoSrc
  const finalLabel = label ?? videoHeroContent.label
  const finalTitle = title ?? videoHeroContent.title
  const finalSubtitle = subtitle ?? videoHeroContent.subtitle
  const finalCtaText = ctaText ?? videoHeroContent.ctaText
  const finalCtaHref = ctaHref ?? videoHeroContent.ctaHref
  const finalShowCta = showCta ?? videoHeroContent.showCta
  const finalShowPreTitle = showPreTitle ?? videoHeroContent.showPreTitle
  const finalHeight = height ?? videoHeroContent.height
  return (
    <section className={`relative flex ${finalHeight} items-center overflow-hidden bg-primary text-primary-foreground`}>
      <VideoHeroBackground videoSrc={finalVideoSrc} />

      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="max-w-6xl">
          {/* Small label */}
          {finalShowPreTitle && (
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary-foreground/50">
              {finalLabel}
            </p>
          )}

          {/* Main heading */}
          <h1 className="font-serif text-4xl font-semibold 
          leading-tight tracking-tight 
          text-balance md:text-5xl lg:text-6xl">
            {finalTitle}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-5xl text-lg font-light leading-relaxed text-primary-foreground/70 text-pretty md:text-xl whitespace-pre-line">
            {finalSubtitle}
          </p>

          {/* CTAs */}
          {finalShowCta && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={finalCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                {finalCtaText}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent
                rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors duration-200 
                hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
               {videoHeroContent.secondCta.text}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            
          )}
        </div>
      </div>

      {/* Gold decorative line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />
    </section>
  )
}

"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { images } from "@/content/images"
import { useTranslations } from "next-intl"

export function TrustSection() {
  const t = useTranslations('cabinet.trustSection')
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handlePlay = () => {
    const video = document.getElementById('trust-video') as HTMLVideoElement
    if (video) {
      video.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    const video = document.getElementById('trust-video') as HTMLVideoElement
    if (video) {
      video.pause()
      setIsPlaying(false)
    }
  }
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Video */}
          <FadeIn>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-primary border border-border">
              {/* Thumbnail image */}
              {!isPlaying && (
                <div className="absolute inset-0">
                  <img
                    src={images.cabinet.trustSection.videoCover}
                    alt={t('videoFallbackText')}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay for better button visibility */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              )}
              
              {/* Video */}
              <video
                id="trust-video"
                className={`w-full h-full object-cover ${!isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                muted={isMuted}
                loop
                playsInline
              >
                <source src={images.cabinet.trustSection.video} type="video/mp4" />
                {t('videoFallbackText')}
              </video>
              
              {/* Play button */}
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label={t('enableSound')}
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 hover:bg-white transition-all duration-200 flex items-center justify-center group-hover:scale-110 shadow-lg">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </button>
              )}
              
              {/* Pause button - visible on hover when playing */}
              {isPlaying && (
                <button
                  onClick={handlePause}
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-transparent"
                  aria-label={t('disableSound')}
                >
                  <div className="w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 transition-all duration-200 flex items-center justify-center shadow-lg">
                    <Pause className="w-7 h-7 text-white" fill="currentColor" />
                  </div>
                </button>
              )}
              
              {/* Mute/Unmute button */}
              {isPlaying && (
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label={isMuted ? t('enableSound') : t('disableSound')}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              )}
              
              {/* Subtle overlay for better text readability if needed */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="h-full w-full bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={150}>
            <div className="space-y-6">
              {/* Section label */}
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                {t('label')}
              </p>

              {/* Main heading */}
              <h1 className="font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl">
                {t('title')}
              </h1>

              {/* Description */}
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>{t('description1')}</p>
                <p>{t('description2')}</p>
                <p>{t('description3')}</p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href={t('ctaHref')}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity duration-200 hover:opacity-90"
                >
                  {t('ctaText')}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

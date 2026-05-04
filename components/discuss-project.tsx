"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { ArrowRight, Send, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { images } from "@/content/images"

interface DiscussProjectProps {
  backgroundImage?: string
  redirectUrl?: string
  title?: string
  subtitle?: string
  showSubtitle?:boolean
  buttonText?: string
  useModal?: boolean
  showCta?: boolean
}

export function DiscussProject({ 
  backgroundImage = images.home.hero.backgroundImage,
  redirectUrl = "/contact",
  title,
  subtitle,
  showSubtitle=true,
  buttonText,
  useModal = true,
  showCta = true
}: DiscussProjectProps) {
  const t = useTranslations('discussProject')
  const [isFormOpen, setIsFormOpen] = useState(false)
  
  // Use translated defaults if props are not provided
  const finalTitle = title || t('defaultTitle')
  const finalSubtitle = subtitle || t('defaultSubtitle')
  const finalButtonText = buttonText || t('defaultButtonText')

  const handleButtonClick = () => {
    if (useModal) {
      setIsFormOpen(true)
    } else {
      window.location.href = redirectUrl
    }
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setIsFormOpen(false)
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <section className="bg-primary py-24 text-primary-foreground lg:py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-3xl font-semibold text-balance md:text-4xl">
                {finalTitle}
              </h2>
              <div className="mt-4 h-px w-16 bg-gold/50 mx-auto" />
              {showSubtitle && <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
                {finalSubtitle}
              </p>
              }
              
              {showCta && (
                <button
                  onClick={handleButtonClick}
                  className="mt-10 inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-8 py-4 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:border-primary-foreground hover:bg-primary-foreground/10"
                >
                  {finalButtonText}
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="mx-6 w-full max-w-lg rounded-lg bg-background p-8 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-primary">
                {finalTitle}
              </h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                  placeholder="Votre entreprise"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                  placeholder="Dites nous en plus sur vous..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="flex-1 rounded-md border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
                >
                  {t('cancel')}
                </button>
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity duration-200 hover:opacity-90"
                >
                  {t('send')}
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

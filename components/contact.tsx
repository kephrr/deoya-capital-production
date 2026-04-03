"use client"

import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { contactContent } from "@/content/contact"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const content = contactContent
  const { hero, form } = content

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string
    
    try {
      const response = await fetch("https://ton-api.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
      
      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi du message")
      }
      
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              {hero.label}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-primary text-balance md:text-4xl">
              {hero.title}
            </h2>
            <div className="mt-4 h-px w-16 bg-gold" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {hero.description}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={form.image.src} 
              alt={form.image.alt} 
              className="h-full w-full object-cover"
            />
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-background p-12 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <Send className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-primary">
                {form.success.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {form.success.description}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-lg border border-border bg-background p-8"
            >
              {error && (
                <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                    placeholder={form.fields.name.placeholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    {form.fields.company.label}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                    placeholder={form.fields.company.placeholder}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  {form.fields.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                  placeholder={form.fields.email.placeholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  {form.fields.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                  placeholder={form.fields.message.placeholder}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity duration-200 hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Envoi en cours..." : form.submit.text}
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
        </FadeIn>
      </div>
    </section>
  )
}

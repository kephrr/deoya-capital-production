"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { X, Send, User, Mail, Phone, Briefcase } from "lucide-react"
import { sendContactForm } from "@/lib/emailjs"

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    fonction: "",
    telephone: ""
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    
    try {
      const result = await sendContactForm({
        nom_complet: `${formData.prenom} ${formData.nom}`.trim(),
        email: formData.email,
        telephone: formData.telephone,
        message: formData.fonction, // Message par défaut
        domaine_expertise: formData.fonction, // Domaine d'expertise
      })
      
      if (!result.success) {
        throw new Error("Une erreur est survenue lors de l'envoi du message")
      }
      
      setSubmitted(true)
      setTimeout(() => {
        onClose()
        resetForm()
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setLoading(false)
    }
  }
  
  const resetForm = () => {
    setFormData({ nom: "", prenom: "", email: "", fonction: "", telephone: "" })
    setSubmitted(false)
    setError("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="mx-6 w-full max-w-lg rounded-lg bg-background p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-serif text-xl font-semibold text-primary">
            Rejoindre DEOYA CAPITAL
          </h3>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <Send className="h-6 w-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="mb-2 font-serif text-xl font-semibold text-primary">
              Message envoyé avec succès!
            </h3>
            <p className="text-sm text-muted-foreground">
              Nous vous contacterons dans les plus brefs délais.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                {error}
              </div>
            )}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="nom"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Nom
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-300 bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="prenom"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Prénom
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-300 bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                  placeholder="Votre prénom"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-gray-300 bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                placeholder="votre@email.com"
              />
            </div>
          </div>

            <div>
              <label
                htmlFor="fonction"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Domaine d'expertise
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="fonction"
                  name="fonction"
                  value={formData.fonction}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                  placeholder=" Quel est votre domaine d’expertise ? Dites nous en plus"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="telephone"
                className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Téléphone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-background pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-md border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary cursor-pointer"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
        )}
      </div>
    </div>
  )
}

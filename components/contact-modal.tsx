"use client"

import { useState } from "react"
import { FadeIn } from "@/components/fade-in"
import { X, Send, User, Mail, Phone, Briefcase } from "lucide-react"

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    fonction: "",
    telephone: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    onClose()
    setFormData({ nom: "", prenom: "", email: "", fonction: "", telephone: "" })
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

        <form onSubmit={handleSubmit} className="space-y-5">
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
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity duration-200 hover:opacity-90 cursor-pointer"
            >
              Envoyer
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

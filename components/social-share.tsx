'use client'

import { useState } from 'react'
import { Share2, Mail, Link2, Facebook, Linkedin } from 'lucide-react'

interface SocialShareProps {
  url: string
  title: string
  description?: string
}

export function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || title)

  // Message par défaut pour le partage
  const defaultMessage = `Découvrez cet article de Deoya Capital : ${title}\n\n${description || ''}\n\nLire l'article complet : ${url}`
  const encodedMessage = encodeURIComponent(defaultMessage)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedDescription}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodeURIComponent(`Découvrez cet article de Deoya Capital : ${title}\n\nLire l'article complet : ${url}`)}`,
    copy: url
  }

  const handleCopyLink = async () => {
    try {
      const textToCopy = `${title}\n${description || ''}\n\n${url}`
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleShare = (platform: keyof typeof shareLinks) => {
    if (platform === 'copy') {
      handleCopyLink()
    } else {
      // Ouvrir dans le même onglet pour éviter les bloqueurs de pop-up (surtout sur Safari)
      window.open(shareLinks[platform], '_blank')
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors"
        aria-label="Partager sur les réseaux sociaux"
      >
        <Share2 className="h-3 w-3" />
        <span>Partager</span>
      </button>

      {showOptions && (
        <div className="absolute bottom-full left-0 mb-2 bg-background border border-border rounded-lg shadow-lg p-2 min-w-50 z-50">
          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary rounded transition-colors"
            >
              <Facebook className="h-4 w-4 text-muted-foreground" />
              Facebook
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary rounded transition-colors"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground" />
              LinkedIn
            </button>
            <button
              onClick={() => handleShare('email')}
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary rounded transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary rounded transition-colors"
            >
              <Link2 className="h-4 w-4" />
              {copied ? 'Copié!' : 'Copier le lien'}
            </button>
          </div>
        </div>
      )}

      {showOptions && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowOptions(false)}
        />
      )}
    </div>
  )
}

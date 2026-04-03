export interface WPImage {
  id: number
  source_url: string
  alt_text?: string
  caption?: {
    rendered: string
  }
  media_details?: {
    width: number
    height: number
    file: string
    sizes?: {
      thumbnail?: {
        file: string
        width: number
        height: number
        mime_type: string
        source_url: string
      }
      medium?: {
        file: string
        width: number
        height: number
        mime_type: string
        source_url: string
      }
      large?: {
        file: string
        width: number
        height: number
        mime_type: string
        source_url: string
      }
    }
  }
}

export interface WPCategory {
  id: number
  name: string
  slug: string
}

export interface WPTag {
  id: number
  name: string
  slug: string
}

export interface WPPost {
  id: number
  slug: string
  date: string
  title: string
  content: string
  excerpt: string
  featured_image?: WPImage | null
  thumbnail_url?: string | null
  tags?: WPTag[]
  categories?: WPCategory[]
}

export interface WPPostListItem {
  id: number
  slug: string
  date: string
  title: string
  excerpt: string
  featured_image?: WPImage | null
  thumbnail_url?: string | null
  tags?: WPTag[]
  categories?: WPCategory[]
}
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { WPPost } from "@/types/WPPTypes";
import { useLocale } from "next-intl";

interface ArticleCardProps {
  post: WPPost;
}

export function ArticleCard({ post }: ArticleCardProps) {
  const locale = useLocale();
  const title = post.title?.replace(/<[^>]*>/g, '') || 'Titre non disponible';
  const excerpt = post.excerpt || 'Description non disponible';
  
  return (
    <Link href={`/${locale}/newsletter/${post.slug}`}>
      <article className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={post.thumbnail_url || post.featured_image?.media_details?.sizes?.thumbnail?.source_url || post.featured_image?.source_url || "/press.jpg"} 
            alt={post.featured_image?.alt_text || title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category and date */}
          <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium text-accent uppercase tracking-wider">
              {post.categories && post.categories.length > 0 
                ? (post.categories[0].name || post.categories[0].slug || String(post.categories[0].id))
                : 'Article'
              }
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-3 font-serif text-xl font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <div className="mb-4 text-sm text-muted-foreground line-clamp-3 leading-relaxed flex-1 prose prose-sm max-w-none">
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          </div>

          {/* Labels */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.categories && post.categories.length > 0 && (
              post.categories.slice(0, 2).map((category, index) => (
                <span key={index} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {category.name || category.slug || String(category.id)}
                </span>
              ))
            )}
            {post.tags && post.tags.length > 0 && (
              post.tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {tag.name || tag.slug || String(tag.id)}
                </span>
              ))
            )}
            {(!post.categories || post.categories.length === 0) && (!post.tags || post.tags.length === 0) && (
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                Article
              </span>
            )}
          </div>

          {/* Meta info */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>Deoya Capital</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

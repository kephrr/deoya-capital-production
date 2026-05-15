import { getPosts, getPost } from "@/services/blogAPI";
import { locales } from "@/i18n/config"; // ← importer vos locales
import ArticleClient from "./ArticleClient";
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getPosts();
  
  // ← croiser locales × slugs pour pré-générer toutes les combinaisons
  return locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      id: post.slug,
    }))
  );
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string; locale: string }> // ← ajouter locale
}): Promise<Metadata> {
  const { id, locale } = await params; // ← destructurer locale
  const post = await getPost(id);
  
  if (!post) {
    return {
      title: 'Article non trouvé',
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  const title = post.title?.replace(/<[^>]*>/g, '') || 'Article';
  const description = post.excerpt?.replace(/<[^>]*>/g, '') || '';
  const ogImage = post.featured_image?.source_url || post.thumbnail_url || '/deoya-capital-vert-mini-o.png';

  return {
    title: `${title} — DEOYA CAPITAL`,
    description: description || `Article: ${title}`,
    openGraph: {
      title: `${title} — DEOYA CAPITAL`,
      description: description || `Article: ${title}`,
      url: `https://www.deoya-capital.com/${locale}/newsletter/${post.slug}/`, // ← www + locale + trailing slash
      siteName: 'Deoya Capital',
      images: [
        {
          url: ogImage,
          width: post.featured_image?.media_details?.width || 1200,
          height: post.featured_image?.media_details?.height || 630,
          alt: post.featured_image?.alt_text || title,
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : locale === 'es' ? 'es_ES' : 'ar_AR',
      type: 'article',
    },
  };
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ id: string; locale: string }> 
}) {
  const { id } = await params;
  return <ArticleClient id={id} />;
}
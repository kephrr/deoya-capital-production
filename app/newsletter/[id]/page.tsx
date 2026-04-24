import { getPosts, getPost } from "@/services/blogAPI";
import ArticleClient from "./ArticleClient";
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    id: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.id);
  
  if (!post) {
    return {
      title: 'Article non trouvé',
      description: 'L\'article que vous recherchez n\'existe pas.',
    };
  }

  const title = post.title?.replace(/<[^>]*>/g, '') || 'Article';
  const description = post.excerpt?.replace(/<[^>]*>/g, '') || '';
  
  return {
    title: `${title} — DEOYA CAPITAL`,
    description: description || `Article: ${title}`,
    openGraph: {
      title: `${title} — DEOYA CAPITAL`,
      description: description || `Article: ${title}`,
      url: `https://deoya-capital.com/newsletter/${post.slug}`,
      siteName: 'Deoya Capital',
      images: [
        {
          url: '/deoya-capital-vert-mini-o.png',
          width: 1200,
          height: 630,
          alt: 'Deoya Capital',
        },
      ],
      locale: 'fr_FR',
      type: 'article',
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ArticleClient id={resolvedParams.id} />;
}

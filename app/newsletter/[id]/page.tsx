import { getPosts } from "@/services/blogAPI";
import ArticleClient from "./ArticleClient";

export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    id: post.slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ArticleClient id={resolvedParams.id} />;
}

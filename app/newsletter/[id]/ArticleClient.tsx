"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { WPPost } from "@/types/WPPTypes";
import { getPost } from "@/services/blogAPI";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface ArticleClientProps {
  id: string;
}

export default function ArticleClient({ id }: ArticleClientProps) {
  const [article, setArticle] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const fetchedArticle = await getPost(id);
        
        if (!fetchedArticle) {
          setError(true);
          return;
        }
        
        setArticle(fetchedArticle);
      } catch (err) {
        console.error('Error fetching article:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    } else {
      setError(true);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <main>
        <div className="min-h-screen bg-background">
          <Navigation backgrounded={false} />
          <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
              <div className="h-12 bg-gray-200 rounded mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main>
        <div className="min-h-screen bg-background">
          <Navigation backgrounded={false} />
          <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
            <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas.</p>
            <Link 
              href="/newsletter" 
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux articles
            </Link>
          </div>
          <Footer />
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="min-h-screen bg-background">
        <Navigation backgrounded={false} />
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <a href="/newsletter" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Retour aux articles
            </a>
          </div>

          {/* Article header */}
          <div className="mb-12">
            {/* Title */}
            <div className="mb-6">
              <div 
                className="font-serif text-4xl font-semibold text-primary text-balance lg:text-5xl prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.title }} 
              />
            </div>

            {/* Date and author */}
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Deoya Capital</span>
              </div>
            </div>
          </div>

          {/* Article content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="space-y-6 text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { ArticleCard } from "@/components/article-card";
import { WPPost, WPCategory } from "@/types/WPPTypes";
import { FadeIn } from "@/components/fade-in";
import { Search, Filter, X } from "lucide-react";
import { Navigation } from "@/components/navigation";
import {Hero} from "@/components/hero";
import { DiscussProject } from "@/components/discuss-project";
import { Footer } from "@/components/footer";
import { getPosts, getCategories } from "@/services/blogAPI";
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { newsletterContent } from "@/content/newsletter";
import { sendNewsletterConfirmation } from "@/lib/emailjs";

export default function NewsletterPage() {
  const { toast } = useToast();
  const { hero, filters, subscription, discussProject } = newsletterContent
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [categories, setCategories] = useState<WPCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  useEffect(() => {
    let mounted = true;
    
    const fetchData = async () => {
      try {
        const [fetchedPosts, fetchedCategories] = await Promise.all([
          getPosts(),
          getCategories()
        ]);
        
        if (mounted) {
          setPosts(fetchedPosts);
          setCategories(fetchedCategories);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  // Get unique categories for filter
  const categoryOptions = [{ id: 0, name: "all", slug: "all" }, ...categories];

  // Filter articles
  const filteredArticles = posts.filter((post: WPPost) => {
    if (!post.title || !post.excerpt) return false;
    
    const title = post.title.replace(/<[^>]*>/g, '');
    const excerpt = post.excerpt.replace(/<[^>]*>/g, '');
    
    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
      (post.categories && post.categories.some((cat: WPCategory) => 
        cat.slug === selectedCategory || cat.name === selectedCategory
      ));
    
    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    
    setIsSubscribing(true);
    try {
      const result = await sendNewsletterConfirmation(email);
      
      if (!result.success) {
        throw new Error("Une erreur est survenue lors de l'inscription à la newsletter");
      }
      
      // Reset form and close modal
      setEmail("");
      setConsent(false);
      setIsModalOpen(false);
      
      // Show success toast
      toast({
        title: subscription.toast.title,
        description: subscription.toast.description
      });

    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert(subscription.error);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero {...hero} showCta={false} onClickCta={() => setIsModalOpen(true)} />
      <Navigation backgrounded={true} />
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-24 lg:px-8">
        {/* Filters */}
        <FadeIn delay={100}>
          <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={filters.search.placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-border bg-background pl-12 pr-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">{filters.category.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((category: WPCategory) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      selectedCategory === category.slug
                        ? "bg-accent text-white"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {category.name === "all" ? filters.category.all : category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count and subscribe button */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {filteredArticles.length} {filteredArticles.length > 1 ? filters.results.articles : filters.results.article} {filteredArticles.length > 1 ? filters.results.trouves : filters.results.trouve}
              </div>
              
            </div>
          </div>
        </FadeIn>

        {/* Articles grid */}
        {loading ? (
          <FadeIn>
            <div className="text-center py-12">
              <p className="text-muted-foreground">{filters.results.loading}</p>
            </div>
          </FadeIn>
        ) : filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            {filteredArticles.map((post: WPPost, index: number) => (
              <FadeIn key={post.id} delay={index * 50}>
                <ArticleCard post={post} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <div className="text-center py-12">
              <p className="text-muted-foreground">{filters.results.noResults}</p>
            </div>
          </FadeIn>
        )}
      </div>

      {/* Subscription Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-background p-6 shadow-xl">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-semibold text-primary">
                {subscription.modal.title}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
                  {subscription.modal.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={subscription.modal.email.placeholder}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-0.5 h-4 w-4 rounded border-border bg-background text-accent focus:ring-accent"
                  />
                  <span className="text-sm text-muted-foreground">
                    {subscription.modal.consent}
                  </span>
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={!email || !consent || isSubscribing}
                className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubscribing ? subscription.modal.submit.subscribing : subscription.modal.submit.subscribe}
              </button>
            </form>
          </div>
        </div>
      )}

      <DiscussProject {...discussProject} showCta={false} />
      <Toaster />
      <Footer />
    </div>
  );
}

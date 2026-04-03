"use client";

import { useState, useEffect } from "react";
import { WPPost } from "@/types/WPPTypes";

// Variable globale pour éviter les appels multiples
let globalPosts: WPPost[] | null = null;
let globalLoading = false;
let hasFetched = false;

interface PostsProviderProps {
  children: (posts: WPPost[], loading: boolean) => React.ReactNode;
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<WPPost[]>(globalPosts || []);
  const [loading, setLoading] = useState(globalLoading);

  useEffect(() => {
    // Si on a déjà les données, ne rien faire
    if (globalPosts !== null) {
      return;
    }

    // Si un appel est déjà en cours, ne rien faire
    if (globalLoading || hasFetched) {
      return;
    }

    hasFetched = true;
    globalLoading = true;
    setLoading(true);

    const fetchPosts = async () => {
      try {
        const API_URL = "https://deoya-capital-back.vercel.app";
        const res = await fetch(`${API_URL}/api/posts`);
        const fetchedPosts = await res.json();
        
        globalPosts = fetchedPosts;
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        globalLoading = false;
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return <>{children(posts, loading)}</>;
}

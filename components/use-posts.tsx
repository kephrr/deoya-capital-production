"use client";

import { useState, useEffect } from "react";
import { WPPost } from "@/types/WPPTypes";

export function usePosts() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchPosts = async () => {
      try {
        const API_URL = "http://localhost:4000";
        const res = await fetch(`${API_URL}/api/posts`);
        const fetchedPosts = await res.json();
        
        if (mounted) {
          setPosts(fetchedPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      mounted = false;
    };
  }, []);

  return { posts, loading };
}

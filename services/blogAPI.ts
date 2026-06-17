import { WPCategory, WPPost } from "@/types/WPPTypes";

const API_URL = "https://deoya-capital-back.vercel.app";

export async function getPosts(): Promise<WPPost[]> {
  const res = await fetch(`${API_URL}/api/posts`, { cache: "no-store" })
  return res.json()
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const res = await fetch(`${API_URL}/api/posts/${slug}`, { cache: "no-store" })
  
  if (!res.ok) {
    return null;
  }
  
  const data = await res.json();
  return data
}

export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(`${API_URL}/api/categories`)
  return res.json()
}
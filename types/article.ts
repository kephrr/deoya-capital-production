export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  labels: string[];
  content: string;
  author?: string;
  readTime?: number;
  imageUrl?: string;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  published_at: string;
  status: string;
  updated_at: string;
  created_at: string;
  featured_image: string;
  keywords: string | null;
  prompt: string | null;
  koala_id: string | null;
}

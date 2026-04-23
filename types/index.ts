export type PostCategory = "blogs" | "finance";

export interface Post {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage?: string;
  category: PostCategory;
  link?: string;
  tags?: string[];    
  content: string[];
  publishedAt?: string;
}

export interface Project {
  _id: string;
  slug: string;
  title: string;
  description?: string;
  coverImage?: string;
  tags?: string[];
  link?: string;
  publishedAt?: string;
  category: "finance";
}

export interface Blogs {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage?: string;
  tags?: string[];
  content: string[];
  publishedAt?: string;
  category: "blogs";
}

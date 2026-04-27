import type {PortableTextBlock} from '@portabletext/types'

export type PostCategory = 'blogs' | 'finance'

export interface SanityImage {
  _type?: 'image'
  asset?: {_ref: string; _type: 'reference'}
  alt?: string
  hotspot?: {x: number; y: number; height: number; width: number}
}

export interface Section {
  _key?: string
  _type: 'section'
  heading?: string
  content?: PortableTextBlock[]
  image?: SanityImage & {url?: string}
}

export interface Post {
  _id: string
  title: string
  slug: string
  description?: string
  coverImage?: SanityImage
  category: PostCategory
  link?: string
  tags?: string[]
  sections?: Section[]
  publishedAt?: string
}

// Narrowed views of Post for category-specific pages
export type Blog = Post & {category: 'blogs'}
export type Project = Post & {category: 'finance'}

export interface Profile {
  _id: string
  name: string
  designation: string
  shortIntro?: string
  longDescription?: PortableTextBlock[]
  imageUrl?: string
  imageAlt?: string
}
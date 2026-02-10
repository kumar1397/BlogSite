import type { Post, Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Analytics Dashboard",
    description: "A real-time analytics platform with interactive charts, data filtering, and export capabilities for business intelligence.",
    techStack: ["React", "TypeScript", "D3.js"],
    image: "/assets/project1.jpg",
    link: "#",
    type: "web",
  },
  {
    id: "2",
    title: "Wellness Tracker",
    description: "A mobile-first application for tracking daily habits, fitness goals, and mindfulness sessions with gentle reminders.",
    techStack: ["React Native", "Firebase"],
    image: "/assets/project2.jpg",
    link: "#",
    type: "app",
  },
  {
    id: "3",
    title: "DevKit CLI",
    description: "An open-source command-line toolkit for scaffolding projects, managing configurations, and automating workflows.",
    techStack: ["Node.js", "TypeScript"],
    image: "/assets/project3.jpg",
    link: "#",
    type: "code",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "Building Resilient Systems with TypeScript",
    slug: "resilient-systems-typescript",
    excerpt: "Exploring patterns for creating robust, type-safe applications that gracefully handle failures and edge cases.",
    content: "",
    coverImage: "/assets/blog1.jpg",
    tags: ["TypeScript", "Architecture"],
    publishedAt: "2026-01-15",
  },
  {
    id: "2",
    title: "The Art of Minimal Design in Web Development",
    slug: "minimal-design-web",
    excerpt: "Why constraints breed creativity, and how embracing simplicity leads to more effective user experiences.",
    content: "",
    coverImage: "/assets/blog2.jpg",
    tags: ["Design", "UX"],
    publishedAt: "2025-12-28",
  },
  {
    id: "3",
    title: "Lessons from Building in Public",
    slug: "building-in-public",
    excerpt: "Reflections on sharing the creative process openly—what works, what doesn't, and why it matters.",
    content: "",
    coverImage: "/assets/blog3.jpg",
    tags: ["Career", "Growth"],
    publishedAt: "2025-11-10",
  },
];

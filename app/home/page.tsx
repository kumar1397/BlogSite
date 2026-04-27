import Header from "@/components/Header";
import HeroSection from "@/app/heroPage/page";
import ProjectSection from "@/components/ProjectSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { QuickLinks } from "@/components/QuickLinks";
export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(oklch(0.18_0.015_60_/_0.06)_1px,transparent_1px)] [background-size:4px_4px]">
      <Header />
      <main>
        <HeroSection />
        <QuickLinks/>
        <BlogSection />
        <ProjectSection />
      </main>
      <Footer />
    </div>
  );
};

// import {sanityClient} from "@/lib/sanity"
// import {postsQuery} from "@/lib/queries"

// export default async function TestPage() {
//   const posts = await sanityClient.fetch(postsQuery)

//   return (
//     <div style={{padding: 40}}>
//       <h1>Sanity Connection Test</h1>
//       <pre>{JSON.stringify(posts, null, 2)}</pre>
//     </div>
//   )
// }

import Header from "@/components/Header";
import HeroSection from "@/app/heroPage/page";
import ProjectSection from "@/components/ProjectSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/portfolioSection";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProjectSection />
        <BlogSection />
        <PortfolioSection />
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

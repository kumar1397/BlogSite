import Header from "@/components/Header";
import HeroSection from "@/app/heroPage/page";
import ProjectSection from "@/components/ProjectSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProjectSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};


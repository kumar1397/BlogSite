import Header from "@/components/Header";
import HeroSection from "@/app/heroPage/page";
import ProjectSection from "@/app/projects/page";
import BlogSection from "@/app/blogs/page";
import Footer from "@/components/Footer";

const Index = () => {
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

export default Index;

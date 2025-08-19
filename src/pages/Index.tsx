import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { CategoryGrid } from "@/components/ui/category-grid";
import { FeaturedProducts } from "@/components/ui/featured-products";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-luxe">
      <Navigation />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import fashionImage from "@/assets/category-fashion.jpg";
import electronicsImage from "@/assets/category-electronics.jpg";
import homeImage from "@/assets/category-home.jpg";

const categories = [
  {
    id: 1,
    name: "Mode & Beauté",
    description: "Collections exclusives et tendances",
    image: fashionImage,
    products: "2,500+ produits",
    featured: true
  },
  {
    id: 2,
    name: "Électronique",
    description: "Technologie de pointe",
    image: electronicsImage,
    products: "1,200+ produits",
    featured: false
  },
  {
    id: 3,
    name: "Maison & Jardin",
    description: "Design d'intérieur raffiné",
    image: homeImage,
    products: "3,100+ produits",
    featured: false
  },
  {
    id: 4,
    name: "Sport & Loisirs",
    description: "Équipements premium",
    image: fashionImage, // Placeholder
    products: "800+ produits",
    featured: false
  },
  {
    id: 5,
    name: "Bijoux & Montres",
    description: "Créations d'exception",
    image: electronicsImage, // Placeholder
    products: "600+ produits",
    featured: false
  },
  {
    id: 6,
    name: "Art & Collection",
    description: "Pièces uniques",
    image: homeImage, // Placeholder
    products: "300+ produits",
    featured: false
  }
];

export function CategoryGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nos <span className="bg-gradient-primary bg-clip-text text-transparent">Catégories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explorez notre large gamme de produits soigneusement sélectionnés 
            dans chaque catégorie pour répondre à tous vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id}
              className={`group cursor-pointer border-0 shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden ${
                category.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.name}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    category.featured ? 'h-80 lg:h-96' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-secondary opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Badge for featured */}
                {category.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Vedette
                  </div>
                )}
              </div>

              <CardContent className="p-6 relative">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    {category.products}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/20 hover:border-primary hover:bg-primary/5 transition-all"
          >
            Voir Toutes les Catégories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
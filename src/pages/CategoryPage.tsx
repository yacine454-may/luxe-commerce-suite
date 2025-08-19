import { useParams } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Filter, Grid, List } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const categoryData = {
  "mode": {
    name: "Mode & Beauté",
    description: "Collections exclusives et tendances pour un style raffiné",
    products: [
      { id: 1, name: "Robe Cocktail Élégante", price: "299€", originalPrice: "399€", rating: 4.8, reviews: 64, image: "/placeholder.svg", badge: "Promo" },
      { id: 2, name: "Costume Sur Mesure", price: "899€", rating: 4.9, reviews: 32, image: "/placeholder.svg", badge: "Premium" },
      { id: 3, name: "Sac Designer Limited", price: "1,299€", rating: 4.7, reviews: 128, image: "/placeholder.svg", badge: "Exclusif" },
      { id: 4, name: "Chaussures Cuir Italien", price: "449€", originalPrice: "599€", rating: 4.6, reviews: 89, image: "/placeholder.svg", badge: "Bestseller" }
    ]
  },
  "electronique": {
    name: "Électronique",
    description: "Technologies de pointe et innovations premium",
    products: [
      { id: 5, name: "Smartphone Pro Max", price: "1,199€", rating: 4.8, reviews: 256, image: "/placeholder.svg", badge: "Nouveau" },
      { id: 6, name: "Laptop Gaming Elite", price: "2,499€", originalPrice: "2,999€", rating: 4.9, reviews: 78, image: "/placeholder.svg", badge: "Promo" },
      { id: 7, name: "Casque Audio Premium", price: "599€", rating: 4.7, reviews: 145, image: "/placeholder.svg", badge: "Bestseller" },
      { id: 8, name: "Montre Connectée Pro", price: "799€", rating: 4.8, reviews: 203, image: "/placeholder.svg", badge: "Premium" }
    ]
  },
  "maison": {
    name: "Maison & Jardin",
    description: "Design d'intérieur et décoration haut de gamme",
    products: [
      { id: 9, name: "Canapé Design Italien", price: "3,299€", rating: 4.9, reviews: 45, image: "/placeholder.svg", badge: "Premium" },
      { id: 10, name: "Table Bois Massif", price: "1,899€", originalPrice: "2,299€", rating: 4.7, reviews: 67, image: "/placeholder.svg", badge: "Promo" },
      { id: 11, name: "Luminaire Designer", price: "899€", rating: 4.8, reviews: 134, image: "/placeholder.svg", badge: "Exclusif" },
      { id: 12, name: "Tapis Persan Authentique", price: "2,199€", rating: 4.6, reviews: 89, image: "/placeholder.svg", badge: "Artisanal" }
    ]
  }
};

export default function CategoryPage() {
  const { category } = useParams();
  const { toast } = useToast();
  
  const currentCategory = categoryData[category as keyof typeof categoryData];
  
  if (!currentCategory) {
    return <div>Catégorie introuvable</div>;
  }

  const addToCart = (productName: string) => {
    toast({
      title: "Produit ajouté au panier",
      description: `${productName} a été ajouté à votre panier`,
    });
  };

  const toggleFavorite = (productName: string) => {
    toast({
      title: "Favoris mis à jour",
      description: `${productName} ajouté aux favoris`,
    });
  };

  return (
    <div className="min-h-screen bg-background font-luxe">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            {currentCategory.name}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </div>
      </div>

      {/* Filters & Controls */}
      <div className="bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtres
              </Button>
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Plus récents</SelectItem>
                  <SelectItem value="price-low">Prix croissant</SelectItem>
                  <SelectItem value="price-high">Prix décroissant</SelectItem>
                  <SelectItem value="rating">Mieux notés</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentCategory.products.map((product) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-card hover:shadow-elegant transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="bg-primary">
                    {product.badge}
                  </Badge>
                </div>

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => toggleFavorite(product.name)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    onClick={() => addToCart(product.name)}
                    className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    size="sm"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Ajouter au Panier
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-primary fill-current' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
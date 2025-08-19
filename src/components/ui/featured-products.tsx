import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredProducts = [
  {
    id: 1,
    name: "Montre Automatique Prestige",
    price: "2,499€",
    originalPrice: "3,200€",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    isNew: false
  },
  {
    id: 2,
    name: "Sac à Main Cuir Italian",
    price: "899€",
    originalPrice: null,
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 89,
    badge: "Nouveauté",
    isNew: true
  },
  {
    id: 3,
    name: "Écouteurs Wireless Pro",
    price: "349€",
    originalPrice: "450€",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 256,
    badge: "Promo",
    isNew: false
  },
  {
    id: 4,
    name: "Parfum Essence Rare",
    price: "180€",
    originalPrice: null,
    image: "/placeholder.svg",
    rating: 4.6,
    reviews: 78,
    badge: "Exclusif",
    isNew: false
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Produits <span className="bg-gradient-primary bg-clip-text text-transparent">Vedettes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez une sélection exclusive de nos produits les plus appréciés, 
            choisis pour leur qualité exceptionnelle et leur style intemporel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id}
              className="group cursor-pointer border-0 shadow-card hover:shadow-elegant transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={product.isNew ? "default" : "secondary"}
                    className={product.isNew ? "bg-primary" : "bg-secondary"}
                  >
                    {product.badge}
                  </Badge>
                </div>

                {/* Heart Icon */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button 
                    className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    size="sm"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Ajouter au Panier
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
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

                {/* Price */}
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
                  
                  {product.originalPrice && (
                    <Badge variant="destructive" className="text-xs">
                      -{Math.round(((parseFloat(product.originalPrice.replace(/[€,]/g, '')) - parseFloat(product.price.replace(/[€,]/g, ''))) / parseFloat(product.originalPrice.replace(/[€,]/g, ''))) * 100)}%
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-elegant transition-all"
          >
            Voir Tous les Produits
          </Button>
        </div>
      </div>
    </section>
  );
}
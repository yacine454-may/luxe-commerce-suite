import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, ShoppingCart, Plus, Minus, Truck, Shield, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProductPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: id,
    name: "Montre Automatique Prestige",
    price: "2,499€",
    originalPrice: "3,200€",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    description: "Une montre d'exception alliant tradition horlogère et innovation contemporaine. Mouvement automatique suisse, boîtier en acier inoxydable 316L, cadran bleu soleil avec index appliqués.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    features: [
      "Mouvement automatique Swiss Made",
      "Réserve de marche 42h",
      "Étanche 100m",
      "Verre saphir anti-reflet",
      "Bracelet cuir italien",
      "Garantie internationale 5 ans"
    ],
    specifications: {
      "Marque": "LuxeTime",
      "Modèle": "Prestige Automatic",
      "Mouvement": "Swiss Automatic",
      "Diamètre": "42mm",
      "Épaisseur": "12mm",
      "Matériau": "Acier inoxydable 316L",
      "Cadran": "Bleu soleil",
      "Étanchéité": "10 ATM (100m)"
    }
  };

  const addToCart = () => {
    toast({
      title: "Produit ajouté au panier",
      description: `${quantity} x ${product.name} ajouté(s) à votre panier`,
    });
  };

  const addToFavorites = () => {
    toast({
      title: "Ajouté aux favoris",
      description: `${product.name} a été ajouté à vos favoris`,
    });
  };

  return (
    <div className="min-h-screen bg-background font-luxe">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-muted'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-primary">{product.badge}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-primary fill-current' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-muted-foreground">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                <Badge variant="destructive">-22%</Badge>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            {/* Features */}
            <div>
              <h3 className="font-semibold mb-4">Caractéristiques principales</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantité :</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button onClick={addToCart} className="flex-1 bg-primary hover:bg-primary-glow">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Ajouter au Panier
                </Button>
                <Button variant="outline" onClick={addToFavorites}>
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Service Icons */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Livraison Gratuite</p>
                <p className="text-xs text-muted-foreground">Dès 100€</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Garantie 5 ans</p>
                <p className="text-xs text-muted-foreground">Internationale</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Retour 30j</p>
                <p className="text-xs text-muted-foreground">Gratuit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Spécifications</TabsTrigger>
              <TabsTrigger value="reviews">Avis ({product.reviews})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Description détaillée</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cette montre automatique représente l'excellence de l'horlogerie suisse moderne. 
                    Chaque détail a été pensé pour allier performance technique et élégance intemporelle.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Le mouvement automatique Swiss Made garantit une précision exceptionnelle, 
                    tandis que le boîtier en acier inoxydable 316L assure une résistance optimale. 
                    Le cadran bleu soleil capte la lumière de façon unique, créant des reflets subtils qui évoluent selon l'angle de vue.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Spécifications techniques</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b pb-2">
                        <span className="font-medium">{key} :</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Section des avis à venir...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}
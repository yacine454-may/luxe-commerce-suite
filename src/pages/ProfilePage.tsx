import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { User, Package, Heart, Settings, Star, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  const userInfo = {
    name: "Marie Dubois",
    email: "marie.dubois@email.com",
    phone: "+33 6 12 34 56 78",
    address: "123 Avenue des Champs-Élysées, 75008 Paris",
    memberSince: "Membre depuis Mars 2023",
    totalOrders: 12,
    totalSpent: "8,547€"
  };

  const orders = [
    {
      id: "#LX-2024-001",
      date: "15 Jan 2024",
      status: "Livré",
      total: "2,499€",
      items: ["Montre Automatique Prestige", "Boîtier Cuir Premium"]
    },
    {
      id: "#LX-2024-002",
      date: "08 Jan 2024",
      status: "En transit",
      total: "899€",
      items: ["Sac à Main Cuir Italian"]
    },
    {
      id: "#LX-2024-003",
      date: "22 Déc 2023",
      status: "Livré",
      total: "1,248€",
      items: ["Écouteurs Wireless Pro", "Étui Premium"]
    }
  ];

  const favorites = [
    {
      id: 1,
      name: "Parfum Essence Rare",
      price: "180€",
      image: "/placeholder.svg",
      availability: "En stock"
    },
    {
      id: 2,
      name: "Collier Or 18k",
      price: "1,299€",
      originalPrice: "1,599€",
      image: "/placeholder.svg",
      availability: "En stock"
    },
    {
      id: 3,
      name: "Montre Sport Edition",
      price: "799€",
      image: "/placeholder.svg",
      availability: "Bientôt disponible"
    }
  ];

  const saveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profil mis à jour",
      description: "Vos informations ont été sauvegardées avec succès",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Livré": return "bg-green-500";
      case "En transit": return "bg-blue-500";
      case "En préparation": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background font-luxe">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{userInfo.name}</h1>
            <p className="text-muted-foreground">{userInfo.memberSince}</p>
          </div>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="orders">Commandes</TabsTrigger>
            <TabsTrigger value="favorites">Favoris</TabsTrigger>
            <TabsTrigger value="settings">Paramètres</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 shadow-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Informations personnelles</CardTitle>
                  <Button 
                    variant={isEditing ? "default" : "outline"}
                    onClick={() => isEditing ? saveProfile() : setIsEditing(true)}
                  >
                    {isEditing ? "Sauvegarder" : "Modifier"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet</Label>
                      <Input 
                        id="name"
                        value={userInfo.name}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-muted" : ""}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        value={userInfo.email}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-muted" : ""}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input 
                      id="phone"
                      value={userInfo.phone}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Adresse</Label>
                    <Input 
                      id="address"
                      value={userInfo.address}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-muted" : ""}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Statistiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {userInfo.totalOrders}
                    </div>
                    <div className="text-sm text-muted-foreground">Commandes totales</div>
                  </div>
                  
                  <Separator />
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {userInfo.totalSpent}
                    </div>
                    <div className="text-sm text-muted-foreground">Total dépensé</div>
                  </div>
                  
                  <Separator />
                  
                  <div className="text-center">
                    <Badge className="bg-gradient-primary text-white">
                      Membre VIP
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      Profitez d'avantages exclusifs
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="mt-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Historique des commandes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Package className="h-5 w-5 text-primary" />
                            <span className="font-semibold">{order.id}</span>
                          </div>
                          <Badge className={`text-white ${getStatusColor(order.status)}`}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{order.total}</div>
                          <div className="text-sm text-muted-foreground">{order.date}</div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-muted-foreground">
                        {order.items.join(", ")}
                      </div>
                      
                      <div className="flex justify-end mt-3">
                        <Button variant="outline" size="sm">
                          Voir détails
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="mt-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Mes favoris</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favorites.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="font-semibold mb-2">{item.name}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-primary">{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {item.originalPrice}
                            </span>
                          )}
                        </div>
                        <Badge variant={item.availability === "En stock" ? "default" : "secondary"}>
                          {item.availability}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1 bg-primary hover:bg-primary-glow">
                          Ajouter au panier
                        </Button>
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Préférences de notification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Nouvelles offres</span>
                    <Button variant="outline" size="sm">Activé</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Suivi de commande</span>
                    <Button variant="outline" size="sm">Activé</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Newsletter</span>
                    <Button variant="outline" size="sm">Activé</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Sécurité</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    Changer le mot de passe
                  </Button>
                  <Button className="w-full" variant="outline">
                    Authentification à deux facteurs
                  </Button>
                  <Button className="w-full" variant="outline">
                    Gérer les sessions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
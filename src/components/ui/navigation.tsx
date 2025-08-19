import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ShoppingBag, 
  User, 
  Menu, 
  X,
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { name: "Mode & Beauté", subcategories: ["Vêtements", "Chaussures", "Bijoux", "Parfums"] },
  { name: "Électronique", subcategories: ["Smartphones", "Ordinateurs", "Audio", "Photo"] },
  { name: "Maison & Jardin", subcategories: ["Mobilier", "Décoration", "Jardin", "Cuisine"] },
  { name: "Sport & Loisirs", subcategories: ["Fitness", "Outdoor", "Gaming", "Livres"] },
  { name: "Auto & Moto", subcategories: ["Voitures", "Motos", "Accessoires", "Pièces"] },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              LuxeCommerce
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Rechercher des produits..." 
                className="pl-10 bg-muted/50 border-0 focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Desktop Categories */}
          <div className="hidden lg:flex items-center space-x-1">
            {categories.slice(0, 3).map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm">
                    {category.name}
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-card/95 backdrop-blur-sm border shadow-card">
                  {category.subcategories.map((sub) => (
                    <DropdownMenuItem key={sub} className="cursor-pointer">
                      {sub}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Rechercher..." 
              className="pl-10 bg-muted/50 border-0"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {categories.map((category) => (
                <div key={category.name} className="space-y-1">
                  <button className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-muted/50 rounded-md">
                    {category.name}
                  </button>
                  <div className="pl-4 space-y-1">
                    {category.subcategories.map((sub) => (
                      <button
                        key={sub}
                        className="w-full text-left px-3 py-1 text-sm text-muted-foreground hover:bg-muted/30 rounded-md"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
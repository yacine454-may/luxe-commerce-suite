import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Truck
} from "lucide-react";

const footerLinks = {
  "Boutique": ["Toutes les Catégories", "Nouveautés", "Meilleures Ventes", "Promotions", "Marques"],
  "Service Client": ["Aide & Support", "Livraison", "Retours", "Garantie", "Contact"],
  "Entreprise": ["À Propos", "Carrières", "Presse", "Partenaires", "Investisseurs"],
  "Légal": ["CGV", "Confidentialité", "Cookies", "Mentions Légales", "Plan du Site"]
};

const features = [
  { icon: Truck, title: "Livraison Gratuite", description: "Dès 100€ d'achat" },
  { icon: Shield, title: "Garantie Premium", description: "Produits certifiés" },
  { icon: CreditCard, title: "Paiement Sécurisé", description: "SSL & 3D Secure" }
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Features Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-secondary-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              LuxeCommerce
            </h3>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Votre destination premium pour les produits d'exception. 
              Nous sélectionnons avec soin chaque article pour vous offrir 
              le meilleur du luxe et de l'innovation.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold">Newsletter Exclusive</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Votre email..." 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-primary hover:bg-primary-glow">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-secondary-foreground/60">
                Recevez nos offres exclusives et nouveautés
              </p>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>contact@luxecommerce.fr</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Paris, France</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-secondary-foreground/60">
          <p>© 2024 LuxeCommerce. Tous droits réservés. Développé avec passion pour l'excellence.</p>
        </div>
      </div>
    </footer>
  );
}
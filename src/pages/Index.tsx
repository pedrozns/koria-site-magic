import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Wand2, Rocket, PiggyBank, Sparkles, Zap, CheckCircle2, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    email: "",
    sector: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToForm = () => {
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.businessName || !formData.phone || !formData.email || !formData.sector || !formData.description) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate backend call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Félicitations ! Votre site est en cours de création. Vous recevrez un lien par email d'ici quelques minutes.");
    
    // Reset form
    setFormData({
      businessName: "",
      phone: "",
      email: "",
      sector: "",
      description: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Koria
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors">
                Comment ça marche ?
              </a>
              <a href="#benefits" className="text-foreground/70 hover:text-primary transition-colors">
                Avantages
              </a>
              <a href="#form-section" className="text-foreground/70 hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            <Button onClick={scrollToForm} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button">
              Créer mon site
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Nouvelle génération de création web</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Votre site web professionnel,{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                créé en 2 minutes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Décrivez simplement votre activité. Koria transforme vos idées en un site web performant. 
              La solution simple, rapide et abordable pour les entrepreneurs en Afrique.
            </p>

            <Button 
              onClick={scrollToForm} 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button text-lg px-8 py-6 h-auto"
            >
              Commencez gratuitement
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Pourquoi choisir Koria ?
              </h2>
              <p className="text-xl text-muted-foreground">
                La solution qui s'adapte à vos besoins
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-card shadow-card border-0 hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Wand2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Aucune compétence technique requise</h3>
                <p className="text-muted-foreground text-lg">
                  Si vous savez écrire un message, vous savez créer un site avec Koria.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-card shadow-card border-0 hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">En ligne en quelques minutes</h3>
                <p className="text-muted-foreground text-lg">
                  Obtenez un site web fonctionnel et professionnel plus vite qu'un café.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-card shadow-card border-0 hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <PiggyBank className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Un prix imbattable</h3>
                <p className="text-muted-foreground text-lg">
                  Développez votre présence en ligne sans vous ruiner.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-xl text-muted-foreground">
                3 étapes simples pour votre site web
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Décrivez votre business</h3>
                  <p className="text-muted-foreground text-lg">
                    Remplissez un formulaire simple avec les informations sur votre activité, vos services et vos objectifs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Notre IA génère votre site</h3>
                  <p className="text-muted-foreground text-lg">
                    Notre intelligence artificielle crée un site web professionnel adapté à votre secteur d'activité en quelques minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Publiez et partagez !</h3>
                  <p className="text-muted-foreground text-lg">
                    Votre site est prêt ! Partagez-le avec vos clients et développez votre activité en ligne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Lancez votre projet dès maintenant !
              </h2>
              <p className="text-xl text-muted-foreground">
                Remplissez le formulaire et recevez votre site par email
              </p>
            </div>

            <Card className="p-8 bg-card shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                    Nom de votre business *
                  </label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="bg-background"
                    placeholder="Ex: Restaurant Le Palmier"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Numéro de téléphone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background"
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Adresse email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="sector" className="block text-sm font-medium mb-2">
                    Secteur d'activité *
                  </label>
                  <Input
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    required
                    className="bg-background"
                    placeholder="Ex: Restauration, Commerce, Services..."
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">
                    Décrivez votre activité et ce que vous proposez *
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="bg-background min-h-[120px]"
                    placeholder="Décrivez en quelques mots votre activité, vos services, et ce qui vous rend unique..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-button h-12 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 w-5 h-5" />
                      Générer mon site web
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Koria
                </span>
              </div>
              <p className="text-muted-foreground">
                La solution No-Code pour créer votre site web professionnel en quelques minutes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                    Comment ça marche
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
                    Avantages
                  </a>
                </li>
                <li>
                  <a href="#form-section" className="text-muted-foreground hover:text-primary transition-colors">
                    Commencer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Conditions d'utilisation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Koria. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

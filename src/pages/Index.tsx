import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Wand2, Rocket, Sparkles, Zap, CheckCircle2, Facebook, Twitter, Linkedin, Instagram, Mail, MessageSquare, Smartphone, CreditCard, Bot, Clock } from "lucide-react";
import { toast } from "sonner";
import koriaLogo from "@/assets/koria-logo.png";

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
            <img src={koriaLogo} alt="Koria" className="h-8" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors">
                Comment ça marche
              </a>
              <a href="#roadmap" className="text-foreground/70 hover:text-primary transition-colors">
                Roadmap
              </a>
              <a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">
                FAQ
              </a>
            </div>

            <Button onClick={scrollToForm} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button">
              Inscription Bêta
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Votre site web professionnel est prêt.{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Il ne manque plus que votre histoire.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Koria est la première plateforme qui crée votre site internet en quelques minutes grâce à l'IA, 
              simplement en décrivant votre activité. Conçu pour les entrepreneurs d'Afrique de l'Ouest.
            </p>

            <Button 
              onClick={scrollToForm} 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button text-lg px-8 py-6 h-auto"
            >
              Recevoir mon site Bêta gratuitement
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Aucune carte de crédit, aucune compétence technique requise.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Visual Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              De l'idée au site web, en un clin d'œil.
            </h2>
            
            <div className="relative bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Wand2 className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    "Je vends des jus de fruits frais à Cotonou..."
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="flex items-center gap-2">
                    <Zap className="w-8 h-8 text-accent animate-pulse" />
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                    <Rocket className="w-8 h-8 text-accent" />
                  </div>
                  <p className="font-semibold">
                    Votre site web professionnel est prêt ! 🎉
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-lg text-foreground mb-8 font-medium">
              Ils nous font confiance pour construire le futur du commerce en ligne
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="text-2xl font-bold text-foreground/60 hover:text-foreground transition-colors">
                Google
              </div>
              <div className="text-2xl font-bold text-foreground/60 hover:text-foreground transition-colors">
                Vercel
              </div>
              <div className="text-2xl font-bold text-foreground/60 hover:text-foreground transition-colors">
                OpenAI
              </div>
              <div className="text-2xl font-bold text-foreground/60 hover:text-foreground transition-colors">
                Microsoft
              </div>
              <div className="text-2xl font-bold text-foreground/60 hover:text-foreground transition-colors col-span-2 md:col-span-1">
                AWS
              </div>
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
                Recevez un aperçu de votre futur site en 3 étapes simples
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-card shadow-card border-0 hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Wand2 className="w-7 h-7 text-primary" />
                </div>
                <div className="text-center mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full font-bold mb-4">
                    1
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Inscrivez-vous à la Bêta</h3>
                <p className="text-muted-foreground text-center">
                  Remplissez le formulaire avec votre email et quelques informations sur votre activité. 
                  C'est simple, rapide et 100% gratuit.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-card shadow-card border-0 hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-secondary" />
                </div>
                <div className="text-center mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-secondary text-secondary-foreground rounded-full font-bold mb-4">
                    2
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Décrivez votre business</h3>
                <p className="text-muted-foreground text-center">
                  Dites-nous qui vous êtes, ce que vous proposez, et comment vous contacter. 
                  Notre IA se charge du reste.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-card shadow-card border-0 hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <div className="text-center mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-accent text-accent-foreground rounded-full font-bold mb-4">
                    3
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Recevez votre site par mail</h3>
                <p className="text-muted-foreground text-center">
                  En quelques minutes, recevez un lien vers une première version de votre site web, 
                  prêt à impressionner vos futurs clients.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Feature Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Votre présence digitale, créée sur mesure par l'IA
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Oubliez la complexité technique et les coûts élevés. Koria analyse la description de votre business 
                  pour générer automatiquement un design professionnel, des textes pertinents et une structure optimisée 
                  pour la conversion.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Vous obtenez une vitrine en ligne qui reflète la qualité de votre travail et vous permet de développer 
                  votre activité sans effort.
                </p>
                <Button 
                  onClick={scrollToForm}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
                >
                  Je décris mon business maintenant
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 bg-gradient-card shadow-card border-0">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Design professionnel</h4>
                  <p className="text-sm text-muted-foreground">Adapté à votre secteur</p>
                </Card>
                <Card className="p-6 bg-gradient-card shadow-card border-0">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Contenu optimisé</h4>
                  <p className="text-sm text-muted-foreground">Textes convaincants</p>
                </Card>
                <Card className="p-6 bg-gradient-card shadow-card border-0">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Mobile-first</h4>
                  <p className="text-sm text-muted-foreground">Parfait sur tous les écrans</p>
                </Card>
                <Card className="p-6 bg-gradient-card shadow-card border-0">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Rapide</h4>
                  <p className="text-sm text-muted-foreground">Prêt en minutes</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Et ce n'est que le début. Voici ce qui arrive bientôt.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-card shadow-card border-0 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Clock className="w-4 h-4" />
                  Bientôt disponible
                </div>
                <h3 className="text-2xl font-bold mb-4">L'Intégration Native Mobile Money</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Encaissez vos paiements, sans friction. Bientôt, Koria intégrera les solutions de paiement mobile 
                  les plus utilisées (MTN, Moov, Orange Money...).
                </p>
                <p className="text-muted-foreground">
                  Vos clients pourront vous payer directement depuis votre site, de la manière la plus simple et 
                  la plus sécurisée pour eux.
                </p>
              </Card>

              <Card className="p-8 bg-gradient-card shadow-card border-0 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-secondary" />
                </div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Clock className="w-4 h-4" />
                  Bientôt disponible
                </div>
                <h3 className="text-2xl font-bold mb-4">Votre Agent Conversationnel WhatsApp 24/7</h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Ne manquez plus jamais une vente. Un agent intelligent alimenté par l'IA sera disponible en continu 
                  sur WhatsApp pour répondre aux questions de vos clients, prendre leurs commandes et les assister.
                </p>
                <p className="text-muted-foreground">
                  Même lorsque vous dormez, votre business continue de tourner.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Vos questions, nos réponses
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Combien coûte la Bêta ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  La Bêta est entièrement gratuite ! C'est notre façon de vous faire découvrir la puissance de Koria. 
                  Il n'y a aucun engagement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  En quoi Koria est-il différent de Wix ou WordPress ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Koria est conçu spécifiquement pour les réalités du marché ouest-africain. Notre différence ? 
                  Une simplicité radicale (création via IA), et des intégrations natives futures (Mobile Money, WhatsApp) 
                  que vous ne trouverez nulle part ailleurs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Le site que je reçois en Bêta est-il définitif ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  C'est un excellent aperçu de ce que notre IA peut faire. Dans la version finale de Koria, 
                  vous aurez un contrôle total pour personnaliser chaque aspect de votre site. Considérez-le comme 
                  une base de travail solide et professionnelle.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Quand la version complète sera-t-elle disponible ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Nous travaillons activement pour lancer la version complète dans les prochains mois. 
                  En vous inscrivant à la Bêta, vous serez le premier informé et bénéficierez d'une offre de 
                  lancement exclusive.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Prêt à donner à votre business la visibilité qu'il mérite ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Rejoignez des centaines d'autres entrepreneurs et soyez parmi les premiers à construire 
              votre avenir en ligne avec Koria.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button text-lg px-8 py-6 h-auto"
            >
              S'inscrire à la Bêta et recevoir mon site
              <Rocket className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Inscrivez-vous à la Bêta
              </h2>
              <p className="text-xl text-muted-foreground">
                Recevez votre premier site généré par IA gratuitement
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
                      Création de votre site...
                    </>
                  ) : (
                    <>
                      <Rocket className="mr-2 w-5 h-5" />
                      Recevoir mon site Bêta gratuit
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-center text-muted-foreground mt-4">
                  En vous inscrivant, vous acceptez de recevoir des emails de Koria. 
                  Vous pourrez vous désabonner à tout moment.
                </p>
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
              <img src={koriaLogo} alt="Koria" className="h-7 mb-4" />
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

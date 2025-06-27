
import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Heart, BookOpen, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Rassembler les gens, les idées et les actions de façon durable",
      subtitle: "Vision LUCODER",
      description: "Depuis 1996, nous œuvrons pour le développement rural et le changement positif",
      image: "/placeholder.svg",
      cta: "Découvrir nos actions"
    },
    {
      title: "Autonomisation des communautés",
      subtitle: "Notre mission",
      description: "Nous renforçons les capacités locales pour un développement durable",
      image: "/placeholder.svg",
      cta: "Voir nos projets"
    },
    {
      title: "Ensemble pour l'avenir",
      subtitle: "Rejoignez-nous",
      description: "Devenez partenaire de nos actions pour un impact durable",
      image: "/placeholder.svg",
      cta: "Faire un don"
    }
  ];

  const domains = [
    {
      title: "Autonomisation",
      description: "Renforcement des capacités locales",
      icon: "👥",
      color: "bg-blue-50"
    },
    {
      title: "Entrepreneuriat",
      description: "Développement économique local",
      icon: "💼",
      color: "bg-green-50"
    },
    {
      title: "Santé & Nutrition",
      description: "Amélioration des conditions sanitaires",
      icon: "🏥",
      color: "bg-blue-50"
    },
    {
      title: "Sécurité Alimentaire",
      description: "Lutte contre la malnutrition",
      icon: "🌾",
      color: "bg-green-50"
    },
    {
      title: "Droits Humains",
      description: "Protection et promotion des droits",
      icon: "⚖️",
      color: "bg-blue-50"
    },
    {
      title: "Jeunesse",
      description: "Accompagnement des jeunes",
      icon: "🎓",
      color: "bg-green-50"
    }
  ];

  const projects = [
    {
      title: "Projet d'autonomisation des femmes",
      location: "Goma, Nord-Kivu",
      date: "2024",
      beneficiaries: "500 femmes",
      image: "/placeholder.svg"
    },
    {
      title: "Programme de sécurité alimentaire",
      location: "Territoire de Masisi",
      date: "2024",
      beneficiaries: "1,200 familles",
      image: "/placeholder.svg"
    },
    {
      title: "Formation en entrepreneuriat",
      location: "Bukavu, Sud-Kivu",
      date: "2023",
      beneficiaries: "300 jeunes",
      image: "/placeholder.svg"
    }
  ];

  const news = [
    {
      title: "Lancement du nouveau programme de formation",
      excerpt: "Un nouveau programme de formation professionnelle pour les jeunes...",
      date: "15 Décembre 2024",
      image: "/placeholder.svg"
    },
    {
      title: "Partenariat avec l'UNICEF",
      excerpt: "Signature d'un accord de partenariat pour l'éducation...",
      date: "10 Décembre 2024",
      image: "/placeholder.svg"
    },
    {
      title: "Rapport annuel 2024",
      excerpt: "Découvrez nos réalisations et l'impact de nos actions...",
      date: "5 Décembre 2024",
      image: "/placeholder.svg"
    }
  ];

  const partners = [
    { name: "UNICEF", logo: "/placeholder.svg" },
    { name: "OMS", logo: "/placeholder.svg" },
    { name: "USAID", logo: "/placeholder.svg" },
    { name: "Union Européenne", logo: "/placeholder.svg" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/placeholder.svg" alt="LUCODER" className="h-10 w-auto" />
              <span className="ml-3 text-xl font-bold text-[#0056b3]">LUCODER</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-[#0056b3] font-medium">Accueil</a>
              <a href="/a-propos" className="text-gray-700 hover:text-[#0056b3] transition-colors">À propos</a>
              <a href="/domaines-action" className="text-gray-700 hover:text-[#0056b3] transition-colors">Domaines d'action</a>
              <a href="/projets" className="text-gray-700 hover:text-[#0056b3] transition-colors">Projets</a>
              <a href="/actualites" className="text-gray-700 hover:text-[#0056b3] transition-colors">Actualités</a>
              <a href="/contact" className="text-gray-700 hover:text-[#0056b3] transition-colors">Contact</a>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white">
                Bénévolat
              </Button>
              <Button size="sm" className="bg-[#7cc576] hover:bg-[#6bb565] text-white">
                Faire un don
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0056b3]/80 to-[#0056b3]/60"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-6">
                <p className="text-lg mb-2 text-[#7cc576]">{slide.subtitle}</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl mb-8 opacity-90">{slide.description}</p>
                <Button size="lg" className="bg-[#7cc576] hover:bg-[#6bb565] text-white px-8 py-3 text-lg">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Qui sommes-nous ?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Créée le 31 janvier 1996 à Goma, la LUCODER (Lutte pour le Changement et le Développement Rural) 
                est une organisation qui œuvre pour rassembler les gens, les idées et les actions de façon durable.
              </p>
              <p className="text-gray-600 mb-8">
                Depuis plus de 25 ans, nous accompagnons les communautés rurales dans leur développement 
                à travers des programmes d'autonomisation, d'entrepreneuriat, de santé et de sécurité alimentaire.
              </p>
              <Button className="bg-[#0056b3] hover:bg-[#004494] text-white">
                En savoir plus
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="LUCODER en action"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#7cc576] text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos domaines d'action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous intervenons dans plusieurs secteurs clés pour un développement durable et inclusif
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardHeader className={`${domain.color} rounded-t-lg`}>
                  <div className="text-4xl mb-3">{domain.icon}</div>
                  <CardTitle className="text-[#0056b3]">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-gray-600">
                    {domain.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos projets récents
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez quelques-unes de nos réalisations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#7cc576] text-white px-3 py-1 rounded-full text-sm">
                    {project.date}
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-[#0056b3] mb-3">{project.title}</CardTitle>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {project.beneficiaries}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white">
              Voir tous les projets
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Actualités
            </h2>
            <p className="text-lg text-gray-600">
              Restez informés de nos dernières activités
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <CardTitle className="text-[#0056b3] mb-3 hover:text-[#004494] cursor-pointer transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <Button variant="ghost" className="text-[#0056b3] hover:text-[#004494] p-0">
                    Lire la suite
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white">
              Toutes les actualités
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0056b3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Rejoignez notre mission
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Ensemble, nous pouvons créer un impact durable dans les communautés rurales. 
                Votre soutien nous permet de continuer nos actions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#7cc576] hover:bg-[#6bb565] text-white">
                  <Heart className="h-5 w-5 mr-2" />
                  Faire un don
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0056b3]">
                  <Users className="h-5 w-5 mr-2" />
                  Devenir bénévole
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#7cc576]">1000+</div>
                  <div className="text-sm opacity-90">Familles aidées</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#7cc576]">50+</div>
                  <div className="text-sm opacity-90">Projets réalisés</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#7cc576]">25+</div>
                  <div className="text-sm opacity-90">Années d'expérience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#7cc576]">10+</div>
                  <div className="text-sm opacity-90">Partenaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nos partenaires
            </h3>
            <p className="text-gray-600">
              Ils nous font confiance et soutiennent nos actions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 mx-auto mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                />
                <p className="text-sm text-gray-600">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/placeholder.svg" alt="LUCODER" className="h-8 w-auto" />
                <span className="ml-2 text-lg font-bold">LUCODER</span>
              </div>
              <p className="text-gray-400 mb-4">
                Lutte pour le Changement et le Développement Rural depuis 1996
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/a-propos" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="/domaines-action" className="hover:text-white transition-colors">Domaines d'action</a></li>
                <li><a href="/projets" className="hover:text-white transition-colors">Projets</a></li>
                <li><a href="/actualites" className="hover:text-white transition-colors">Actualités</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/publications" className="hover:text-white transition-colors">Publications</a></li>
                <li><a href="/partenaires" className="hover:text-white transition-colors">Partenaires</a></li>
                <li><a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a></li>
                <li><a href="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <p>Goma, Nord-Kivu</p>
                <p>République Démocratique du Congo</p>
                <p>contact@lucoder.org</p>
                <p>+243 XXX XXX XXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LUCODER. Tous droits réservés.</p>
            <p className="mt-2">Fièrement conçu par <span className="text-[#7cc576]">Oredy TECHNOLOGIES</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

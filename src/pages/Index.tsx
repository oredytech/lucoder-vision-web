
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, Heart, BookOpen, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";

interface WordPressPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const fetchRecentPosts = async (): Promise<WordPressPost[]> => {
  const response = await fetch('https://mishapivoicetv.net/wp-json/wp/v2/posts?per_page=3&_embed');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data: wordpressPosts } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: fetchRecentPosts,
  });

  const slides = [
    {
      title: "Rassembler les gens, les idées et les actions de façon durable",
      subtitle: "Vision LUCODER",
      description: "Depuis 1996, nous œuvrons pour le développement rural et la lutte contre la délinquance",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Découvrir nos actions"
    },
    {
      title: "Autonomisation des communautés",
      subtitle: "Notre mission",
      description: "Nous renforçons les capacités locales pour un développement durable",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Voir nos projets"
    },
    {
      title: "Ensemble pour l'avenir",
      subtitle: "Rejoignez-nous",
      description: "Devenez partenaire de nos actions pour un impact durable",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Faire un don"
    }
  ];

  const domains = [
    {
      title: "Infrastructures et Réhabilitation",
      description: "Réhabilitation de routes agricoles, construction de moulins hydrauliques et amélioration des infrastructures communautaires",
      icon: "🏗️",
      color: "bg-blue-50"
    },
    {
      title: "Santé",
      description: "Amélioration des infrastructures sanitaires et équipement des centres de santé pour une meilleure prise en charge des patients",
      icon: "🏥",
      color: "bg-green-50"
    },
    {
      title: "Cohésion Sociale et Réinsertion",
      description: "Réinsertion socio-économique des jeunes à risques et promotion du vivre ensemble par des activités génératrices de revenus",
      icon: "👥",
      color: "bg-blue-50"
    },
    {
      title: "Sécurité Alimentaire et Agriculture",
      description: "Lutte contre la sous-alimentation par l'agriculture, les activités maraîchères et l'agroforesterie",
      icon: "🌾",
      color: "bg-green-50"
    },
    {
      title: "Lutte contre la Délinquance et l'Exode Rural",
      description: "Prévention de la délinquance juvénile et de l'exode rural par l'amélioration des conditions de vie et opportunités économiques",
      icon: "🎯",
      color: "bg-blue-50"
    },
    {
      title: "Sensibilisation et Lutte contre les Fléaux Sociaux",
      description: "Campagnes de sensibilisation contre l'alcoolisme, la drogue et les maladies, particulièrement en milieu scolaire",
      icon: "📢",
      color: "bg-green-50"
    },
    {
      title: "Protection Environnementale et Reboisement",
      description: "Protection de l'environnement par des projets de reboisement et d'assainissement pour lutter contre le changement climatique",
      icon: "🌱",
      color: "bg-blue-50"
    },
    {
      title: "Développement Durable et Intervention Humanitaire",
      description: "Engagement global pour le développement durable avec capacité de déploiement rapide en situations d'urgence humanitaire",
      icon: "🤝",
      color: "bg-green-50"
    }
  ];

  const projects = [
    {
      title: "Projet d'autonomisation des femmes",
      location: "Goma, Nord-Kivu",
      date: "2024",
      beneficiaries: "500 femmes",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Programme de sécurité alimentaire",
      location: "Territoire de Masisi",
      date: "2024",
      beneficiaries: "1,200 familles",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Formation en entrepreneuriat jeunesse",
      location: "Bukavu, Sud-Kivu",
      date: "2023",
      beneficiaries: "300 jeunes",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const partners = [
    { name: "UNICEF", logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "OMS", logo: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "USAID", logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
    { name: "Union Européenne", logo: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <Layout>
      <div className="overflow-x-hidden">
        {/* Hero Slider */}
        <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#010192]/80 to-[#010192]/60"></div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="text-center text-white max-w-4xl">
                  <p className="text-sm sm:text-lg mb-2 text-[#7cc576]">{slide.subtitle}</p>
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">{slide.description}</p>
                  <Link to="/a-propos">
                    <Button size="lg" className="bg-[#7cc576] hover:bg-[#6bb565] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg">
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-colors"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
          </button>

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Qui sommes-nous ?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Créée le 31 janvier 1996 à Goma, la LUCODER (Lutte Contre la Délinquance et l'Exode Rural) 
                  est une organisation qui œuvre pour rassembler les gens, les idées et les actions de façon durable.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                  Depuis plus de 25 ans, nous accompagnons les communautés rurales dans leur développement 
                  à travers des programmes d'autonomisation, d'entrepreneuriat, de santé et de sécurité alimentaire.
                </p>
                <Link to="/a-propos">
                  <Button className="bg-[#010192] hover:bg-[#010175] text-white text-sm sm:text-base">
                    En savoir plus
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="LUCODER en action"
                  className="rounded-lg shadow-lg w-full h-60 sm:h-80 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#7cc576] text-white p-4 sm:p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold">28+</div>
                    <div className="text-xs sm:text-sm opacity-90">Années d'expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Nos domaines d'action
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Nous intervenons dans plusieurs secteurs clés pour un développement durable et inclusif
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {domains.map((domain, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                  <CardHeader className={`${domain.color} rounded-t-lg p-4`}>
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{domain.icon}</div>
                    <CardTitle className="text-[#010192] text-sm sm:text-base">{domain.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4">
                    <CardDescription className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {domain.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Nos projets récents
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Découvrez quelques-unes de nos réalisations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-40 sm:h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#7cc576] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      {project.date}
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <CardTitle className="text-[#010192] mb-3 text-sm sm:text-base">{project.title}</CardTitle>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                        <span>{project.beneficiaries}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Link to="/projets">
                <Button variant="outline" className="border-[#010192] text-[#010192] hover:bg-[#010192] hover:text-white text-sm sm:text-base">
                  Voir tous les projets
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* News Section - Updated to use WordPress API */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Actualités
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Restez informés de nos dernières activités
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {wordpressPosts ? (
                wordpressPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-40 sm:h-48">
                      {post._embedded?.['wp:featuredmedia']?.[0] ? (
                        <img
                          src={post._embedded['wp:featuredmedia'][0].source_url}
                          alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">Pas d'image</span>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                        {new Date(post.date).toLocaleDateString('fr-FR')}
                      </div>
                      <Link to={`/article/${post.id}`}>
                        <CardTitle className="text-[#010192] mb-3 hover:text-[#010175] cursor-pointer transition-colors text-sm sm:text-base leading-snug">
                          {post.title.rendered}
                        </CardTitle>
                      </Link>
                      <CardDescription className="text-gray-600 mb-4 text-xs sm:text-sm">
                        {truncateText(stripHtml(post.excerpt.rendered), 120)}
                      </CardDescription>
                      <Link to={`/article/${post.id}`}>
                        <Button variant="ghost" className="text-[#010192] hover:text-[#010175] p-0 text-xs sm:text-sm">
                          Lire la suite
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))
              ) : (
                // Loading skeleton
                [...Array(3)].map((_, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="animate-pulse">
                      <div className="h-40 sm:h-48 bg-gray-200"></div>
                      <CardContent className="p-4 sm:p-6">
                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                        <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div className="space-y-2 mb-4">
                          <div className="h-3 bg-gray-200 rounded"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      </CardContent>
                    </div>
                  </Card>
                ))
              )}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Link to="/actualites">
                <Button variant="outline" className="border-[#010192] text-[#010192] hover:bg-[#010192] hover:text-white text-sm sm:text-base">
                  Toutes les actualités
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-[#010192] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                  Rejoignez notre mission
                </h2>
                <p className="text-sm sm:text-lg opacity-90 mb-6 sm:mb-8">
                  Ensemble, nous pouvons créer un impact durable dans les communautés rurales. 
                  Votre soutien nous permet de continuer nos actions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/don">
                    <Button size="lg" className="bg-[#7cc576] hover:bg-[#6bb565] text-white w-full sm:w-auto text-sm sm:text-base">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Faire un don
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#010192] w-full sm:w-auto text-sm sm:text-base">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Nous contacter
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  <div>
                    <div className="text-2xl sm:text-4xl font-bold text-[#7cc576]">1000+</div>
                    <div className="text-xs sm:text-sm opacity-90">Familles aidées</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-4xl font-bold text-[#7cc576]">50+</div>
                    <div className="text-xs sm:text-sm opacity-90">Projets réalisés</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-4xl font-bold text-[#7cc576]">28+</div>
                    <div className="text-xs sm:text-sm opacity-90">Années d'expérience</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-4xl font-bold text-[#7cc576]">10+</div>
                    <div className="text-xs sm:text-sm opacity-90">Partenaires</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Nos partenaires
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Ils nous font confiance et soutiennent nos actions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="text-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 sm:h-16 mx-auto mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="text-xs sm:text-sm text-gray-600">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

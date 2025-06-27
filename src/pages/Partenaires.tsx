
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Globe, Heart } from "lucide-react";

const Partenaires = () => {
  const partners = [
    {
      name: "UNICEF",
      category: "Organisation Internationale",
      description: "Partenariat pour la protection et l'éducation des enfants au Nord et Sud-Kivu",
      logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      website: "https://unicef.org",
      partnership: "2018 - Présent",
      projects: "15 projets conjoints"
    },
    {
      name: "Organisation Mondiale de la Santé (OMS)",
      category: "Organisation Internationale",
      description: "Collaboration sur les programmes de santé publique et lutte contre les épidémies",
      logo: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      website: "https://who.int",
      partnership: "2019 - Présent",
      projects: "8 projets conjoints"
    },
    {
      name: "USAID",
      category: "Agence de Développement",
      description: "Soutien aux programmes d'autonomisation et de développement économique",
      logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      website: "https://usaid.gov",
      partnership: "2020 - Présent",
      projects: "12 projets conjoints"
    },
    {
      name: "Union Européenne",
      category: "Organisation Régionale",
      description: "Financement des projets de cohésion sociale et droits humains",
      logo: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      website: "https://europa.eu",
      partnership: "2017 - Présent",
      projects: "20 projets conjoints"
    },
    {
      name: "Coopération Technique Belge (CTB)",
      category: "Agence de Coopération",
      description: "Appui technique et financier pour le développement rural durable",
      logo: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      website: "https://ctb.be",
      partnership: "2021 - Présent",
      projects: "6 projets conjoints"
    },
    {
      name: "Oxfam International",
      category: "ONG Internationale",
      description: "Collaboration sur la sécurité alimentaire et l'égalité des genres",
      logo: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      website: "https://oxfam.org",
      partnership: "2019 - Présent",
      projects: "10 projets conjoints"
    }
  ];

  const categories = [
    "Toutes les catégories",
    "Organisation Internationale",
    "Agence de Développement",
    "Organisation Régionale",
    "Agence de Coopération",
    "ONG Internationale"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#010192] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Nos Partenaires</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Découvrez les organisations qui nous font confiance et collaborent avec nous 
                pour créer un impact durable dans les communautés
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#010192]">15+</div>
                <div className="text-gray-600">Partenaires actifs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#010192]">71</div>
                <div className="text-gray-600">Projets conjoints</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#010192]">8</div>
                <div className="text-gray-600">Ans de collaboration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#010192]">25M+</div>
                <div className="text-gray-600">USD mobilisés</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-100 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-[#010192] hover:bg-[#010175]" : "border-[#010192] text-[#010192] hover:bg-[#010192] hover:text-white"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-[#010192]">{partner.name}</CardTitle>
                    <div className="text-sm text-[#7cc576] font-medium">{partner.category}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{partner.description}</CardDescription>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Partenariat:</span>
                        <span className="font-medium">{partner.partnership}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Projets:</span>
                        <span className="font-medium">{partner.projects}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-[#010192] text-[#010192] hover:bg-[#010192] hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visiter le site
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-16 bg-[#010192] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Users className="h-16 w-16 mx-auto mb-6 text-[#7cc576]" />
            <h2 className="text-3xl font-bold mb-4">Devenir partenaire</h2>
            <p className="text-lg opacity-90 mb-8">
              Rejoignez notre réseau de partenaires engagés pour un développement durable 
              et un impact positif dans les communautés rurales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#7cc576] hover:bg-[#6bb565] text-white">
                <Heart className="h-5 w-5 mr-2" />
                Devenir partenaire
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#010192]">
                <Globe className="h-5 w-5 mr-2" />
                En savoir plus
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Partenaires;

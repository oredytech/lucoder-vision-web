
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart, Award, Calendar, MapPin } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Intégrité",
      description: "Nous agissons avec transparence et honnêteté dans toutes nos interventions",
      icon: <Award className="h-8 w-8 text-[#7cc576]" />
    },
    {
      title: "Inclusion",
      description: "Nous œuvrons pour l'autonomisation de tous, sans discrimination",
      icon: <Users className="h-8 w-8 text-[#7cc576]" />
    },
    {
      title: "Durabilité",
      description: "Nos actions visent un impact durable pour les générations futures",
      icon: <Target className="h-8 w-8 text-[#7cc576]" />
    },
    {
      title: "Solidarité",
      description: "Nous rassemblons les communautés pour un développement partagé",
      icon: <Heart className="h-8 w-8 text-[#7cc576]" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#010192] to-[#010175] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de LUCODER</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Lutte Contre la Délinquance et l'Exode Rural - Une organisation dédiée au développement durable depuis 1996
            </p>
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-[#7cc576] mr-3" />
                <span className="text-[#7cc576] font-semibold">Notre Histoire</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Plus de 25 ans au service des communautés
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Créée le 31 janvier 1996 à Goma, la LUCODER (Lutte Contre la Délinquance et l'Exode Rural) 
                est née de la volonté de répondre aux défis du développement rural et de la lutte contre 
                la délinquance dans la région du Nord-Kivu.
              </p>
              <p className="text-gray-600 mb-6">
                Depuis sa création, notre organisation s'est engagée à rassembler les gens, les idées et 
                les actions de façon durable, touchant la vie de milliers de familles à travers nos 
                programmes d'intervention.
              </p>
              <div className="flex items-center text-[#010192]">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="font-semibold">Basée à Goma, Nord-Kivu, RDC</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Histoire de LUCODER"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#7cc576] text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">1996</div>
                  <div className="text-sm">Année de création</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision et Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Vision & Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-[#010192] text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Notre Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center leading-relaxed">
                  "Rassembler les gens, les idées et les actions de façon durable"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#7cc576] text-white border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Notre Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center leading-relaxed">
                  Promouvoir le développement rural durable et lutter contre la délinquance 
                  à travers l'autonomisation des communautés locales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600">
              Les principes qui guident notre action quotidienne
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-[#010192]">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-[#010192] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Impact en Chiffres</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#7cc576] mb-2">28+</div>
              <div className="text-sm opacity-90">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#7cc576] mb-2">1000+</div>
              <div className="text-sm opacity-90">Familles aidées</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#7cc576] mb-2">50+</div>
              <div className="text-sm opacity-90">Projets réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#7cc576] mb-2">8</div>
              <div className="text-sm opacity-90">Domaines d'action</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

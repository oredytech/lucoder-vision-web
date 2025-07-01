
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart, Award, Calendar, MapPin, FileText, Building, Shield, Leaf } from "lucide-react";

const About = () => {
  const legalDocuments = [
    "Arrêté ministériel N°061/CAB/MIN/AFF.SO/96 du 14/05/1996",
    "Arrêté provincial du gouverneur n°01/234/CAB/GP-NK/2023 - F92/34.649",
    "Certificat d'enregistrement d'ONG au Ministère du Plan n°2041/PL/DCRE/2024",
    "Attestation d'enregistrement à la division provinciale des infrastructures n°600/ITP/040/Province du Nord-Kivu"
  ];

  const interventionDomains = [
    {
      title: "Infrastructures et Réhabilitation",
      description: "Réhabilitation de routes agricoles, construction de moulins hydrauliques et amélioration des infrastructures communautaires",
      icon: <Building className="h-8 w-8 text-[#7cc576]" />,
      examples: [
        "Réhabilitation de la route de desserte agricole axe Kihondo-Luve (2017)",
        "Construction d'un moulin hydraulique à LUSHEBERE (2012)"
      ]
    },
    {
      title: "Santé",
      description: "Amélioration des infrastructures sanitaires et équipement des centres de santé",
      icon: <Heart className="h-8 w-8 text-[#7cc576]" />,
      examples: [
        "Construction de trois salles d'hospitalisation au Centre de Santé de Référence Sake Afia (2021)",
        "Équipement sanitaire moderne et laboratoire"
      ]
    },
    {
      title: "Cohésion Sociale",
      description: "Réinsertion socio-économique des jeunes à risques et promotion du vivre ensemble",
      icon: <Users className="h-8 w-8 text-[#7cc576]" />,
      examples: [
        "Activités génératrices de revenus dans la zone de Kichanga (2018)",
        "Distribution de kits d'AGR (élevage, motos, moulins)"
      ]
    },
    {
      title: "Sécurité Alimentaire",
      description: "Lutte contre la sous-alimentation par l'agriculture et l'agroforesterie",
      icon: <Target className="h-8 w-8 text-[#7cc576]" />,
      examples: [
        "Activités maraîchères et vivrières dans la zone de Kirotshe (2021)",
        "Plantation d'arbres fruitiers et agroforesterie"
      ]
    },
    {
      title: "Sensibilisation et Environnement",
      description: "Protection environnementale et sensibilisation communautaire",
      icon: <Leaf className="h-8 w-8 text-[#7cc576]" />,
      examples: [
        "Campagne contre l'alcoolisme et la drogue à Minova (2019)",
        "Projets de reboisement et d'assainissement à Goma"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#010192] to-[#010175] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de LUCODER asbl</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Organisation Non Gouvernementale de droit congolais, dédiée au développement durable depuis 1996
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-[#7cc576] mr-3" />
                <span className="text-[#7cc576] font-semibold">Notre Identité</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Une ONG engagée et multidimensionnelle
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>LUCODER asbl</strong> est une <strong>Organisation Non Gouvernementale (ONG) de droit congolais, fondée en 1996</strong>. 
                Elle est dédiée au <strong>développement durable</strong> et est également préparée à se déployer en urgence pour faire face à toute 
                <strong> situation nécessitant une intervention humanitaire</strong>.
              </p>
              <p className="text-gray-600 mb-6">
                L'organisation est solidement ancrée dans le cadre légal de la République Démocratique du Congo et intervient 
                principalement dans la province du Nord-Kivu pour le bien-être des populations.
              </p>
              <div className="flex items-center text-[#010192]">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="font-semibold">Nord-Kivu, République Démocratique du Congo</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="LUCODER en action"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#7cc576] text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">28+</div>
                  <div className="text-sm">Années d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cadre Légal */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-[#7cc576] mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Cadre Légal</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              LUCODER asbl est officiellement enregistrée auprès des autorités compétentes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {legalDocuments.map((document, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-[#7cc576] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{document}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines d'Intervention */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Domaines d'Intervention</h2>
            <p className="text-lg text-gray-600">
              LUCODER asbl intervient dans plusieurs domaines clés pour le développement communautaire
            </p>
          </div>
          
          <div className="space-y-8">
            {interventionDomains.map((domain, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {domain.icon}
                    <CardTitle className="text-[#010192] ml-4">{domain.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {domain.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Exemples de réalisations :</h4>
                    {domain.examples.map((example, exIndex) => (
                      <div key={exIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-[#7cc576] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm">{example}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Spécifique */}
      <section className="py-16 bg-[#010192] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Notre Mission Spécifique</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-center">Lutte contre la Délinquance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center opacity-90">
                    Prévention et lutte contre la délinquance juvénile par la réinsertion socio-économique 
                    et les activités génératrices de revenus
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-xl text-center">Lutte contre l'Exode Rural</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center opacity-90">
                    Amélioration des conditions de vie en milieu rural pour limiter l'exode vers les centres urbains 
                    par le développement d'infrastructures et d'opportunités économiques
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires et Bailleurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Partenaires</h2>
            <p className="text-lg text-gray-600 mb-8">
              LUCODER asbl collabore avec différents partenaires pour maximiser son impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold text-[#010192]">NRC</p>
              <p className="text-sm text-gray-600">Norwegian Refugee Council</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold text-[#010192]">Fonds Congo-Japon</p>
              <p className="text-sm text-gray-600">Cooperation bilatérale</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold text-[#010192]">USAID/MSI</p>
              <p className="text-sm text-gray-600">Développement international</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold text-[#010192]">Consortium ONU</p>
              <p className="text-sm text-gray-600">UN HABITAT, UNFPA, UNESCO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Un Acteur Engagé</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>LUCODER asbl</strong> reste un <strong>acteur engagé et multidimensionnel dans le développement communautaire 
            et l'assistance humanitaire en République Démocratique du Congo</strong>. Notre approche intégrée nous permet 
            d'adresser les défis complexes du développement rural tout en contribuant à la paix et à la stabilité sociale.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;

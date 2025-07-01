
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DomainesAction = () => {
  const domains = [
    {
      title: "Infrastructures et Réhabilitation",
      description: "Réhabilitation de routes agricoles, construction de moulins hydrauliques et amélioration des infrastructures communautaires",
      icon: "🏗️",
      color: "bg-blue-50",
      details: "LUCODER asbl réalise des projets d'infrastructures essentiels pour le développement des communautés. En 2017, nous avons réhabilité la route de desserte agricole axe Kihondo-Luve, impliquant des jeunes désœuvrés et ex-combattants. En 2012, nous avons construit un moulin hydraulique à LUSHEBERE grâce au soutien du NRC.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      examples: [
        "Réhabilitation de la route de desserte agricole axe Kihondo-Luve (2017)",
        "Construction d'un moulin hydraulique à LUSHEBERE (2012)",
        "Amélioration des infrastructures communautaires de base"
      ]
    },
    {
      title: "Santé",
      description: "Amélioration des infrastructures sanitaires et équipement des centres de santé pour une meilleure prise en charge des patients",
      icon: "🏥",
      color: "bg-green-50",
      details: "Nous contribuons significativement à l'amélioration du système de santé. En 2021, LUCODER asbl a construit trois salles d'hospitalisation, un laboratoire et un bloc sanitaire au Centre de Santé de Référence Sake Afia, doté d'un équipement sanitaire moderne, avec l'appui du Fonds Congo-Japon.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      examples: [
        "Construction de trois salles d'hospitalisation au Centre de Santé Sake Afia (2021)",
        "Équipement sanitaire moderne et laboratoire",
        "Amélioration de la prise en charge des patients"
      ]
    },
    {
      title: "Cohésion Sociale et Réinsertion",
      description: "Réinsertion socio-économique des jeunes à risques et promotion du vivre ensemble par des activités génératrices de revenus",
      icon: "👥",
      color: "bg-blue-50",
      details: "En 2018, nous avons mis en œuvre un projet crucial de cohésion sociale dans la zone de Kichanga, supervisé par un consortium UN HABITAT, UNFPA et UNESCO. Nous distribuons des kits d'AGR (élevage, motos, moulins) aux communautés et les sensibilisons au vivre ensemble.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      examples: [
        "Projet de cohésion sociale à Kichanga (2018)",
        "Distribution de kits d'AGR (élevage, motos, moulins)",
        "Sensibilisation au vivre ensemble et prévention des VBG"
      ]
    },
    {
      title: "Sécurité Alimentaire et Agriculture",
      description: "Lutte contre la sous-alimentation par l'agriculture, les activités maraîchères et l'agroforesterie",
      icon: "🌾",
      color: "bg-green-50",
      details: "Depuis 2021, nous menons un projet essentiel pour lutter contre la sous-alimentation dans la zone de Kirotshe. Le projet intègre des activités maraîchères (choux, oignons, pastèques), vivrières (maïs, arachide, manioc) et d'agroforesterie avec plantation d'arbres fruitiers.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      examples: [
        "Projet anti-sous-alimentation à Kirotshe (depuis 2021)",
        "Activités maraîchères : choux, oignons, pastèques sur ferme aquacole",
        "Agroforesterie : pruniers, manguiers, avocatiers, grevillea, acacias"
      ]
    },
    {
      title: "Lutte contre la Délinquance et l'Exode Rural",
      description: "Prévention de la délinquance juvénile et de l'exode rural par l'amélioration des conditions de vie et opportunités économiques",
      icon: "🎯",
      color: "bg-blue-50",
      details: "LUCODER asbl s'engage activement dans la lutte contre la délinquance et l'exode rural. En 2018, nous avons mené un projet d'amélioration de l'accessibilité aux moyens de subsistance dans le groupement Biiri en territoire de Masisi, avec le soutien d'USAID via MSI.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      examples: [
        "Amélioration des moyens de subsistance à Biiri-Masisi (2018)",
        "Création d'opportunités économiques en milieu rural",
        "Prévention de l'exode vers les centres urbains"
      ]
    },
    {
      title: "Sensibilisation et Lutte contre les Fléaux Sociaux",
      description: "Campagnes de sensibilisation contre l'alcoolisme, la drogue et les maladies, particulièrement en milieu scolaire",
      icon: "📢",
      color: "bg-green-50",
      details: "En 2019, nous avons organisé une campagne de sensibilisation en milieu scolaire à Minova pour lutter contre l'alcoolisme, la drogue et la Maladie à Virus Ebola. Ces actions de prévention visent à protéger la jeunesse des fléaux sociaux.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      examples: [
        "Campagne anti-alcoolisme et anti-drogue à Minova (2019)",
        "Sensibilisation contre la Maladie à Virus Ebola",
        "Actions de prévention en milieu scolaire"
      ]
    },
    {
      title: "Protection Environnementale et Reboisement",
      description: "Protection de l'environnement par des projets de reboisement et d'assainissement pour lutter contre le changement climatique",
      icon: "🌱",
      color: "bg-green-50",
      details: "LUCODER asbl est active dans la protection environnementale à travers des projets de reboisement et d'assainissement de certaines artères routières de Goma, en collaboration avec la commune. Ces actions contribuent à la lutte contre le changement climatique et l'insalubrité urbaine.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      examples: [
        "Projets de reboisement à Goma",
        "Assainissement des artères routières urbaines",
        "Lutte contre le changement climatique et l'insalubrité"
      ]
    },
    {
      title: "Développement Durable et Intervention Humanitaire",
      description: "Engagement global pour le développement durable avec capacité de déploiement rapide en situations d'urgence humanitaire",
      icon: "🤝",
      color: "bg-blue-50",
      details: "Depuis 1996, LUCODER asbl est dédiée au développement durable tout en étant préparée à se déployer en urgence pour toute situation nécessitant une intervention humanitaire. Notre approche multidimensionnelle nous permet d'être un acteur complet du développement communautaire.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      examples: [
        "28 années d'expérience en développement durable",
        "Capacité d'intervention humanitaire d'urgence",
        "Approche multidimensionnelle du développement"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#010192] to-[#010175] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Domaines d'Action</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Huit secteurs d'intervention avec des réalisations concrètes pour un développement durable et inclusif
            </p>
          </div>
        </div>
      </section>

      {/* Domaines Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {domains.map((domain, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
                    <span className="text-2xl">{domain.icon}</span>
                  </div>
                </div>
                <CardHeader className={`${domain.color}`}>
                  <CardTitle className="text-[#010192]">{domain.title}</CardTitle>
                  <CardDescription className="text-gray-700 font-medium">
                    {domain.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {domain.details}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Exemples de réalisations :</h4>
                    {domain.examples.map((example, exIndex) => (
                      <div key={exIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-[#7cc576] rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            28 années d'expérience au service du développement
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Depuis 1996, LUCODER asbl reste un acteur engagé et multidimensionnel dans le 
            développement communautaire et l'assistance humanitaire en République Démocratique du Congo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-[#010192] hover:bg-[#010175] text-white px-8 py-3 rounded-md font-medium transition-colors">
              Nous contacter
            </a>
            <a href="/don" className="bg-[#7cc576] hover:bg-[#6bb565] text-white px-8 py-3 rounded-md font-medium transition-colors">
              Soutenir nos actions
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DomainesAction;

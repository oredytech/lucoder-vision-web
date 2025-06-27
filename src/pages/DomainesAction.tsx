
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DomainesAction = () => {
  const domains = [
    {
      title: "Autonomisation et Inclusion",
      description: "L'autonomisation et l'inclusion des femmes, jeunes et autres personnes marginalisées",
      icon: "👥",
      color: "bg-blue-50",
      details: "Nous œuvrons pour l'égalité des chances et l'inclusion sociale de tous les membres de la communauté, avec un accent particulier sur les groupes vulnérables.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Entrepreneuriat et Leadership",
      description: "L'entrepreneuriat et leadership transformationnel des jeunes",
      icon: "💼",
      color: "bg-green-50",
      details: "Formation et accompagnement des jeunes entrepreneurs pour créer des opportunités économiques durables dans leurs communautés.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Santé et Nutrition",
      description: "Promotion de la santé/nutrition (soins primaires, santé reproductive, lutte contre VIH/Sida, Ebola et COVID-19)",
      icon: "🏥",
      color: "bg-blue-50",
      details: "Amélioration de l'accès aux soins de santé de qualité et promotion de bonnes pratiques nutritionnelles pour toute la famille.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sécurité Alimentaire",
      description: "Promotion de la sécurité alimentaire et des moyens de subsistance (agriculture, élevage, pisciculture et AGR)",
      icon: "🌾",
      color: "bg-green-50",
      details: "Développement de systèmes agricoles durables et diversification des sources de revenus pour assurer la sécurité alimentaire.",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Droits Humains",
      description: "Protection et promotion des droits humains, lutte contre les VBG et coexistence pacifique",
      icon: "⚖️",
      color: "bg-blue-50",
      details: "Défense des droits fondamentaux, protection contre les violences et promotion de la paix sociale entre communautés.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Encadrement de la Jeunesse",
      description: "L'encadrement, l'éducation et l'accompagnement des jeunes dans la lutte contre l'alcoolisme et la toxicomanie",
      icon: "🎓",
      color: "bg-green-50",
      details: "Programmes de sensibilisation et d'accompagnement pour prévenir les dépendances et promouvoir un mode de vie sain.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Infrastructures Communautaires",
      description: "La construction/réhabilitation des infrastructures communautaires de base",
      icon: "🏗️",
      color: "bg-blue-50",
      details: "Amélioration des infrastructures essentielles pour le développement des communautés rurales et urbaines.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Protection Environnementale",
      description: "La protection de l'environnement et conservation de la biodiversité",
      icon: "🌱",
      color: "bg-green-50",
      details: "Préservation des écosystèmes naturels et promotion de pratiques respectueuses de l'environnement.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
              Huit secteurs d'intervention pour un développement durable et inclusif
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
                  <p className="text-gray-600 leading-relaxed">
                    {domain.details}
                  </p>
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
            Rejoignez-nous dans notre mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ensemble, nous pouvons créer un impact durable dans ces domaines cruciaux 
            pour le développement de nos communautés.
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

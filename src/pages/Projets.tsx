
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Calendar, ExternalLink } from "lucide-react";

const Projets = () => {
  const projects = [
    {
      title: "Projet d'autonomisation des femmes de Goma",
      description: "Formation professionnelle et accompagnement entrepreneurial pour 500 femmes vulnérables",
      location: "Goma, Nord-Kivu",
      date: "2024",
      status: "En cours",
      beneficiaries: "500 femmes",
      partner: "UNICEF",
      budget: "85,000 USD",
      category: "Autonomisation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "Ce projet vise à renforcer les capacités économiques des femmes à travers la formation en coupe-couture, restauration et commerce."
    },
    {
      title: "Programme de sécurité alimentaire - Masisi",
      description: "Amélioration de la production agricole et élevage pour 1,200 familles",
      location: "Territoire de Masisi",
      date: "2024",
      status: "En cours",
      beneficiaries: "1,200 familles",
      partner: "FAO",
      budget: "120,000 USD",
      category: "Sécurité Alimentaire",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "Distribution de semences améliorées, formation en techniques agricoles modernes et appui à l'élevage."
    },
    {
      title: "Formation en entrepreneuriat jeunesse - Bukavu",
      description: "Programme de leadership et création d'entreprises pour 300 jeunes",
      location: "Bukavu, Sud-Kivu",
      date: "2023",
      status: "Terminé",
      beneficiaries: "300 jeunes",
      partner: "USAID",
      budget: "75,000 USD",
      category: "Entrepreneuriat",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "Formation en business plan, gestion financière et accompagnement à la création de micro-entreprises."
    },
    {
      title: "Lutte contre les VBG - Nyiragongo",
      description: "Sensibilisation et prise en charge des victimes de violences basées sur le genre",
      location: "Territoire de Nyiragongo",
      date: "2023-2024",
      status: "En cours",
      beneficiaries: "800 personnes",
      partner: "UNFPA",
      budget: "95,000 USD",
      category: "Droits Humains",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "Campagnes de sensibilisation, formation des leaders communautaires et appui psychosocial."
    },
    {
      title: "Construction d'infrastructures scolaires",
      description: "Réhabilitation de 5 écoles primaires et construction de latrines",
      location: "Rutshuru, Nord-Kivu",
      date: "2023",
      status: "Terminé",
      beneficiaries: "2,000 élèves",
      partner: "Union Européenne",
      budget: "150,000 USD",
      category: "Infrastructures",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "Amélioration des conditions d'apprentissage avec des salles de classe modernes et des installations sanitaires."
    },
    {
      title: "Campagne de vaccination communautaire",
      description: "Vaccination et sensibilisation sanitaire contre les maladies infectieuses",
      location: "Beni, Nord-Kivu",
      date: "2023",
      status: "Terminé",
      beneficiaries: "5,000 personnes",
      partner: "OMS",
      budget: "60,000 USD",
      category: "Santé",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      details: "Programme de vaccination contre la rougeole, poliomyélite et sensibilisation aux mesures d'hygiène."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En cours":
        return "bg-green-100 text-green-800";
      case "Terminé":
        return "bg-blue-100 text-blue-800";
      case "Planifié":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#010192] to-[#010175] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Projets</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Découvrez nos réalisations et projets en cours pour le développement durable des communautés
            </p>
          </div>
        </div>
      </section>

      {/* Statistiques rapides */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#010192] mb-2">50+</div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#7cc576] mb-2">10,000+</div>
              <div className="text-sm text-gray-600">Bénéficiaires</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#010192] mb-2">8</div>
              <div className="text-sm text-gray-600">Secteurs d'intervention</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#7cc576] mb-2">15+</div>
              <div className="text-sm text-gray-600">Partenaires</div>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des projets */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projets Récents</h2>
            <p className="text-lg text-gray-600">
              Un aperçu de nos interventions les plus significatives
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
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-[#010192] text-lg leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-[#7cc576]" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-[#7cc576]" />
                    {project.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-[#7cc576]" />
                    {project.beneficiaries}
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-3">{project.details}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[#010192]">
                        Partenaire: {project.partner}
                      </span>
                      <button className="text-[#7cc576] hover:text-[#6bb565] transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#010192] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Soutenez nos projets futurs
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Votre contribution nous permet de poursuivre notre mission et d'étendre 
            notre impact dans de nouvelles communautés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/don" className="bg-[#7cc576] hover:bg-[#6bb565] text-white px-8 py-3 rounded-md font-medium transition-colors">
              Faire un don
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-[#010192] px-8 py-3 rounded-md font-medium transition-colors">
              Devenir partenaire
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projets;

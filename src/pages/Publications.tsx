
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Download, FileText, BookOpen } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Rapport Annuel 2023",
      description: "Bilan complet des activités et réalisations de LUCODER en 2023",
      type: "Rapport",
      date: "Mars 2024",
      pages: "45 pages",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Guide de l'autonomisation des femmes",
      description: "Manuel pratique pour l'accompagnement des femmes dans l'entrepreneuriat",
      type: "Guide",
      date: "Janvier 2024",
      pages: "32 pages",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Étude sur la sécurité alimentaire",
      description: "Analyse de l'impact des programmes de sécurité alimentaire au Nord-Kivu",
      type: "Étude",
      date: "Novembre 2023",
      pages: "28 pages",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Bulletin d'information Q4 2023",
      description: "Dernières nouvelles et mises à jour sur nos projets en cours",
      type: "Bulletin",
      date: "Décembre 2023",
      pages: "12 pages",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Manuel de formation jeunesse",
      description: "Ressource pour la formation des jeunes en leadership transformationnel",
      type: "Manuel",
      date: "Octobre 2023",
      pages: "56 pages",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Stratégie 2024-2028",
      description: "Plan stratégique quinquennal de LUCODER pour la période 2024-2028",
      type: "Stratégie",
      date: "Septembre 2023",
      pages: "68 pages",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    { name: "Tous", count: publications.length },
    { name: "Rapports", count: publications.filter(p => p.type === "Rapport").length },
    { name: "Guides", count: publications.filter(p => p.type === "Guide").length },
    { name: "Études", count: publications.filter(p => p.type === "Étude").length },
    { name: "Bulletins", count: publications.filter(p => p.type === "Bulletin").length }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#010192] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Publications</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Découvrez nos rapports, études et guides qui documentent notre impact 
                et partagent notre expertise dans le développement rural
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-[#010192] hover:bg-[#010175]" : "border-[#010192] text-[#010192] hover:bg-[#010192] hover:text-white"}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publications.map((publication, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <img
                      src={publication.image}
                      alt={publication.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#7cc576] text-white px-3 py-1 rounded-full text-sm">
                      {publication.type}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#010192]">{publication.title}</CardTitle>
                    <CardDescription>{publication.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {publication.date}
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2" />
                        {publication.pages}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-[#010192] hover:bg-[#010175] text-white flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger
                      </Button>
                      <Button size="sm" variant="outline" className="border-[#010192] text-[#010192] hover:bg-[#010192] hover:text-white">
                        <BookOpen className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-[#010192] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
            <p className="text-lg opacity-90 mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos dernières publications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="flex-1 px-4 py-3 rounded-md text-gray-900"
              />
              <Button className="bg-[#7cc576] hover:bg-[#6bb565] text-white px-6">
                S'abonner
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Publications;

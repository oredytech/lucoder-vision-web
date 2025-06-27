
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Eye } from "lucide-react";

const Actualites = () => {
  const news = [
    {
      title: "Lancement du nouveau programme de formation professionnelle pour les jeunes",
      excerpt: "LUCODER lance un ambitieux programme de formation de 6 mois destiné à 200 jeunes de Goma. Cette initiative vise à réduire le chômage des jeunes en leur offrant des compétences techniques...",
      content: "Le programme couvre plusieurs domaines : électricité, plomberie, coupe-couture, et informatique de base. Les participants recevront également une formation en entrepreneuriat.",
      date: "15 Décembre 2024",
      author: "Équipe LUCODER",
      category: "Formation",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 245,
      featured: true
    },
    {
      title: "Signature d'un accord de partenariat stratégique avec l'UNICEF",
      excerpt: "Un nouveau partenariat pour renforcer l'éducation et la protection de l'enfance dans la région du Nord-Kivu. Cet accord permettra de toucher plus de 5,000 enfants...",
      content: "Le partenariat s'étend sur 3 ans et couvre la construction d'écoles, la formation d'enseignants et la sensibilisation aux droits de l'enfant.",
      date: "10 Décembre 2024",
      author: "Direction Exécutive",
      category: "Partenariat",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 189,
      featured: true
    },
    {
      title: "Publication du rapport annuel 2024 : Un bilan positif",
      excerpt: "Découvrez nos réalisations de l'année 2024 et l'impact de nos interventions auprès des communautés. Plus de 10,000 personnes ont bénéficié de nos programmes...",
      content: "Le rapport détaille nos activités dans les 8 domaines d'intervention et présente les témoignages de nos bénéficiaires.",
      date: "5 Décembre 2024",
      author: "Équipe M&E",
      category: "Rapport",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 156,
      featured: false
    },
    {
      title: "Succès du programme de microfinance pour les femmes rurales",
      excerpt: "Plus de 300 femmes ont bénéficié de microcrédits pour développer leurs activités génératrices de revenus. Le taux de remboursement atteint 95%...",
      content: "Ces microcrédits ont permis de lancer des activités dans l'agriculture, l'élevage et le petit commerce, améliorant significativement les revenus familiaux.",
      date: "28 Novembre 2024",
      author: "Équipe Autonomisation",
      category: "Microfinance",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 134,
      featured: false
    },
    {
      title: "Formation en agriculture durable : 500 agriculteurs formés",
      excerpt: "Une formation intensive en techniques agricoles modernes et durables vient de se terminer. Les participants ont appris les méthodes de compostage, l'agroforesterie...",
      content: "Cette formation s'inscrit dans notre programme de sécurité alimentaire et vise à améliorer les rendements tout en préservant l'environnement.",
      date: "20 Novembre 2024",
      author: "Équipe Agriculture",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 198,
      featured: false
    },
    {
      title: "Campagne de sensibilisation contre les violences basées sur le genre",
      excerpt: "Une grande campagne de sensibilisation a été lancée dans 10 communautés du Nord-Kivu. Plus de 2,000 personnes ont été sensibilisées aux dangers des VBG...",
      content: "La campagne comprend des sessions de formation pour les leaders communautaires et la mise en place de comités de protection.",
      date: "15 Novembre 2024",
      author: "Équipe Protection",
      category: "Sensibilisation",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: 167,
      featured: false
    }
  ];

  const categories = ["Toutes", "Formation", "Partenariat", "Rapport", "Microfinance", "Agriculture", "Sensibilisation"];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Formation": "bg-blue-100 text-blue-800",
      "Partenariat": "bg-green-100 text-green-800",
      "Rapport": "bg-purple-100 text-purple-800",
      "Microfinance": "bg-yellow-100 text-yellow-800",
      "Agriculture": "bg-emerald-100 text-emerald-800",
      "Sensibilisation": "bg-red-100 text-red-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const featuredNews = news.filter(article => article.featured);
  const regularNews = news.filter(article => !article.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#010192] to-[#010175] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Actualités</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Restez informés de nos dernières activités et de l'impact de nos actions sur le terrain
            </p>
          </div>
        </div>
      </section>

      {/* Articles en vedette */}
      {featuredNews.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">À la Une</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredNews.map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(article.category)}>
                        {article.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      À LA UNE
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-[#010192] text-xl leading-tight hover:text-[#010175] cursor-pointer transition-colors">
                      {article.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {article.views}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                    <button className="flex items-center text-[#010192] hover:text-[#010175] font-medium transition-colors">
                      Lire la suite
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filtres par catégorie */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-[#010192] text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Autres actualités */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Autres Actualités</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-[#010192] text-lg leading-tight hover:text-[#010175] cursor-pointer transition-colors">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  <button className="flex items-center text-[#010192] hover:text-[#010175] font-medium transition-colors">
                    Lire la suite
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#010192] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Restez informés de nos actualités
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières nouvelles 
            directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#7cc576]"
            />
            <button className="bg-[#7cc576] hover:bg-[#6bb565] text-white px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Actualites;


import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Eye } from "lucide-react";

interface WordPressPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  featured_media: number;
  author: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

const fetchPosts = async (): Promise<WordPressPost[]> => {
  const response = await fetch('https://mishapivoicetv.net/wp-json/wp/v2/posts?per_page=12&_embed');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const Actualites = () => {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

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

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  if (error) {
    return (
      <Layout>
        <section className="bg-gradient-to-r from-[#010192] to-[#010175] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Actualités</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Une erreur s'est produite lors du chargement des articles. Veuillez réessayer plus tard.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  const featuredPosts = posts?.slice(0, 2) || [];
  const regularPosts = posts?.slice(2) || [];

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
      {!isLoading && featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">À la Une</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64">
                    {post._embedded?.['wp:featuredmedia']?.[0] ? (
                      <img
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Pas d'image</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      À LA UNE
                    </div>
                  </div>
                  
                  <CardHeader>
                    <Link to={`/article/${post.id}`}>
                      <CardTitle className="text-[#010192] text-xl leading-tight hover:text-[#010175] cursor-pointer transition-colors">
                        {post.title.rendered}
                      </CardTitle>
                    </Link>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('fr-FR')}
                      </div>
                      {post._embedded?.author?.[0] && (
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post._embedded.author[0].name}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {truncateText(stripHtml(post.excerpt.rendered), 150)}
                    </CardDescription>
                    <Link to={`/article/${post.id}`}>
                      <button className="flex items-center text-[#010192] hover:text-[#010175] font-medium transition-colors">
                        Lire la suite
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </Link>
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
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
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
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="animate-pulse">
                    <div className="h-48 bg-gray-200"></div>
                    <CardHeader>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    {post._embedded?.['wp:featuredmedia']?.[0] ? (
                      <img
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">Pas d'image</span>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader>
                    <Link to={`/article/${post.id}`}>
                      <CardTitle className="text-[#010192] text-lg leading-tight hover:text-[#010175] cursor-pointer transition-colors">
                        {post.title.rendered}
                      </CardTitle>
                    </Link>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('fr-FR')}
                      </div>
                      {post._embedded?.author?.[0] && (
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post._embedded.author[0].name}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {truncateText(stripHtml(post.excerpt.rendered), 120)}
                    </CardDescription>
                    <Link to={`/article/${post.id}`}>
                      <button className="flex items-center text-[#010192] hover:text-[#010175] font-medium transition-colors">
                        Lire la suite
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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


import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, User, MessageCircle, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

interface WordPressComment {
  id: number;
  author_name: string;
  date: string;
  content: { rendered: string };
  post: number;
}

const fetchPost = async (id: string): Promise<WordPressPost> => {
  const response = await fetch(`https://mishapivoicetv.net/wp-json/wp/v2/posts/${id}?_embed`);
  if (!response.ok) throw new Error('Failed to fetch post');
  return response.json();
};

const fetchComments = async (postId: string): Promise<WordPressComment[]> => {
  const response = await fetch(`https://mishapivoicetv.net/wp-json/wp/v2/comments?post=${postId}&per_page=5`);
  if (!response.ok) throw new Error('Failed to fetch comments');
  return response.json();
};

const fetchRecentPosts = async (): Promise<WordPressPost[]> => {
  const response = await fetch('https://mishapivoicetv.net/wp-json/wp/v2/posts?per_page=3&_embed');
  if (!response.ok) throw new Error('Failed to fetch recent posts');
  return response.json();
};

const submitComment = async (postId: string, data: { author_name: string; author_email: string; content: string }) => {
  const response = await fetch(`https://mishapivoicetv.net/wp-json/wp/v2/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      post: parseInt(postId),
      author_name: data.author_name,
      author_email: data.author_email,
      content: data.content,
    }),
  });
  if (!response.ok) throw new Error('Failed to submit comment');
  return response.json();
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [commentForm, setCommentForm] = useState({
    author_name: '',
    author_email: '',
    content: ''
  });

  const { data: post, isLoading: postLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id!),
    enabled: !!id,
  });

  const { data: comments, isLoading: commentsLoading } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => fetchComments(id!),
    enabled: !!id,
  });

  const { data: recentPosts, isLoading: recentPostsLoading } = useQuery({
    queryKey: ['recentPosts'],
    queryFn: fetchRecentPosts,
  });

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    try {
      await submitComment(id, commentForm);
      toast({
        title: "Commentaire envoyé",
        description: "Votre commentaire a été soumis avec succès et est en attente de modération.",
      });
      setCommentForm({ author_name: '', author_email: '', content: '' });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du commentaire.",
        variant: "destructive",
      });
    }
  };

  const shareUrl = window.location.href;
  const shareTitle = post?.title.rendered || '';

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  if (postLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article introuvable</h1>
            <Link to="/actualites" className="text-[#010192] hover:underline">
              Retour aux actualités
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Article principal */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-sm">
              {/* Image mise en avant */}
              {post._embedded?.['wp:featuredmedia']?.[0] && (
                <img
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                  className="w-full h-64 sm:h-80 object-cover rounded-t-lg"
                />
              )}
              
              {/* Contenu de l'article */}
              <div className="p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {post.title.rendered}
                </h1>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
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

                {/* Boutons de partage */}
                <div className="flex items-center space-x-2 mb-6 pb-6 border-b">
                  <Share2 className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500 mr-2">Partager:</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('facebook')}
                    className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('twitter')}
                    className="text-blue-400 border-blue-400 hover:bg-blue-50"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('linkedin')}
                    className="text-blue-700 border-blue-700 hover:bg-blue-50"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Contenu */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
            </article>

            {/* Formulaire de commentaire */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Laisser un commentaire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="author_name">Nom *</Label>
                      <Input
                        id="author_name"
                        type="text"
                        required
                        value={commentForm.author_name}
                        onChange={(e) => setCommentForm(prev => ({ ...prev, author_name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="author_email">Email *</Label>
                      <Input
                        id="author_email"
                        type="email"
                        required
                        value={commentForm.author_email}
                        onChange={(e) => setCommentForm(prev => ({ ...prev, author_email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="content">Commentaire *</Label>
                    <Textarea
                      id="content"
                      required
                      rows={4}
                      value={commentForm.content}
                      onChange={(e) => setCommentForm(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Écrivez votre commentaire..."
                    />
                  </div>
                  <Button type="submit" className="bg-[#010192] hover:bg-[#010175]">
                    Publier le commentaire
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Barre latérale */}
          <div className="space-y-6">
            {/* Commentaires récents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Commentaires récents</CardTitle>
              </CardHeader>
              <CardContent>
                {commentsLoading ? (
                  <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    ))}
                  </div>
                ) : comments && comments.length > 0 ? (
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-sm">{comment.author_name}</span>
                          <span className="text-xs text-gray-500">
                            {new Date(comment.date).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                        <div 
                          className="text-sm text-gray-600 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Aucun commentaire pour le moment.</p>
                )}
              </CardContent>
            </Card>

            {/* Articles récents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Articles récents</CardTitle>
              </CardHeader>
              <CardContent>
                {recentPostsLoading ? (
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-16 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                ) : recentPosts && recentPosts.length > 0 ? (
                  <div className="space-y-4">
                    {recentPosts.map((recentPost) => (
                      <Link
                        key={recentPost.id}
                        to={`/article/${recentPost.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          {recentPost._embedded?.['wp:featuredmedia']?.[0] && (
                            <img
                              src={recentPost._embedded['wp:featuredmedia'][0].source_url}
                              alt=""
                              className="w-16 h-16 object-cover rounded flex-shrink-0"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#010192] line-clamp-2">
                              {recentPost.title.rendered}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(recentPost.date).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Aucun article récent.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;

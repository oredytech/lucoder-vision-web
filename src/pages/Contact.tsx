
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log("Formulaire soumis");
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-[#7cc576]" />,
      title: "Adresse",
      content: ["Avenue Kinyamasika, Quartier Himbi", "Goma, Nord-Kivu", "République Démocratique du Congo"]
    },
    {
      icon: <Phone className="h-6 w-6 text-[#7cc576]" />,
      title: "Téléphone",
      content: ["+243 XXX XXX XXX", "+243 XXX XXX XXX"]
    },
    {
      icon: <Mail className="h-6 w-6 text-[#7cc576]" />,
      title: "Email",
      content: ["contact@lucoder.org", "info@lucoder.org"]
    },
    {
      icon: <Clock className="h-6 w-6 text-[#7cc576]" />,
      title: "Heures d'ouverture",
      content: ["Lundi - Vendredi: 8h00 - 17h00", "Samedi: 8h00 - 13h00", "Dimanche: Fermé"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#010192] to-[#010175] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nous sommes là pour répondre à vos questions et explorer des opportunités de collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#010192]">Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          placeholder="Votre prénom"
                          className="focus:border-[#7cc576] focus:ring-[#7cc576]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          placeholder="Votre nom"
                          className="focus:border-[#7cc576] focus:ring-[#7cc576]"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="votre.email@exemple.com"
                        className="focus:border-[#7cc576] focus:ring-[#7cc576]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+243 XXX XXX XXX"
                        className="focus:border-[#7cc576] focus:ring-[#7cc576]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="Objet de votre message"
                        className="focus:border-[#7cc576] focus:ring-[#7cc576]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Écrivez votre message ici..."
                        className="focus:border-[#7cc576] focus:ring-[#7cc576] resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#010192] hover:bg-[#010175] text-white flex items-center justify-center"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informations de contact */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#010192] mb-6">Nos coordonnées</h2>
                <p className="text-gray-600 mb-8">
                  N'hésitez pas à nous contacter pour toute question, suggestion ou opportunité de partenariat. 
                  Notre équipe est disponible pour vous accompagner.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-l-4 border-l-[#7cc576]">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#010192] mb-2">{info.title}</h3>
                          {info.content.map((line, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">{line}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#010192] mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-[#010192] text-white rounded-full hover:bg-[#010175] transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-[#010192] text-white rounded-full hover:bg-[#010175] transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-[#010192] text-white rounded-full hover:bg-[#010175] transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre localisation</h2>
            <p className="text-lg text-gray-600">
              Retrouvez-nous dans nos bureaux à Goma
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-[#7cc576] mx-auto mb-4" />
                <p className="text-gray-600">
                  Carte interactive Google Maps<br />
                  Avenue Kinyamasika, Quartier Himbi<br />
                  Goma, Nord-Kivu, RDC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#010192] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à collaborer avec nous ?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Que vous soyez un partenaire potentiel, un donateur ou simplement curieux de nos actions, 
            nous serions ravis d'échanger avec vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/don" className="bg-[#7cc576] hover:bg-[#6bb565] text-white px-8 py-3 rounded-md font-medium transition-colors">
              Soutenir nos actions
            </a>
            <a href="/projets" className="border-2 border-white text-white hover:bg-white hover:text-[#010192] px-8 py-3 rounded-md font-medium transition-colors">
              Découvrir nos projets
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

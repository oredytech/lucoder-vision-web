
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Banknote, Shield, CheckCircle, Gift, Target, Award } from "lucide-react";

const Don = () => {
  const donationImpacts = [
    {
      amount: "25 $",
      description: "Permet de nourrir une famille pendant une semaine",
      icon: <Gift className="h-8 w-8 text-[#7cc576]" />
    },
    {
      amount: "50 $",
      description: "Finance la formation professionnelle d'un jeune",
      icon: <Users className="h-8 w-8 text-[#7cc576]" />
    },
    {
      amount: "100 $",
      description: "Soutient un microcrédit pour une femme entrepreneure",
      icon: <Target className="h-8 w-8 text-[#7cc576]" />
    },
    {
      amount: "200 $",
      description: "Contribue à la construction d'une salle de classe",
      icon: <Award className="h-8 w-8 text-[#7cc576]" />
    }
  ];

  const testimonials = [
    {
      name: "Marie Uwimana",
      role: "Bénéficiaire du programme microfinance",
      quote: "Grâce au soutien de LUCODER, j'ai pu développer mon commerce et subvenir aux besoins de ma famille. Mes enfants peuvent maintenant aller à l'école.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332b863?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Jean-Baptiste Nzeyimana",
      role: "Jeune formé en électricité",
      quote: "La formation que j'ai reçue m'a permis de créer ma propre entreprise. Aujourd'hui, j'emploie 3 autres jeunes de mon quartier.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const paymentMethods = [
    {
      name: "Mobile Money",
      description: "M-PESA, Orange Money, Airtel Money",
      available: true
    },
    {
      name: "Virement bancaire",
      description: "Transfert bancaire local ou international",
      available: true
    },
    {
      name: "PayPal",
      description: "Paiement sécurisé en ligne",
      available: true
    },
    {
      name: "Western Union",
      description: "Transfert d'argent international",
      available: true
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#010192] to-[#010175] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Heart className="h-16 w-16 text-[#7cc576] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Faire un don</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Votre générosité transforme des vies et construit un avenir meilleur pour les communautés du Nord-Kivu
            </p>
          </div>
        </div>
      </section>

      {/* Impact du don */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">L'impact de votre don</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque contribution, quelle que soit sa taille, fait une différence concrète dans la vie de nos bénéficiaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationImpacts.map((impact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {impact.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#010192]">
                    {impact.amount}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {impact.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de don */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center bg-[#010192] text-white rounded-t-lg">
              <CardTitle className="text-2xl">Effectuer un don</CardTitle>
              <CardDescription className="text-gray-200">
                Choisissez le montant et la méthode de paiement qui vous conviennent
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {/* Montants suggérés */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Montant suggéré</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["25 $", "50 $", "100 $", "200 $"].map((amount, index) => (
                    <button
                      key={index}
                      className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#7cc576] hover:bg-[#7cc576] hover:text-white transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <input
                    type="number"
                    placeholder="Autre montant ($)"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#7cc576] focus:ring-[#7cc576]"
                  />
                </div>
              </div>

              {/* Type de don */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Type de don</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <button className="p-4 border-2 border-[#7cc576] bg-[#7cc576] text-white rounded-lg">
                    Don unique
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-[#7cc576] transition-colors">
                    Don mensuel
                  </button>
                </div>
              </div>

              {/* Informations du donateur */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vos informations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prénom"
                    className="p-3 border border-gray-300 rounded-lg focus:border-[#7cc576] focus:ring-[#7cc576]"
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    className="p-3 border border-gray-300 rounded-lg focus:border-[#7cc576] focus:ring-[#7cc576]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3 border border-gray-300 rounded-lg focus:border-[#7cc576] focus:ring-[#7cc576]"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    className="p-3 border border-gray-300 rounded-lg focus:border-[#7cc576] focus:ring-[#7cc576]"
                  />
                </div>
                <div className="mt-4">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-[#7cc576] focus:ring-[#7cc576]" />
                    <span className="text-sm text-gray-600">Je souhaite rester anonyme</span>
                  </label>
                </div>
              </div>

              <Button className="w-full bg-[#7cc576] hover:bg-[#6bb565] text-white py-4 text-lg">
                <Heart className="h-5 w-5 mr-2" />
                Effectuer le don
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Méthodes de paiement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Méthodes de paiement</h2>
            <p className="text-lg text-gray-600">
              Plusieurs options sécurisées sont disponibles pour effectuer votre don
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Banknote className="h-8 w-8 text-[#7cc576] mx-auto mb-4" />
                  <CardTitle className="text-[#010192]">{method.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {method.description}
                  </CardDescription>
                  <Badge variant={method.available ? "default" : "secondary"} className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Disponible
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Témoignages de nos bénéficiaires</h2>
            <p className="text-lg text-gray-600">
              Découvrez comment vos dons changent concrètement des vies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <blockquote className="text-gray-700 italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-semibold text-[#010192]">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sécurité et transparence */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-[#7cc576] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sécurité et Transparence</h2>
          <p className="text-lg text-gray-600 mb-8">
            Nous nous engageons à utiliser vos dons de manière transparente et efficace. 
            Chaque don est traité de manière sécurisée et nous publions régulièrement 
            des rapports sur l'utilisation des fonds.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <CheckCircle className="h-8 w-8 text-[#7cc576] mx-auto mb-2" />
              <h3 className="font-semibold text-[#010192] mb-2">Paiements sécurisés</h3>
              <p className="text-sm text-gray-600">Toutes les transactions sont cryptées</p>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-[#7cc576] mx-auto mb-2" />
              <h3 className="font-semibold text-[#010192] mb-2">Transparence totale</h3>
              <p className="text-sm text-gray-600">Rapports financiers réguliers</p>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-[#7cc576] mx-auto mb-2" />
              <h3 className="font-semibold text-[#010192] mb-2">Impact mesurable</h3>
              <p className="text-sm text-gray-600">Suivi de l'utilisation des fonds</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Don;

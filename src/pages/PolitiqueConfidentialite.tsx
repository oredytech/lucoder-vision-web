
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, Lock, Mail } from "lucide-react";

const PolitiqueConfidentialite = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#010192] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Shield className="h-16 w-16 mx-auto mb-6 text-[#7cc576]" />
              <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
              <p className="text-xl opacity-90">
                LUCODER s'engage à protéger votre vie privée et vos données personnelles
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192] flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    LUCODER (Lutte Contre la Délinquance et l'Exode Rural) respecte votre 
                    vie privée et s'engage à protéger vos données personnelles. Cette 
                    politique de confidentialité vous informe sur la façon dont nous 
                    collectons, utilisons et protégeons vos informations personnelles 
                    lorsque vous visitez notre site web ou utilisez nos services.
                  </p>
                </CardContent>
              </Card>

              {/* Data Collection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Collecte des données</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Données que nous collectons</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Nom et prénom</li>
                      <li>Adresse e-mail</li>
                      <li>Numéro de téléphone</li>
                      <li>Organisation d'appartenance</li>
                      <li>Messages envoyés via nos formulaires de contact</li>
                      <li>Données de navigation (cookies, adresse IP, type de navigateur)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Comment nous collectons ces données</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Formulaires de contact et d'inscription</li>
                      <li>Abonnement à notre newsletter</li>
                      <li>Participation à nos événements</li>
                      <li>Navigation sur notre site web</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Data Usage */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Utilisation des données</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Nous utilisons vos données personnelles pour :</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Répondre à vos demandes d'information</li>
                    <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                    <li>Vous informer de nos activités et événements</li>
                    <li>Améliorer nos services et notre site web</li>
                    <li>Respecter nos obligations légales</li>
                    <li>Analyser l'utilisation de notre site web</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Protection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192] flex items-center">
                    <Lock className="h-5 w-5 mr-2" />
                    Protection des données
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Nous mettons en place des mesures techniques et organisationnelles 
                    appropriées pour protéger vos données personnelles contre :
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>L'accès non autorisé</li>
                    <li>La modification non autorisée</li>
                    <li>La divulgation non autorisée</li>
                    <li>La destruction accidentelle ou illégale</li>
                  </ul>
                  <p>
                    Vos données sont stockées sur des serveurs sécurisés et l'accès 
                    est limité aux personnes autorisées uniquement.
                  </p>
                </CardContent>
              </Card>

              {/* Data Sharing */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Partage des données</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Nous ne vendons, ne louons, ni ne partageons vos données personnelles 
                    avec des tiers, sauf dans les cas suivants :
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Avec votre consentement explicite</li>
                    <li>Avec nos partenaires pour la réalisation de projets communs (données anonymisées)</li>
                    <li>Pour respecter une obligation légale</li>
                    <li>Pour protéger nos droits et notre sécurité</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                    Les cookies sont de petits fichiers texte stockés sur votre appareil.
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">Types de cookies utilisés :</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                      <li><strong>Cookies analytiques :</strong> pour comprendre l'utilisation du site</li>
                      <li><strong>Cookies de préférence :</strong> pour mémoriser vos préférences</li>
                    </ul>
                  </div>
                  <p>
                    Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, 
                    mais cela peut affecter le fonctionnement du site.
                  </p>
                </CardContent>
              </Card>

              {/* Rights */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Vos droits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Vous disposez des droits suivants concernant vos données personnelles :</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                    <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
                    <li><strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
                    <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                    <li><strong>Droit de limitation :</strong> limiter le traitement de vos données</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Retention */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Conservation des données</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Nous conservons vos données personnelles uniquement pendant la durée 
                    nécessaire aux finalités pour lesquelles elles ont été collectées, 
                    ou selon les exigences légales applicables. En général :
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-4">
                    <li>Données de contact : 3 ans après le dernier contact</li>
                    <li>Newsletter : jusqu'à votre désinscription</li>
                    <li>Données de navigation : 13 mois maximum</li>
                  </ul>
                </CardContent>
              </Card>

              <Separator />

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192] flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Nous contacter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Pour toute question concernant cette politique de confidentialité 
                    ou pour exercer vos droits, vous pouvez nous contacter :
                  </p>
                  <div className="space-y-2">
                    <p><strong>E-mail :</strong> contact@lucoder.org</p>
                    <p><strong>Adresse :</strong> LUCODER, Goma, Nord-Kivu, RDC</p>
                  </div>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Modifications de cette politique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité 
                    à tout moment. Les modifications entreront en vigueur dès leur publication 
                    sur cette page. Nous vous encourageons à consulter régulièrement cette 
                    politique pour rester informé de nos pratiques en matière de protection 
                    des données.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center text-gray-600 text-sm">
                <p>Dernière mise à jour : Décembre 2024</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PolitiqueConfidentialite;

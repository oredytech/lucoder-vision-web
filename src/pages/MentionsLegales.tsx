
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";

const MentionsLegales = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#010192] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Mentions Légales</h1>
              <p className="text-xl opacity-90">
                Informations légales concernant LUCODER et ce site web
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Organisation Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Informations sur l'organisation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Dénomination sociale</h3>
                    <p>LUCODER (Lutte Contre la Délinquance et l'Exode Rural)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Statut juridique</h3>
                    <p>Organisation Non Gouvernementale (ONG) de droit congolais</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Date de création</h3>
                    <p>31 janvier 1996</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Siège social</h3>
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-5 w-5 text-[#010192] mt-0.5" />
                      <div>
                        <p>Goma, Province du Nord-Kivu</p>
                        <p>République Démocratique du Congo</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Coordonnées</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-[#010192]" />
                    <span>contact@lucoder.org</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-[#010192]" />
                    <span>+243 XXX XXX XXX</span>
                  </div>
                </CardContent>
              </Card>

              {/* Website Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Informations sur le site web</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Directeur de publication</h3>
                    <p>Directeur Exécutif de LUCODER</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Conception et développement</h3>
                    <p>Oredy TECHNOLOGIES</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Hébergement</h3>
                    <p>Service d'hébergement web professionnel</p>
                  </div>
                </CardContent>
              </Card>

              <Separator />

              {/* Intellectual Property */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Propriété intellectuelle</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    L'ensemble de ce site relève de la législation congolaise et internationale 
                    sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                    reproduction sont réservés, y compris pour les documents téléchargeables 
                    et les représentations iconographiques et photographiques.
                  </p>
                  <p>
                    La reproduction de tout ou partie de ce site sur un support électronique 
                    quel qu'il soit est formellement interdite sauf autorisation expresse 
                    de LUCODER.
                  </p>
                </CardContent>
              </Card>

              {/* Responsibility */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Responsabilité</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Les informations contenues sur ce site sont aussi précises que possible 
                    et le site est périodiquement remis à jour, mais peut toutefois contenir 
                    des inexactitudes, des omissions ou des lacunes.
                  </p>
                  <p>
                    Si vous constatez une lacune, erreur ou ce qui parait être un 
                    dysfonctionnement, merci de bien vouloir le signaler par e-mail à 
                    l'adresse contact@lucoder.org, en décrivant le problème de la façon 
                    la plus précise possible.
                  </p>
                  <p>
                    Tout contenu téléchargé se fait aux risques et périls de l'utilisateur 
                    et sous sa seule responsabilité.
                  </p>
                </CardContent>
              </Card>

              {/* External Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Liens externes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Ce site peut contenir des liens vers d'autres sites. LUCODER ne peut 
                    être tenue responsable du contenu de ces sites externes ni des 
                    dommages qui pourraient résulter de leur utilisation.
                  </p>
                </CardContent>
              </Card>

              {/* Applicable Law */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#010192]">Droit applicable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Tant le site que les modalités et conditions de son utilisation sont 
                    régis par le droit congolais, quel que soit le lieu d'utilisation. 
                    En cas de contestation éventuelle, et après l'échec de toute tentative 
                    de recherche d'une solution amiable, les tribunaux congolais seront 
                    seuls compétents pour connaître de ce litige.
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

export default MentionsLegales;

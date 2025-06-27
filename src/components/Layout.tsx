
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img src="/lovable-uploads/6a0cdfc8-4917-4012-af1f-41659d85515c.png" alt="LUCODER" className="h-12 w-auto" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <Link to="/" className="text-[#010192] font-medium whitespace-nowrap hover:text-[#010175] transition-colors">Accueil</Link>
              <Link to="/a-propos" className="text-gray-700 hover:text-[#010192] transition-colors whitespace-nowrap">À propos</Link>
              <Link to="/domaines-action" className="text-gray-700 hover:text-[#010192] transition-colors whitespace-nowrap">Domaines d'action</Link>
              <Link to="/projets" className="text-gray-700 hover:text-[#010192] transition-colors whitespace-nowrap">Projets</Link>
              <Link to="/actualites" className="text-gray-700 hover:text-[#010192] transition-colors whitespace-nowrap">Actualités</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#010192] transition-colors whitespace-nowrap">Contact</Link>
            </div>
            
            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link to="/don">
                <Button size="sm" className="bg-[#7cc576] hover:bg-[#6bb565] text-white whitespace-nowrap">
                  Faire un don
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#010192] hover:text-[#010175] p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="text-[#010192] font-medium px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
                <Link to="/a-propos" className="text-gray-700 hover:text-[#010192] transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>À propos</Link>
                <Link to="/domaines-action" className="text-gray-700 hover:text-[#010192] transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Domaines d'action</Link>
                <Link to="/projets" className="text-gray-700 hover:text-[#010192] transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Projets</Link>
                <Link to="/actualites" className="text-gray-700 hover:text-[#010192] transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Actualités</Link>
                <Link to="/contact" className="text-gray-700 hover:text-[#010192] transition-colors px-4 py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <div className="px-4 py-2">
                  <Link to="/don" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" className="bg-[#7cc576] hover:bg-[#6bb565] text-white w-full">
                      Faire un don
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/6a0cdfc8-4917-4012-af1f-41659d85515c.png" alt="LUCODER" className="h-8 w-auto" />
              </div>
              <p className="text-gray-400 mb-4">
                Lutte Contre la Délinquance et l'Exode Rural depuis 1996
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link to="/domaines-action" className="hover:text-white transition-colors">Domaines d'action</Link></li>
                <li><Link to="/projets" className="hover:text-white transition-colors">Projets</Link></li>
                <li><Link to="/actualites" className="hover:text-white transition-colors">Actualités</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/publications" className="hover:text-white transition-colors">Publications</Link></li>
                <li><Link to="/partenaires" className="hover:text-white transition-colors">Partenaires</Link></li>
                <li><Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
                <li><Link to="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <p>Goma, Nord-Kivu</p>
                <p>République Démocratique du Congo</p>
                <p>contact@lucoder.org</p>
                <p>+243 XXX XXX XXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LUCODER. Tous droits réservés.</p>
            <p className="mt-2">Fièrement conçu par <span className="text-[#7cc576]">Oredy TECHNOLOGIES</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

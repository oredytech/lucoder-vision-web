
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <img src="/lovable-uploads/6a0cdfc8-4917-4012-af1f-41659d85515c.png" alt="LUCODER" className="h-10 sm:h-12 w-auto" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-4 xl:space-x-6">
              <Link to="/" className="text-[#010192] font-medium whitespace-nowrap hover:text-[#010175] transition-colors text-sm xl:text-base">Accueil</Link>
              <Link to="/a-propos" className="text-gray-700 hover:text-[#010192] transition-colors whitespace-nowrap text-sm xl:text-base">À propos</Link>
              <Link to="/domaines-action" className="text-gray-700 hover:text-[#010192] transition-colors whitespace-nowrap text-sm xl:text-base">Domaines d'action</Link>
              <Link to="/projets" className="text-gray-700 hover:text-[#010192] transition-colors whitespace-nowrap text-sm xl:text-base">Projets</Link>
              <Link to="/actualites" className="text-gray-700 hover:text-[#010192] transition-colors whitespace-nowrap text-sm xl:text-base">Actualités</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#010192] transition-colors whitespace-nowrap text-sm xl:text-base">Contact</Link>
            </div>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:block flex-shrink-0">
              <Link to="/don">
                <Button size="sm" className="bg-[#7cc576] hover:bg-[#6bb565] text-white whitespace-nowrap text-sm">
                  Faire un don
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex-shrink-0">
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
            <div className="lg:hidden bg-white border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="text-[#010192] font-medium px-4 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
                <Link to="/a-propos" className="text-gray-700 hover:text-[#010192] transition-colors px-4 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>À propos</Link>
                <Link to="/domaines-action" className="text-gray-700 hover:text-[#010192] transition-colors px-4 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>Domaines d'action</Link>
                <Link to="/projets" className="text-gray-700 hover:text-[#010192] transition-colors px-4 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>Projets</Link>
                <Link to="/actualites" className="text-gray-700 hover:text-[#010192] transition-colors px-4 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>Actualités</Link>
                <Link to="/contact" className="text-gray-700 hover:text-[#010192] transition-colors px-4 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <div className="px-4 py-2">
                  <Link to="/don" onClick={() => setMobileMenuOpen(false)}>
                    <Button size="sm" className="bg-[#7cc576] hover:bg-[#6bb565] text-white w-full text-sm">
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
      <main className="overflow-x-hidden">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/6a0cdfc8-4917-4012-af1f-41659d85515c.png" alt="LUCODER" className="h-6 sm:h-8 w-auto" />
              </div>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Lutte Contre la Délinquance et l'Exode Rural depuis 1996
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a>
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link to="/domaines-action" className="hover:text-white transition-colors">Domaines d'action</Link></li>
                <li><Link to="/projets" className="hover:text-white transition-colors">Projets</Link></li>
                <li><Link to="/actualites" className="hover:text-white transition-colors">Actualités</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link to="/publications" className="hover:text-white transition-colors">Publications</Link></li>
                <li><Link to="/partenaires" className="hover:text-white transition-colors">Partenaires</Link></li>
                <li><Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
                <li><Link to="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2 text-sm sm:text-base">
                <p>Goma, Nord-Kivu</p>
                <p>République Démocratique du Congo</p>
                <p className="break-all">contact@lucoder.org</p>
                <p>+243 XXX XXX XXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2024 LUCODER. Tous droits réservés.</p>
            <p className="mt-2 text-sm sm:text-base">Fièrement conçu par <span className="text-[#7cc576]">Oredy TECHNOLOGIES</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

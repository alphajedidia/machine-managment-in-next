import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary-400 text-white py-8">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">À propos</h3>
          <p>
            Nous sommes une entreprise spécialisée dans la location d'engins.
            Notre objectif est de fournir les meilleurs services à nos clients.
          </p>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:underline">
                Accueil
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:underline">
                À propos
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
          <p className="mb-2">
            Adresse: 586 Tanambao, Fianarantsoa, Madagascar
          </p>
          <p className="mb-2">Téléphone: +261 34 76 566 73</p>
          <p className="mb-2">Email: alphajedidia01@gmail.com</p>
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full text-center py-4 border-t border-gray-400 mt-8">
        <p>&copy; 2024 Alpha Jedidia. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

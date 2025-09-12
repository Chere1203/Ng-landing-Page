import { Button } from "./ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function SocialSection() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/CoociqueNG",
      color: "bg-blue-600 hover:bg-blue-700",
      followers: "12.5K"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/coociqueng/#",
      color: "bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      followers: "8.3K"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "#",
      color: "bg-red-600 hover:bg-red-700",
      followers: "5.2K"
    },
    {
      name: "TikTok",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
        </svg>
      ),
      url: "#",
      color: "bg-black hover:bg-gray-800",
      followers: "15.7K"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Síguenos en <span className="text-primary">Redes Sociales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente al día con todas nuestras actividades, eventos y novedades. 
            ¡Únete a nuestra comunidad digital y no te pierdas nada!
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <div 
                key={index}
                className="group text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <Button
                    size="lg"
                    className={`w-20 h-20 rounded-2xl ${social.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8" />
                  </Button>
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                    {social.followers}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{social.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Síguenos para contenido exclusivo
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
                >
                  Seguir
                </Button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¡No te pierdas nuestro contenido exclusivo!
            </h3>
            <p className="text-gray-600 mb-8">
              Cada día compartimos tips de liderazgo, historias inspiradoras de nuestros 
              miembros, y las últimas novedades del movimiento cooperativo juvenil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
              >
                Síguenos en todas las redes
              </Button>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>+500 jóvenes ya nos siguen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hashtags */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Usa nuestros hashtags oficiales:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              #CoociqueNG
            </span>
            <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
              #NuevaGeneracion
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              #LiderazgoJuvenil
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              #CooperativismoJoven
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
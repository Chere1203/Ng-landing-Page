import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-yellow-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-primary">Coocique NG</span> –<br />
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Formamos líderes
              </span><br />
              para la nueva generación
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Descubre experiencias únicas, aprende valores cooperativos fundamentales 
              y sé parte del cambio que transformará el futuro de nuestra comunidad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              >
                Únete ahora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 text-lg"
              >
                Conoce más
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Jóvenes activos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-sm text-gray-600">Actividades anuales</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">15</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/Ng-landing-Page/LabNG.jpg"
                alt="Jóvenes participando en actividades cooperativas"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-xl shadow-lg transform rotate-[-10deg]">
              <div className="font-bold">¡Nuevo!</div>
              <div className="text-sm">Retos Digitales</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-4 py-2 rounded-xl shadow-lg transform rotate-[10deg]">
              <div className="font-bold">100% Gratis</div>
              <div className="text-sm">Para todos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
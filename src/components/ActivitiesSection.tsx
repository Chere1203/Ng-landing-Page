import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mountain, Wrench, Calendar, Gift } from "lucide-react";

export default function ActivitiesSection() {
  const activities = [
    {
      icon: Mountain,
      title: "Galeria De Fotos",
      description: "Expediciones y actividades al aire libre que fortalecen el trabajo en equipo y el liderazgo a través de experiencias únicas en la naturaleza.",
      image: "/Ng-landing-Page/Imagen1.jpg",
      color: "from-primary to-primary/80"
    },
    {
      icon: Wrench,
      title: "Talleres Especializados",
      description: "Workshops prácticos sobre cooperativismo, emprendimiento social, y desarrollo de habilidades blandas para el crecimiento personal.",
      image: "/Ng-landing-Page/Imagen2.jpg",
      color: "from-secondary to-secondary/80"
    },
    {
      icon: Calendar,
      title: "Próximos Eventos",
      description: "Únete a nuestros eventos especiales, talleres y actividades diseñadas para fortalecer la comunidad cooperativa juvenil.",
      image: "/Ng-landing-Page/ProxEven.jpg",
      color: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Gift,
      title: "Sorteos y Premios",
      description: "Reconocimientos y incentivos para participantes destacados, incluyendo becas de estudio y oportunidades de desarrollo profesional.",
      image: "/Ng-landing-Page/Eithan.jpg",
      color: "from-green-400 to-green-500"
    }
  ];

  return (
    <section id="actividades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Actividades y <span className="text-primary">Beneficios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre todas las experiencias emocionantes que tenemos preparadas 
            para ti. Cada actividad está diseñada para tu crecimiento personal y profesional.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-80`}></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>

                <CardContent className="pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>

                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
                    onClick={() => {
                      if (activity.title === "Talleres Especializados") {
                        window.location.hash = "talleres";
                      } else if (activity.title === "Coocique Aventura") {
                        window.location.hash = "aventura";
                      } else if (activity.title === "Próximos Eventos") {
                        window.location.hash = "eventos";
                      }
                    }}
                  >
                    {activity.title === "Talleres Especializados" ? "Ver Malla Curricular" : 
                     activity.title === "Coocique Aventura" ? "Ver Galería" : 
                     activity.title === "Próximos Eventos" ? "Ver Eventos" : "Ver más"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              ¿Por qué elegir Coocique NG?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Formación Integral</h4>
                <p className="text-gray-600 text-sm">
                  Desarrollo de habilidades técnicas y blandas para tu futuro profesional
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Red de Contactos</h4>
                <p className="text-gray-600 text-sm">
                  Conecta con jóvenes líderes de toda la región y expande tu red
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Certificaciones</h4>
                <p className="text-gray-600 text-sm">
                  Obtén certificaciones reconocidas en cooperativismo y liderazgo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Users, BookOpen, Leaf, Heart } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Users,
      title: "Liderazgo",
      description: "Desarrollamos habilidades de liderazgo juvenil para formar los dirigentes del mañana"
    },
    {
      icon: BookOpen,
      title: "Educación",
      description: "Programas educativos innovadores que combinan teoría y práctica cooperativa"
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Promovemos prácticas sostenibles y responsabilidad ambiental en todas nuestras actividades"
    },
    {
      icon: Heart,
      title: "Comunidad",
      description: "Fortalecemos los lazos comunitarios a través de valores cooperativos sólidos"
    }
  ];

  return (
    <section id="sobre-ng" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Qué es <span className="text-primary">Coocique NG</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Coocique Nueva Generación es un programa de formación integral diseñado 
            especialmente para niños, jóvenes y familias. Nos enfocamos en desarrollar 
            liderazgo, sostenibilidad y valores cooperativos que transformarán el futuro 
            de nuestra comunidad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Formar jóvenes líderes comprometidos con los principios cooperativos, 
                capaces de generar un impacto positivo en sus comunidades y construir 
                un futuro más justo y sostenible para todos.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Valores cooperativos
                </span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  Liderazgo juvenil
                </span>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                  Impacto social
                </span>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-4">
                <span className="text-3xl">🌟</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Excelencia Reconocida
              </h4>
              <p className="text-gray-600">
                15 años formando líderes en el movimiento cooperativo nacional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
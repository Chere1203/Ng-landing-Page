import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X, ChevronLeft, ChevronRight, Camera, Calendar, MapPin, Users } from "lucide-react";


export default function AdventureGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("todas");

  const adventures = [
    {
      id: 1,
      title: "Expedición Monte Verde",
      location: "Monteverde, Puntarenas",
      date: "Octubre 2024",
      participants: 25,
      category: "senderismo",
      description: "Una aventura inolvidable explorando los senderos nubosos de Monteverde, fortaleciendo vínculos y desarrollando liderazgo.",
      image: "/Imagen1.jpg",
      tags: ["Senderismo", "Naturaleza", "Trabajo en equipo"]
    },
    {
      id: 2,
      title: "Rafting Río Pacuare",
      location: "Río Pacuare, Cartago",
      date: "Septiembre 2024",
      participants: 18,
      category: "deportes",
      description: "Descenso en rafting por las emocionantes aguas del Pacuare, una experiencia que puso a prueba nuestro espíritu aventurero.",
      image: "https://images.unsplash.com/photo-1641584495061-89b9025f563b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWZ0aW5nJTIwd2hpdGUlMjB3YXRlciUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTczNDMyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Rafting", "Aventura", "Adrenalina"]
    },
    {
      id: 3,
      title: "Campamento Volcán Arenal",
      location: "La Fortuna, Alajuela",
      date: "Agosto 2024",
      participants: 32,
      category: "campamento",
      description: "Tres días de campamento bajo las estrellas cerca del majestuoso Volcán Arenal, compartiendo historias y lecciones de vida.",
      image: "https://images.unsplash.com/photo-1560356575-413d30aba6d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwZmlyZSUyMGdyb3VwJTIwbmlnaHR8ZW58MXx8fHwxNzU3MzQzMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Campamento", "Volcán", "Naturaleza"]
    },
    {
      id: 4,
      title: "Surf en Tamarindo",
      location: "Tamarindo, Guanacaste",
      date: "Julio 2024",
      participants: 20,
      category: "deportes",
      description: "Aprendimos a surfear las olas del Pacífico mientras fortalecíamos nuestros valores cooperativos en la playa.",
      image: "https://images.unsplash.com/photo-1715449187009-3838a52ef2df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJmaW5nJTIwZ3JvdXAlMjBiZWFjaCUyMHdhdmVzfGVufDF8fHx8MTc1NzM0MzIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Surf", "Playa", "Deportes acuáticos"]
    },
    {
      id: 5,
      title: "Canopy en Manuel Antonio",
      location: "Manuel Antonio, Puntarenas",
      date: "Junio 2024",
      participants: 15,
      category: "aventura",
      description: "Volamos entre las copas de los árboles del Parque Nacional Manuel Antonio, una experiencia que nos conectó con la naturaleza.",
      image: "https://images.unsplash.com/photo-1640895236626-6435d5205789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aXBsaW5lJTIwY2Fub3B5JTIwZm9yZXN0JTIwYWR2ZW50dXJlfGVufDF8fHx8MTc1NzM0MzIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Canopy", "Aventura", "Bosque"]
    },
    {
      id: 6,
      title: "Buceo en Isla del Coco",
      location: "Isla del Coco, Puntarenas",
      date: "Mayo 2024",
      participants: 12,
      category: "deportes",
      description: "Una expedición submarina única explorando la biodiversidad marina de la Isla del Coco, patrimonio de la humanidad.",
      image: "https://images.unsplash.com/photo-1682957205538-7ba9957b01a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjB1bmRlcndhdGVyJTIwb2NlYW4lMjBncm91cHxlbnwxfHx8fDE3NTczNDMyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Buceo", "Océano", "Biodiversidad"]
    },
    {
      id: 7,
      title: "Escalada en Cerro Chirripó",
      location: "Chirripó, San Gerardo de Rivas",
      date: "Abril 2024",
      participants: 22,
      category: "senderismo",
      description: "Conquistamos la cima más alta de Costa Rica, una experiencia que nos enseñó sobre perseverancia y trabajo en equipo.",
      image: "https://images.unsplash.com/photo-1604766038176-736d6d72d652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNsaW1iaW5nJTIwcm9jayUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NTczNDMyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Escalada", "Montaña", "Perseverancia"]
    },
    {
      id: 8,
      title: "Kayak en Tortuguero",
      location: "Tortuguero, Limón",
      date: "Marzo 2024",
      participants: 16,
      category: "aventura",
      description: "Navegamos por los canales de Tortuguero observando la increíble fauna local y aprendiendo sobre conservación.",
      image: "https://images.unsplash.com/photo-1745853707144-da72615a8c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXlha2luZyUyMHJpdmVyJTIwbmF0dXJlJTIwZ3JvdXB8ZW58MXx8fHwxNzU3MzQzMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Kayak", "Canales", "Conservación"]
    },
    {
      id: 9,
      title: "Tirolesa en la Península de Osa",
      location: "Península de Osa, Puntarenas",
      date: "Febrero 2024",
      participants: 19,
      category: "aventura",
      description: "Experiencia única volando sobre el bosque lluvioso tropical más biodiverso del país.",
      image: "https://images.unsplash.com/photo-1753672036597-315a534d164e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aXBsaW5lJTIwZm9yZXN0JTIwY2Fub3B5JTIwdG91cnxlbnwxfHx8fDE3NTczNDMyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Tirolesa", "Bosque lluvioso", "Biodiversidad"]
    }
  ];

  const categories = [
    { id: "todas", name: "Todas las aventuras", count: adventures.length },
    { id: "senderismo", name: "Senderismo", count: adventures.filter(a => a.category === "senderismo").length },
    { id: "deportes", name: "Deportes acuáticos", count: adventures.filter(a => a.category === "deportes").length },
    { id: "campamento", name: "Campamentos", count: adventures.filter(a => a.category === "campamento").length },
    { id: "aventura", name: "Aventura extrema", count: adventures.filter(a => a.category === "aventura").length }
  ];

  const filteredAdventures = filter === "todas" 
    ? adventures 
    : adventures.filter(adventure => adventure.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredAdventures.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredAdventures.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <Camera className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Galería de Aventuras</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-primary">Coocique</span> Aventura
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Revive nuestras experiencias más emocionantes. Cada aventura es una oportunidad 
            de crecimiento, aprendizaje y creación de vínculos que duran toda la vida.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{adventures.length}</div>
              <div className="text-sm text-gray-600">Aventuras realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">200+</div>
              <div className="text-sm text-gray-600">Participantes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">12</div>
              <div className="text-sm text-gray-600">Meses de aventuras</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Experiencias únicas</div>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                filter === category.id 
                  ? "bg-primary hover:bg-primary/90 text-white" 
                  : "hover:bg-primary/10 hover:text-primary hover:border-primary"
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAdventures.map((adventure, index) => (
            <Card 
              key={adventure.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-2">{adventure.title}</h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{adventure.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{adventure.date}</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {categories.find(c => c.id === adventure.category)?.name || adventure.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-semibold">Ver galería completa</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {adventure.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{adventure.participants} participantes</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {adventure.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para tu próxima aventura?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a Coocique NG y sé parte de experiencias únicas que transformarán tu vida. 
              Cada aventura es una oportunidad de crecimiento personal y construcción de vínculos duraderos.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              onClick={() => window.location.hash = "contacto"}
            >
              Únete a la próxima aventura
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image */}
            <ImageWithFallback
              src={filteredAdventures[selectedImage].image}
              alt={filteredAdventures[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
              <h3 className="text-2xl font-bold mb-2">
                {filteredAdventures[selectedImage].title}
              </h3>
              <p className="text-gray-200 mb-4">
                {filteredAdventures[selectedImage].description}
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{filteredAdventures[selectedImage].location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{filteredAdventures[selectedImage].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{filteredAdventures[selectedImage].participants} participantes</span>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {filteredAdventures.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
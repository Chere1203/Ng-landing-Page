import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { CalendarDays, Clock, MapPin, Users, Phone, Mail, User, Calendar as CalendarIcon, Filter } from "lucide-react";
import { toast } from "sonner@2.0.3";

export default function UpcomingEvents() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    motivation: "",
    eventId: ""
  });

  const events = [
    {
      id: 1,
      title: "Taller de Liderazgo Cooperativo",
      subtitle: "Descubre tu potencial como líder",
      date: "15 de Febrero, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Centro de Convenciones, San José",
      category: "taller",
      maxParticipants: 30,
      currentParticipants: 18,
      price: "Gratuito",
      description: "Un día completo dedicado a desarrollar habilidades de liderazgo específicas para el movimiento cooperativo. Incluye dinámicas grupales, casos de estudio y networking.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwd29ya3Nob3AlMjBncm91cHxlbnwxfHx8fDE3NTczNzAwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Certificado de participación", "Material didáctico incluido", "Almuerzo incluido", "Red de contactos"],
      requirements: ["Entre 16-30 años", "Interés en cooperativismo", "Compromiso de participación completa"]
    },
    {
      id: 2,
      title: "Hackathon Social 2025",
      subtitle: "Tecnología para el bien común",
      date: "22-23 de Febrero, 2025",
      time: "24 horas continuas",
      location: "Universidad de Costa Rica, San Pedro",
      category: "competencia",
      maxParticipants: 60,
      currentParticipants: 42,
      price: "₡15,000",
      description: "Evento de 24 horas donde equipos multidisciplinarios desarrollan soluciones tecnológicas para desafíos sociales y cooperativos. Premios en efectivo y mentorías.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjB0ZWNobm9sb2d5JTIwZ3JvdXB8ZW58MXx8fHwxNzU3MzcwMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Premios hasta ₡500,000", "Mentores expertos", "Networking tecnológico", "Comidas incluidas"],
      requirements: ["Conocimientos básicos de programación", "Formar equipo de 3-5 personas", "Traer laptop propia"]
    },
    {
      id: 3,
      title: "Retiro de Emprendimiento Cooperativo",
      subtitle: "3 días transformadores en la naturaleza",
      date: "8-10 de Marzo, 2025",
      time: "Check-in viernes 6:00 PM",
      location: "Lodge Selvatura, Monteverde",
      category: "retiro",
      maxParticipants: 25,
      currentParticipants: 12,
      price: "₡85,000",
      description: "Retiro inmersivo de fin de semana en Monteverde, combinando talleres de emprendimiento, actividades de team building y conexión con la naturaleza.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRyZWF0JTIwbW91bnRhaW4lMjBncm91cHxlbnwxfHx8fDE3NTczNzAwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Hospedaje 2 noches", "Todas las comidas", "Actividades de aventura", "Certificado de participación"],
      requirements: ["Mayores de 18 años", "Buena condición física", "Espíritu aventurero", "50% anticipo requerido"]
    },
    {
      id: 4,
      title: "Feria de Innovación Cooperativa",
      subtitle: "Expone tu proyecto al mundo",
      date: "20 de Marzo, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Centro Nacional de Convenciones",
      category: "feria",
      maxParticipants: 100,
      currentParticipants: 67,
      price: "Gratuito",
      description: "Evento donde jóvenes emprendedores presentan sus proyectos cooperativos. Incluye stands, pitches, networking y premios para los mejores proyectos.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwZmFpciUyMGV4aGliaXRpb258ZW58MXx8fHwxNTczNzAwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Exposición de proyectos", "Competencia de pitches", "Premios en efectivo", "Networking empresarial"],
      requirements: ["Tener un proyecto cooperativo", "Preparar presentación de 5 min", "Material promocional propio"]
    },
    {
      id: 5,
      title: "Congreso Juvenil Cooperativo",
      subtitle: "El futuro del cooperativismo",
      date: "5-6 de Abril, 2025",
      time: "8:00 AM - 5:00 PM (ambos días)",
      location: "Hotel Presidente, San José",
      category: "congreso",
      maxParticipants: 200,
      currentParticipants: 89,
      price: "₡25,000",
      description: "Congreso de dos días con ponencias magistrales, paneles de discusión y talleres especializados sobre el futuro del movimiento cooperativo en América Latina.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnQlMjBhdWRpZW5jZXxlbnwxfHx8fDE1NzM3MDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Ponentes internacionales", "Certificado oficial", "Networking premium", "Kit de materiales"],
      requirements: ["Estudiante o profesional joven", "Interés en cooperativismo", "Registro anticipado"]
    },
    {
      id: 6,
      title: "Eco-Aventura Cooperativa",
      subtitle: "Sostenibilidad en acción",
      date: "19 de Abril, 2025",
      time: "7:00 AM - 6:00 PM",
      location: "Parque Nacional Manuel Antonio",
      category: "aventura",
      maxParticipants: 40,
      currentParticipants: 28,
      price: "₡35,000",
      description: "Día completo de actividades eco-turísticas combinadas con talleres sobre sostenibilidad y cooperativismo ambiental. Incluye senderismo, playa y actividades grupales.",
      image: "https://images.unsplash.com/photo-1531590878845-12627191e687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBhZHZlbnR1cmUlMjBncm91cCUyMG5hdHVyZXxlbnwxfHx8fDE1NzM3MDA1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      highlights: ["Transporte incluido", "Guía especializado", "Almuerzo ecológico", "Actividades de playa"],
      requirements: ["Buena condición física", "Traje de baño", "Protector solar", "Espíritu colaborativo"]
    }
  ];

  const categories = [
    { id: "todos", name: "Todos los eventos", count: events.length },
    { id: "taller", name: "Talleres", count: events.filter(e => e.category === "taller").length },
    { id: "competencia", name: "Competencias", count: events.filter(e => e.category === "competencia").length },
    { id: "retiro", name: "Retiros", count: events.filter(e => e.category === "retiro").length },
    { id: "feria", name: "Ferias", count: events.filter(e => e.category === "feria").length },
    { id: "congreso", name: "Congresos", count: events.filter(e => e.category === "congreso").length },
    { id: "aventura", name: "Eco-aventuras", count: events.filter(e => e.category === "aventura").length }
  ];

  const filteredEvents = selectedCategory === "todos" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const handleRegistration = (eventId: string) => {
    if (!registrationData.name || !registrationData.email || !registrationData.phone) {
      toast.error("Por favor complete todos los campos obligatorios");
      return;
    }

    // Simulate registration
    toast.success(`¡Inscripción exitosa! Te hemos registrado para el evento. Te contactaremos pronto.`);
    
    // Reset form
    setRegistrationData({
      name: "",
      email: "",
      phone: "",
      age: "",
      experience: "",
      motivation: "",
      eventId: ""
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      taller: "bg-primary/10 text-primary",
      competencia: "bg-red-100 text-red-700",
      retiro: "bg-green-100 text-green-700",
      feria: "bg-yellow-100 text-yellow-700",
      congreso: "bg-purple-100 text-purple-700",
      aventura: "bg-blue-100 text-blue-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  const getAvailabilityColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage >= 90) return "text-red-600";
    if (percentage >= 70) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <CalendarIcon className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Próximos Eventos</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Únete a Nuestros <span className="text-primary">Eventos</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre una variedad de eventos diseñados para fortalecer tu crecimiento personal, 
            ampliar tu red de contactos y contribuir al movimiento cooperativo juvenil.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{events.length}</div>
              <div className="text-sm text-gray-600">Eventos disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">
                {events.reduce((sum, event) => sum + event.currentParticipants, 0)}
              </div>
              <div className="text-sm text-gray-600">Inscritos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {events.filter(e => e.price === "Gratuito").length}
              </div>
              <div className="text-sm text-gray-600">Eventos gratuitos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-gray-600">Categorías</div>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filtrar por categoría:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? "bg-primary hover:bg-primary/90 text-white" 
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <Card 
              key={event.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={getCategoryColor(event.category)}>
                    {categories.find(c => c.id === event.category)?.name.replace(/s$/, '')}
                  </Badge>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {event.price}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight mb-1">{event.title}</CardTitle>
                    <p className="text-sm text-gray-600">{event.subtitle}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Event Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarDays className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className={getAvailabilityColor(event.currentParticipants, event.maxParticipants)}>
                      {event.currentParticipants}/{event.maxParticipants} inscritos
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>

                {/* Registration Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      disabled={event.currentParticipants >= event.maxParticipants}
                      onClick={() => setRegistrationData(prev => ({ ...prev, eventId: event.id.toString() }))}
                    >
                      {event.currentParticipants >= event.maxParticipants ? "Cupos agotados" : "Inscribirse ahora"}
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-primary">
                        Inscripción: {event.title}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6">
                      {/* Event Summary */}
                      <div className="bg-primary/5 rounded-lg p-4">
                        <h3 className="font-semibold text-lg mb-3">Resumen del evento</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="w-4 h-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">Precio:</span>
                            <span className="text-primary font-bold">{event.price}</span>
                          </div>
                        </div>
                        
                        {/* Highlights */}
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Lo que incluye:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.highlights.map((highlight, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Requirements */}
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Requisitos:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {event.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Registration Form */}
                      <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        handleRegistration(event.id.toString());
                      }}>
                        <h3 className="font-semibold text-lg">Información personal</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nombre completo *</Label>
                            <Input
                              id="name"
                              value={registrationData.name}
                              onChange={(e) => setRegistrationData(prev => ({ ...prev, name: e.target.value }))}
                              placeholder="Tu nombre completo"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="age">Edad</Label>
                            <Input
                              id="age"
                              type="number"
                              value={registrationData.age}
                              onChange={(e) => setRegistrationData(prev => ({ ...prev, age: e.target.value }))}
                              placeholder="Tu edad"
                              min="16"
                              max="35"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Correo electrónico *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={registrationData.email}
                              onChange={(e) => setRegistrationData(prev => ({ ...prev, email: e.target.value }))}
                              placeholder="tu@email.com"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone">Teléfono *</Label>
                            <Input
                              id="phone"
                              value={registrationData.phone}
                              onChange={(e) => setRegistrationData(prev => ({ ...prev, phone: e.target.value }))}
                              placeholder="+506 8888-8888"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="experience">Experiencia con cooperativismo</Label>
                          <Select 
                            value={registrationData.experience} 
                            onValueChange={(value) => setRegistrationData(prev => ({ ...prev, experience: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona tu nivel de experiencia" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ninguna">Sin experiencia</SelectItem>
                              <SelectItem value="basica">Conocimientos básicos</SelectItem>
                              <SelectItem value="intermedia">Experiencia intermedia</SelectItem>
                              <SelectItem value="avanzada">Experiencia avanzada</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="motivation">¿Por qué quieres participar en este evento?</Label>
                          <Textarea
                            id="motivation"
                            value={registrationData.motivation}
                            onChange={(e) => setRegistrationData(prev => ({ ...prev, motivation: e.target.value }))}
                            placeholder="Cuéntanos qué te motiva a participar..."
                            className="min-h-[100px]"
                          />
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <h4 className="font-medium text-yellow-800 mb-2">Política de inscripción</h4>
                          <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• La inscripción se confirmará por correo electrónico</li>
                            <li>• Para eventos pagos, se requiere pago anticipado</li>
                            <li>• Cancelaciones hasta 48 horas antes del evento</li>
                            <li>• Cupos limitados, se asignan por orden de inscripción</li>
                          </ul>
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                          Completar inscripción
                        </Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encuentras el evento perfecto para ti?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Mantente al día con nuestros próximos eventos y sé el primero en conocer 
              nuevas oportunidades de crecimiento y networking en el movimiento cooperativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                onClick={() => window.location.hash = "contacto"}
              >
                Sugiere un evento
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
                onClick={() => window.location.hash = "unete"}
              >
                Únete a la newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¡Contáctanos y <span className="text-primary">únete ya</span>!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              ¿Tienes preguntas? ¿Quieres saber más sobre nuestros programas? 
              Estamos aquí para ayudarte a dar el primer paso hacia tu futuro.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Teléfono</div>
                  <div className="text-gray-600">+506 2234-5678</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">info@coociqueng.cr</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Dirección</div>
                  <div className="text-gray-600">
                    Av. Central, San José<br />
                    Costa Rica
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
              <h3 className="font-bold text-gray-900 mb-3">Horarios de Atención</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="font-medium">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">
                Formulario de Contacto Rápido
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Tu nombre" 
                      className="bg-gray-50 border-gray-200 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellidos</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Tus apellidos" 
                      className="bg-gray-50 border-gray-200 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@email.com" 
                    className="bg-gray-50 border-gray-200 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+506 1234-5678" 
                    className="bg-gray-50 border-gray-200 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Edad</Label>
                  <Input 
                    id="age" 
                    type="number" 
                    placeholder="¿Cuántos años tienes?" 
                    className="bg-gray-50 border-gray-200 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Cuéntanos sobre ti y qué te interesa de Coocique NG..." 
                    rows={4}
                    className="bg-gray-50 border-gray-200 focus:border-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas que nos pongamos en contacto contigo 
                  para brindarte información sobre nuestros programas.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
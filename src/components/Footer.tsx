import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Heart, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">NG</span>
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">Coocique NG</h3>
                <p className="text-gray-400 text-sm">Nueva Generación</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Formando líderes cooperativos para construir un futuro más justo, 
              sostenible y próspero para toda nuestra comunidad.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-ng" className="text-gray-400 hover:text-white transition-colors">
                  Sobre NG
                </a>
              </li>
              <li>
                <a href="#actividades" className="text-gray-400 hover:text-white transition-colors">
                  Actividades
                </a>
              </li>
              <li>
                <a href="#talleres" className="text-gray-400 hover:text-white transition-colors">
                  Talleres Especializados
                </a>
              </li>
              <li>
                <a href="#unete" className="text-gray-400 hover:text-white transition-colors">
                  Únete
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nuestros Programas</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Coocique Aventura
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Talleres Especializados
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Retos Digitales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sorteos y Premios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Certificaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Información de Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Avenida Central, San José<br />
                    Costa Rica, 10101
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:+50622345678" className="text-gray-400 hover:text-white transition-colors">
                  +506 2234-5678
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href="mailto:info@coociqueng.cr" className="text-gray-400 hover:text-white transition-colors">
                  info@coociqueng.cr
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h5 className="font-medium mb-3">Horarios de Atención</h5>
              <div className="space-y-1 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Lun - Vie:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">
              © 2025 Coocique Nueva Generación. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Aviso Legal
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>para la nueva generación</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/Ng-landing-Page/LogoNG.png"
                alt="Logo NG"
                className="h-10 w-10 rounded-lg object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">Coocique NG</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#sobre-ng" className="text-gray-700 hover:text-primary transition-colors">
              Sobre NG
            </a>
            <a href="#actividades" className="text-gray-700 hover:text-primary transition-colors">
              Actividades
            </a>
            <a href="#aventura" className="text-gray-700 hover:text-primary transition-colors">
              Fotos
            </a>
            <a href="#eventos" className="text-gray-700 hover:text-primary transition-colors">
              Eventos
            </a>
            <a href="#talleres" className="text-gray-700 hover:text-primary transition-colors">
              Talleres
            </a>
            <a href="#unete" className="text-gray-700 hover:text-primary transition-colors">
              Únete
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white">
              Hazte miembro
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Search, BookOpen, Clock, CheckCircle, XCircle, Users, Calendar } from "lucide-react";

// Datos mock de estudiantes
const mockStudents = {
  "123456789": {
    name: "María González Rodríguez",
    cedula: "1-2345-6789",
    email: "maria.gonzalez@email.com",
    phone: "+506 8765-4321",
    enrollmentDate: "2024-01-15",
    completedCourses: ["FU-101", "FU-102", "LE-201", "LE-202", "CO-301"],
    currentCourses: ["CO-302", "EM-401"],
    pendingCourses: ["EM-402", "SO-501", "SO-502"]
  },
  "987654321": {
    name: "Carlos Méndez Vargas",
    cedula: "9-8765-4321",
    email: "carlos.mendez@email.com",
    phone: "+506 2234-5678",
    enrollmentDate: "2024-03-10",
    completedCourses: ["FU-101", "FU-102"],
    currentCourses: ["LE-201", "LE-202"],
    pendingCourses: ["CO-301", "CO-302", "EM-401", "EM-402", "SO-501", "SO-502"]
  },
  "456789123": {
    name: "Ana Lucía Herrera Castro",
    cedula: "4-5678-9123",
    email: "ana.herrera@email.com",
    phone: "+506 8888-9999",
    enrollmentDate: "2023-09-20",
    completedCourses: ["FU-101", "FU-102", "LE-201", "LE-202", "CO-301", "CO-302", "EM-401", "EM-402"],
    currentCourses: ["SO-501"],
    pendingCourses: ["SO-502"]
  }
};

// Estructura curricular
const curriculum = {
  "Bloque I: Fundamentos": {
    color: "from-primary to-primary/80",
    courses: [
      {
        code: "FU-101",
        name: "Introducción al Cooperativismo",
        hours: 40,
        description: "Principios básicos y valores cooperativos fundamentales"
      },
      {
        code: "FU-102", 
        name: "Historia del Movimiento Cooperativo",
        hours: 30,
        description: "Evolución histórica del cooperativismo mundial y nacional"
      }
    ]
  },
  "Bloque II: Liderazgo": {
    color: "from-secondary to-secondary/80",
    courses: [
      {
        code: "LE-201",
        name: "Liderazgo Juvenil",
        hours: 35,
        description: "Desarrollo de habilidades de liderazgo para jóvenes"
      },
      {
        code: "LE-202",
        name: "Comunicación Efectiva",
        hours: 25,
        description: "Técnicas de comunicación y oratoria"
      }
    ]
  },
  "Bloque III: Cooperativismo Aplicado": {
    color: "from-yellow-500 to-yellow-600",
    courses: [
      {
        code: "CO-301",
        name: "Gestión Cooperativa",
        hours: 45,
        description: "Principios de administración en organizaciones cooperativas"
      },
      {
        code: "CO-302",
        name: "Economía Social",
        hours: 40,
        description: "Fundamentos económicos del sector cooperativo"
      }
    ]
  },
  "Bloque IV: Emprendimiento": {
    color: "from-green-500 to-green-600",
    courses: [
      {
        code: "EM-401",
        name: "Emprendimiento Cooperativo",
        hours: 50,
        description: "Desarrollo de proyectos cooperativos innovadores"
      },
      {
        code: "EM-402",
        name: "Plan de Negocios Cooperativo",
        hours: 45,
        description: "Elaboración de planes de negocio para cooperativas"
      }
    ]
  },
  "Bloque V: Sostenibilidad": {
    color: "from-purple-500 to-purple-600",
    courses: [
      {
        code: "SO-501",
        name: "Desarrollo Sostenible",
        hours: 40,
        description: "Principios de sostenibilidad en organizaciones cooperativas"
      },
      {
        code: "SO-502",
        name: "Responsabilidad Social Cooperativa",
        hours: 35,
        description: "Impacto social y ambiental de las cooperativas"
      }
    ]
  }
};

export default function WorkshopsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const handleSearch = () => {
    const cleanSearch = searchTerm.replace(/-/g, "");
    const student = mockStudents[cleanSearch as keyof typeof mockStudents];
    setSelectedStudent(student || null);
  };

  const getStatusIcon = (courseCode: string, student: any) => {
    if (!student) return <Clock className="w-4 h-4 text-gray-400" />;
    
    if (student.completedCourses.includes(courseCode)) {
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    } else if (student.currentCourses.includes(courseCode)) {
      return <Clock className="w-4 h-4 text-yellow-500" />;
    } else {
      return <XCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (courseCode: string, student: any) => {
    if (!student) return null;
    
    if (student.completedCourses.includes(courseCode)) {
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Completado</Badge>;
    } else if (student.currentCourses.includes(courseCode)) {
      return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">En Curso</Badge>;
    } else {
      return <Badge variant="outline" className="text-gray-500">Pendiente</Badge>;
    }
  };

  const calculateProgress = (student: any) => {
    if (!student) return 0;
    const totalCourses = student.completedCourses.length + student.currentCourses.length + student.pendingCourses.length;
    return Math.round((student.completedCourses.length / totalCourses) * 100);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Talleres <span className="text-primary">Especializados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nuestra malla curricular está diseñada para formar líderes cooperativos integrales 
            a través de un programa estructurado en 5 bloques temáticos.
          </p>

          {/* Search Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Consulta tu Progreso Académico
            </h3>
            <div className="flex gap-4">
              <Input
                placeholder="Ingresa tu número de cédula (ej: 1-2345-6789)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1"
              />
              <Button 
                onClick={handleSearch}
                className="bg-primary hover:bg-primary/90"
              >
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </Button>
            </div>
            
            {searchTerm && !selectedStudent && (
              <p className="text-sm text-red-600 mt-2">
                No se encontró información para la cédula ingresada
              </p>
            )}
          </div>
        </div>

        {/* Student Info */}
        {selectedStudent && (
          <div className="mb-12">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{selectedStudent.name}</CardTitle>
                    <p className="text-primary-foreground/80">
                      Cédula: {selectedStudent.cedula} • Matriculado desde: {new Date(selectedStudent.enrollmentDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{calculateProgress(selectedStudent)}%</div>
                    <div className="text-sm text-primary-foreground/80">Completado</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600">{selectedStudent.completedCourses.length}</div>
                    <div className="text-sm text-gray-600">Cursos Completados</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">{selectedStudent.currentCourses.length}</div>
                    <div className="text-sm text-gray-600">Cursos Actuales</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="w-8 h-8 text-gray-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-600">{selectedStudent.pendingCourses.length}</div>
                    <div className="text-sm text-gray-600">Cursos Pendientes</div>
                  </div>
                </div>
                <Progress 
                  value={calculateProgress(selectedStudent)} 
                  className="w-full h-3"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                  Progreso general en la malla curricular
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Curriculum Grid */}
        <div className="space-y-8">
          {Object.entries(curriculum).map(([blockName, blockData]) => (
            <Card key={blockName} className="overflow-hidden border-0 shadow-lg">
              <CardHeader className={`bg-gradient-to-r ${blockData.color} text-white`}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{blockName}</CardTitle>
                  <Badge className="bg-white/20 text-white hover:bg-white/20">
                    {blockData.courses.length} cursos
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {blockData.courses.map((course) => (
                    <Card key={course.code} className="bg-gray-50 border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            {getStatusIcon(course.code, selectedStudent)}
                            <div>
                              <h4 className="font-bold text-gray-900">{course.code}</h4>
                              <p className="text-sm text-gray-600">{course.hours} horas</p>
                            </div>
                          </div>
                          {getStatusBadge(course.code, selectedStudent)}
                        </div>
                        
                        <h3 className="font-bold text-gray-900 mb-2">{course.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-2">
                            <Users className="w-3 h-3" />
                            <span>25 estudiantes max</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-3 h-3" />
                            <span>Modalidad presencial</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Información del Programa
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestro programa de talleres especializados está diseñado para ser completado 
              en un período de 12 meses, con una modalidad mixta que combina sesiones presenciales 
              y actividades prácticas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">10 Cursos</h4>
              <p className="text-gray-600 text-sm">Distribuidos en 5 bloques temáticos</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">385 Horas</h4>
              <p className="text-gray-600 text-sm">Total de formación académica</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Certificación</h4>
              <p className="text-gray-600 text-sm">Reconocimiento oficial al completar</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">100% Gratis</h4>
              <p className="text-gray-600 text-sm">Sin costo para miembros de Coocique NG</p>
            </div>
          </div>
        </div>

        {/* Demo Users */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-6">
          <h4 className="font-bold text-gray-900 mb-4 text-center">
            🔍 Prueba el sistema con estas cédulas de demostración:
          </h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchTerm("1-2345-6789")}>
              1-2345-6789 (María González)
            </Badge>
            <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchTerm("9-8765-4321")}>
              9-8765-4321 (Carlos Méndez)
            </Badge>
            <Badge variant="outline" className="cursor-pointer" onClick={() => setSearchTerm("4-5678-9123")}>
              4-5678-9123 (Ana Lucía Herrera)
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
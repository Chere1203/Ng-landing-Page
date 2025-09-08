// Data for the workshops application

// Mock student data
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

// Curriculum structure
const curriculum = {
  "Bloque I: Fundamentos": {
    color: "primary",
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
    color: "secondary",
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
    color: "yellow",
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
    color: "green",
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
    color: "purple",
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
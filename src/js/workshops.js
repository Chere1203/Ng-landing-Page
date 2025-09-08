// Workshops functionality for student search and curriculum display

document.addEventListener('DOMContentLoaded', function() {
    initializeWorkshops();
});

function initializeWorkshops() {
    initializeSearch();
    initializeCurriculum();
    
    console.log('Workshops section initialized');
}

// Initialize search functionality
function initializeSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const cedulaInput = document.getElementById('cedulaInput');
    const searchError = document.getElementById('searchError');
    
    if (searchBtn && cedulaInput) {
        searchBtn.addEventListener('click', handleSearch);
        
        cedulaInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
        
        cedulaInput.addEventListener('input', function() {
            searchError.style.display = 'none';
        });
    }
}

// Handle student search
function handleSearch() {
    const cedulaInput = document.getElementById('cedulaInput');
    const searchError = document.getElementById('searchError');
    const studentInfo = document.getElementById('studentInfo');
    
    const searchTerm = cedulaInput.value.trim();
    if (!searchTerm) {
        showSearchError('Por favor ingresa un número de cédula');
        return;
    }
    
    const cleanSearch = searchTerm.replace(/-/g, '');
    const student = mockStudents[cleanSearch];
    
    if (student) {
        displayStudentInfo(student);
        updateCurriculumWithStudent(student);
        searchError.style.display = 'none';
        studentInfo.style.display = 'block';
        
        // Scroll to student info
        setTimeout(() => {
            studentInfo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        showSearchError('No se encontró información para la cédula ingresada');
        studentInfo.style.display = 'none';
        updateCurriculumWithStudent(null);
    }
}

// Show search error
function showSearchError(message) {
    const searchError = document.getElementById('searchError');
    searchError.textContent = message;
    searchError.style.display = 'block';
}

// Display student information
function displayStudentInfo(student) {
    // Update student details
    document.getElementById('studentName').textContent = student.name;
    document.getElementById('studentData').textContent = 
        `Cédula: ${student.cedula} • Matriculado desde: ${formatDate(student.enrollmentDate)}`;
    
    // Update counts
    document.getElementById('completedCount').textContent = student.completedCourses.length;
    document.getElementById('currentCount').textContent = student.currentCourses.length;
    document.getElementById('pendingCount').textContent = student.pendingCourses.length;
    
    // Update progress
    const progress = calculateProgress(student);
    document.getElementById('progressPercentage').textContent = `${progress}%`;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

// Calculate student progress
function calculateProgress(student) {
    if (!student) return 0;
    const totalCourses = student.completedCourses.length + student.currentCourses.length + student.pendingCourses.length;
    return Math.round((student.completedCourses.length / totalCourses) * 100);
}

// Initialize curriculum display
function initializeCurriculum() {
    const curriculumGrid = document.getElementById('curriculumGrid');
    if (!curriculumGrid) return;
    
    curriculumGrid.innerHTML = '';
    
    Object.entries(curriculum).forEach(([blockName, blockData]) => {
        const blockElement = createCurriculumBlock(blockName, blockData);
        curriculumGrid.appendChild(blockElement);
    });
}

// Create curriculum block element
function createCurriculumBlock(blockName, blockData, student = null) {
    const blockDiv = document.createElement('div');
    blockDiv.className = 'curriculum-block';
    
    blockDiv.innerHTML = `
        <div class="block-header ${blockData.color}">
            <h3 class="block-title">${blockName}</h3>
            <span class="block-badge">${blockData.courses.length} cursos</span>
        </div>
        <div class="block-content">
            <div class="courses-grid">
                ${blockData.courses.map(course => createCourseCard(course, student)).join('')}
            </div>
        </div>
    `;
    
    return blockDiv;
}

// Create course card element
function createCourseCard(course, student = null) {
    const status = getCourseStatus(course.code, student);
    const statusIcon = getStatusIcon(status);
    const statusBadge = getStatusBadge(status);
    
    return `
        <div class="course-card">
            <div class="course-header">
                <div class="course-info">
                    <i class="fas ${statusIcon.icon} course-status-icon ${status}"></i>
                    <div class="course-meta">
                        <h4>${course.code}</h4>
                        <p class="course-hours">${course.hours} horas</p>
                    </div>
                </div>
                ${statusBadge ? `<span class="course-badge ${status}">${statusBadge}</span>` : ''}
            </div>
            
            <h3 class="course-name">${course.name}</h3>
            <p class="course-description">${course.description}</p>
            
            <div class="course-details">
                <div class="course-detail">
                    <i class="fas fa-users"></i>
                    <span>25 estudiantes max</span>
                </div>
                <div class="course-detail">
                    <i class="fas fa-calendar"></i>
                    <span>Modalidad presencial</span>
                </div>
            </div>
        </div>
    `;
}

// Get course status for a student
function getCourseStatus(courseCode, student) {
    if (!student) return 'pending';
    
    if (student.completedCourses.includes(courseCode)) {
        return 'completed';
    } else if (student.currentCourses.includes(courseCode)) {
        return 'current';
    } else {
        return 'pending';
    }
}

// Get status icon
function getStatusIcon(status) {
    const icons = {
        completed: { icon: 'fa-check-circle', color: 'green' },
        current: { icon: 'fa-clock', color: 'yellow' },
        pending: { icon: 'fa-times-circle', color: 'gray' }
    };
    return icons[status] || icons.pending;
}

// Get status badge text
function getStatusBadge(status) {
    const badges = {
        completed: 'Completado',
        current: 'En Curso',
        pending: 'Pendiente'
    };
    return badges[status];
}

// Update curriculum with student data
function updateCurriculumWithStudent(student) {
    const curriculumGrid = document.getElementById('curriculumGrid');
    if (!curriculumGrid) return;
    
    curriculumGrid.innerHTML = '';
    
    Object.entries(curriculum).forEach(([blockName, blockData]) => {
        const blockElement = createCurriculumBlock(blockName, blockData, student);
        curriculumGrid.appendChild(blockElement);
    });
}

// Set demo user
window.setDemoUser = function(cedula) {
    const cedulaInput = document.getElementById('cedulaInput');
    if (cedulaInput) {
        cedulaInput.value = cedula;
        handleSearch();
    }
};

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Add course interaction handlers
document.addEventListener('click', function(e) {
    if (e.target.closest('.course-card')) {
        const courseCard = e.target.closest('.course-card');
        const courseCode = courseCard.querySelector('h4').textContent;
        const courseName = courseCard.querySelector('.course-name').textContent;
        
        // Add subtle click effect
        courseCard.style.transform = 'scale(0.98)';
        setTimeout(() => {
            courseCard.style.transform = 'scale(1)';
        }, 150);
        
        // Show course info (you could expand this to show a modal with more details)
        console.log(`Clicked on course: ${courseCode} - ${courseName}`);
    }
});

// Add hover effects to course cards
document.addEventListener('mouseover', function(e) {
    const courseCard = e.target.closest('.course-card');
    if (courseCard) {
        courseCard.style.transform = 'translateY(-4px)';
        courseCard.style.transition = 'transform 0.2s ease';
    }
});

document.addEventListener('mouseout', function(e) {
    const courseCard = e.target.closest('.course-card');
    if (courseCard) {
        courseCard.style.transform = 'translateY(0)';
    }
});

// Search input formatting
document.addEventListener('input', function(e) {
    if (e.target.id === 'cedulaInput') {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        
        // Format as Costa Rican ID (X-XXXX-XXXX)
        if (value.length > 0) {
            if (value.length <= 1) {
                value = value;
            } else if (value.length <= 5) {
                value = value.substring(0, 1) + '-' + value.substring(1);
            } else {
                value = value.substring(0, 1) + '-' + value.substring(1, 5) + '-' + value.substring(5, 9);
            }
        }
        
        e.target.value = value;
    }
});

// Initialize animations for workshop elements
function initializeWorkshopAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, observerOptions);
    
    // Observe curriculum blocks
    setTimeout(() => {
        const curriculumBlocks = document.querySelectorAll('.curriculum-block');
        curriculumBlocks.forEach(block => {
            observer.observe(block);
        });
    }, 500);
}

// Initialize workshop animations after DOM is ready
setTimeout(initializeWorkshopAnimations, 1000);
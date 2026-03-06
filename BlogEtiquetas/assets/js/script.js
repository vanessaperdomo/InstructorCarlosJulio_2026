/**
 * Cambia entre las vistas principales (Home, Teoría, Biblioteca)
 * @param {string} idSeccion - El ID de la sección a mostrar
 */
function cambiarSeccion(idSeccion) {
    // 1. Quitar clase active de todos los botones de la navegación superior
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 2. Ocultar todas las vistas de contenido
    document.querySelectorAll('.content-view').forEach(view => {
        view.classList.remove('active');
    });

    // 3. Mostrar la sección seleccionada
    const seccionActiva = document.getElementById(idSeccion);
    if (seccionActiva) {
        seccionActiva.classList.add('active');
    }

    // 4. Marcar como activo el botón correspondiente
    const btnActivo = Array.from(document.querySelectorAll('.tab-btn')).find(b => 
        b.getAttribute('onclick') && b.getAttribute('onclick').includes(idSeccion)
    );
    if (btnActivo) {
        btnActivo.classList.add('active');
    }
}

/**
 * Navegación fluida para los items de la Biblioteca Práctica
 * @param {string} id - El ID del elemento al cual hacer scroll
 */
function scrollToId(id) {
    // Primero nos aseguramos de estar en la vista de biblioteca
    cambiarSeccion('sec-practica');
    
    // Esperamos un momento a que la sección sea visible antes de scrollear
    setTimeout(() => {
        const elemento = document.getElementById(id);
        if (elemento) {
            window.scrollTo({
                top: elemento.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }, 150);
}

/**
 * Muestra/Oculta el menú lateral en dispositivos móviles
 */
function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

function cambiarSeccion(id) {
    // Oculta todas las secciones principales
    const secciones = document.querySelectorAll('.content-view');
    secciones.forEach(s => s.classList.remove('active'));

    // Muestra la sección pedida
    const destino = document.getElementById(id);
    if (destino) {
        destino.classList.add('active');
    }
}

function scrollToId(id) {
    // Primero nos aseguramos de estar en la sección de la biblioteca
    cambiarSeccion('sec-biblioteca');
    
    // Hacemos scroll suave hacia el bloque específico (estructurales, texto, etc.)
    setTimeout(() => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}
// muestra la sección indicada y oculta las demás
function activarSeccion(seccion){
    document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));
    document.querySelectorAll('.sidebar a').forEach(a => {
        a.classList.remove('active');
        // resalta el link activo en el sidebar
        if(a.getAttribute('onclick') && a.getAttribute('onclick').includes("'"+seccion+"'")){
            a.classList.add('active');
        }
    });
    document.getElementById(seccion).classList.add('activa');
}

// se llama al hacer clic en el sidebar
function mostrar(seccion, link){
    // guarda la sección para no perderla si Live Server recarga
    sessionStorage.setItem('seccionActual', seccion);
    activarSeccion(seccion);
    if(seccion == 'productos') getAllProducts();
    if(seccion == 'usuarios')  getAllUsers();
    if(seccion == 'carritos')  getAllCarts();
    if(seccion == 'posts')     getAllPosts();
}

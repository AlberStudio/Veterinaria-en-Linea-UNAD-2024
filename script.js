let loadMoreBtn = document.querySelector('#load-more');
let loadMoreBtn3 = document.querySelector('#load-more3');
let loadMoreBtn2 = document.querySelector('#load-more2');
let currentItem = 4;
let currentItem2 = 4;
let currentItem3 = 4;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for (var i = currentItem; i < currentItem + 4; i++) {
        boxes[i].style.display = 'inline-block';

    }
    currentItem += 4;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }
}
loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container3 .box')];
    for (var i = currentItem3; i < currentItem3 + 4; i++) {
        boxes[i].style.display = 'inline-block';

    }
    currentItem3 += 4;
    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none';
    }
}
loadMoreBtn2.onclick = () => {

    let boxes = [...document.querySelectorAll('.box-container2 .box')];
    for (var i = currentItem2; i < currentItem2 + 4; i++) {
        boxes[i].style.display = 'inline-block';

    }
    currentItem2 += 4;
    if (currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none';
    }
}

let btn_0 = document.getElementById('btn_0');
let hideText = document.getElementById('hideText');

btn_0.addEventListener('click', toggleText);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-to-container')
            .classList.add("shows")
    }
    else {
        document.querySelector('.go-to-container')
            .classList.remove('shows')
    }
}
document.querySelector('.go-to-container')
    .addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


function toggleText() {
    hideText.classList.toggle('show');
}

let btn_1 = document.getElementById('btn_1');
let hideOfert1 = document.getElementById('hideOfert1')
btn_1.addEventListener('click', toggleText1);

function toggleText1() {
    hideOfert1.classList.toggle('show1')
}
let btn_2 = document.getElementById('btn_2');
let hideOfert2 = document.getElementById('hideOfert2')
btn_2.addEventListener('click', toggleText2);

function toggleText2() {
    hideOfert2.classList.toggle('show2')
}

let btn_3 = document.getElementById('btn_3');
let hideOfert3 = document.getElementById('hideOfert3')
btn_3.addEventListener('click', toggleText3);

function toggleText3() {
    hideOfert3.classList.toggle('show3')
}




//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const elementos3 = document.getElementById('lista-3');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();
function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    elementos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,

        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.Precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}
function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
    <img src="${elemento.imagen}" width = 40% height = 40px >
    </td>

    <td>
    ${elemento.titulo}
    </td>

    <td>
    ${elemento.precio}
    <td>

    <td>
    <a herf = "#" class = "borrar" data-id = "${elemento.id}" onclick = "Sonido5.play()">X<a
    <td>        
    `;
    lista.appendChild(row);
}


function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}
function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
var sound = new Audio();
sound.src = "images/sonido.mp3";
var Sonido3 = new Audio();
Sonido3.src = "images/Sonido3.mp3";
var Sonido2 = new Audio();
Sonido2.src = "images/Sonido2.mp3";
var Sonido5 = new Audio();
Sonido5.src = "images/Sonido5.WAV";
var Sonido6 = new Audio();
Sonido6.src = "images/Sonido6.mp3";

// Selección de elementos del DOM
const formOpenBtn = document.getElementById('form-open');
const formContainer = document.querySelector('.form_container');
const formCloseBtn = document.querySelector('.form_close');
const signupLink = document.getElementById('signup');
const loginLink = document.getElementById('login');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup_form');

// Mostrar el formulario de login al hacer clic en el botón Login
formOpenBtn.addEventListener('click', () => {
    formContainer.style.display = 'flex';
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

// Cerrar el formulario al hacer clic en el botón de cerrar
formCloseBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
});

// Mostrar el formulario de registro al hacer clic en "Registrarse"
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

// Mostrar el formulario de login al hacer clic en "Login" dentro del registro
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});


/*const textoh2=document.querySelector('.header__texto h2');
console.log(textoh2);
textoh2.textContent='Nuevo Heading';

//Seleccionamos todos
const navg=document.querySelectorAll('.navegacion a');
navg[0].textContent='Hola mundo';
navg[1].classList.add('soy-idiota');
navg[1].classList.remove('navegacion__enlace');
console.log(navg[1]);

//BYID

const navg1=document.getElementById('hola');
console.log(navg1);

const nuevoEnlace=document.createElement('A');
nuevoEnlace.classList.add('navegacion__enlace');
nuevoEnlace.href='entrada.html';
nuevoEnlace.textContent='IDIOTA';

const navegacion=document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

window.addEventListener('load',function(){
    console.log(2);
}) //carga primero el html,css,js

document.addEventListener('DOMContentLoaded',function(){
    console.log(4);
}) //solo espera a que cargue el HTML

window.onscroll=function(){
    console.log('Estoy en movimiento');
}

const boton=document.querySelector('.boton--primario');
boton.addEventListener('click',function(evento){
    evento.preventDefault();
    console.log('Estoy siendo presionado');
})*/

const datos={
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre=document.querySelector('#nombre');
const email=document.querySelector('#email');
const mensaje=document.querySelector('#mensaje');
const form=document.querySelector('.formulario');

nombre.addEventListener('input',leerCampo);
email.addEventListener('input',leerCampo);
mensaje.addEventListener('input',leerCampo);
form.addEventListener('submit',function(e){
    e.preventDefault();
    const {nombre,email,mensaje}=datos;
    if(nombre===''|| email===''|| mensaje===''){
        mostrarAlerta('Completar los datos',true);
        return;
    }
        mostrarAlerta("Subiendo...");

})

function leerCampo(e){
    datos[e.target.id]=e.target.value;
}
function mostrarAlerta(mensaje,diseño=null){
    const alerta=document.createElement('P');
    alerta.textContent=mensaje;
    if(diseño){
        alerta.classList.add('error');

    }else{
        alerta.classList.add('correcto');
    }
    alerta.classList.add(diseño);
    form.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    },4000)
}
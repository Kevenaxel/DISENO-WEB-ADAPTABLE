// Mensaje de Informacion
console.log("Script cargado correctamente");

// Console de advertencia
console.warn("Esta funcion esta desactualizado");

// Error (Fondo Rojo)
console.error("No se encontro el elemento");

// Mostrar el tipo de Valor (typeof)
console.log(typeof 42) // Number
console.log(typeof 'Hola')//String
console.log(typeof true) //bolean

const nombre = "Ana";
console.log("Nombre Actual: ", nombre);

//ELEMENTOS DOM

//getElementById
const titulo = document.getElementById("titulo-principal");
const form = documento.getElementById("form-contacto");

//querySelector = cualquier selector CSS valido
const boton = document.querySelector(".btn-primario");
const nav = document.querySelector("nav");
const primero = document.querySelector("li:first-child");
const inputEmail = document.querySelector('input[type="email"]');

//querySelectorALL
const tarjetas = document.querySelectorAll(".tarjeta");
const link = document.querySelectorAll("a[href]");

tarjetas.forEach((tarjeta) =>{
    console.log(tarjeta.textContent);
});

const el = document.querySelector('#popup')
if(el){
    console.log('popup encontrado')
}else{
    console.warn('popup no encontrado')
}


const btn = document.querySelector("#mi-boton")
btn.addEventListener('click', (event) =>{
    console.log('click en: ', event.target);
    event.target.textContent = "Click"
})

//addEventListener para formularios
const campo = document.querySelector("#nombre");
campo.addEventListener("input", (event) =>{
    console.log("valor: ", event.target.value);
})


const boton_ejercicio = document.querySelector(".btn-detalle")

boton_ejercicio.forEach((boton) =>{
    boton.addEventListener("click", (event) =>{
        const targetId = event.target.getAtribute('data-target');
        const panel = document. getElementById(targetId);

        if(!panel){
            console.error("no se encontro el panel con id: " + targetId);
            return
        }

        panel.classList.toggle("ocultar");
        event.tar.textContent = panel.classList.contains('oculto') ? "Ver detalle": "Ocultar"
    })
})
//IF, ELSE OR ELSE IF

const nota = 7.5;

if(nota >= 90){
    console.log("Excelente nota (A)")
}else if(nota >= 80){
    console.log("Muy Bien (B)");
}else if(nota >= 7.0){
    console.log("Bien (C)");
}else if(nota >= 6.0){
    console.log("Suficiente (D)");
}else{
    console.log("Reprobado (F)")
}

//OPERADORES TERNARIOS - CONDICION ? SI : NO
const edad= 20;
const acceso = edad >= 18 ? "Permitido": "Denegado";
console.log(acceso)

const stock = 3;
const etiqueta = stock > 0 ? `${stock} disponibles`: "Agotado";
console.log(etiqueta)

const DIAS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

function obtenerDiaSemana(n){
    return DIAS[n - 1] ?? 'Dia invalidado'
}

function esDiaLaboral(numero){
  switch(numero){
    case 1: case 2: case 3: case 4: case 5:
        return true
    default: return false;

  }
}
console.log(`El dia ${obtenerDiaSemana(1)} es un Dia Laboral? ${esDiaLaboral(1)}`)


for(let i = 0; i < 5; i++){
    if(i % 2 ===0) continue;
    console.log(`Numeros inpares: ${i}`)
}

const fruta = ["Mango", "Sandia", "Banana", "Fresas"];

for(let i = 0; i < fruta.length; i++){
    console.log("La fruta es: " + fruta[i])
}

const productos = [
  { nombre: 'Camisa', precio: 29.99 },
  { nombre: 'Mochila', precio: 54.00 },
  { nombre: 'T-Shirt', precio: 20.50 }
];

productos.forEach((prod, i) => {
  console.log(`${i + 1}. ${prod.nombre}`);
});
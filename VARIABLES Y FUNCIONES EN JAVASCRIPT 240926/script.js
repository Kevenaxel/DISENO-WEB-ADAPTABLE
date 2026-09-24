//Diferencia de Var - Evitar en el codigo Moderno

var nombre = "Ana";
var nombre = "Luis";

console.log(nombre)

//Let - Para valores que cambian

let edad = 20;
edad = 25;

if(true){
    let bloque = "solo aqui!!!!";
    console.log(bloque);
}


//Const - Para valores que no cambian
const PI = 3.14159



console.log(typeof 'hola');
console.log(typeof 43);
console.log(typeof 34.90);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log(typeof {});
console.log(typeof []);

console.log(typeof function(){});

//Conversion de tipos

const numero = parseInt("42px") //42
console.log(numero)
console.log(parseFloat('3.14')) //3.14
console.log(String(100));
console.log(Boolean(0)) //False => 0 y 1 => True
console.log(Boolean('hola'))//true

//Verificar
console.log(isNaN('texto' * 2)) //true
console.log(isNaN(42)) //False


//Template Literals
const name = "Alberto";
const age = 26; 
const price = 29.99;

//Forma tradicional de concatenar era
const tradicional = "Hola, " + name + ". Tienes" + age + " anos.";
console.log(tradicional)

//Moderno templates literals
const nuevo =  `Hola soy ${name}, tengo ${age} anos`
console.log(nuevo)

function suma(a,b){
    const suma = (a+b)
    return suma;
}

console.log("La suma de 3 + 5 = " + suma(3,5)) // La suma de 3 + 5 es igual a 8

//function de expresion
const saludo = function(nombre){
   return "hola Bienvenidos: " + nombre;    
}

console.log(saludo('alberto'));

//Funciones de flecha o arrow 

// * / -
//Operadores logicos basicos

const precio = 8.5;
const cantidad = 2;

console.log("multiplicacion:", precio * cantidad) // 17 
console.log("Suma: ", precio + cantidad);
console.log("Resta", precio - cantidad);
console.log("Dividir", precio / cantidad)


console.log(0.1 + 0.2)//0.300000000004
console.log((0.1+0.2).toFidex(3))


console.loj('5' + 3); //53
console.log(5 + '3')
console.log('5' - 3)
console.log(Number('5' + 3))

//Modulo % - EXPONENTE **

console.log(5 % 2)
console.log(10 % 2)
console.log(7 % 3)


function esPar(n) { return n % 2 === 0};

console.log(esPar(8))
console.log(esPar(7))

const estudiantes = 23
const porGrupo = 5

console.log("Grupos:" + Math.floor(estudiantes / porGrupo))
console.log("Sobran:" + estudiantes % porGrupo + "estudiantes")

console.log("2*2*2* => " + 2 ** 3)
console.log("10*10 => " + 10 ** 2)
console.log("4*0.5 => ", 4 **0.5)


console.log(Math.pow(2,3))


//Asignacion Compuesta
let totalPedidos = 0;

//Forma larga
totalPedidos += 8.5
totalPedidos -= 8.5
totalPedidos *= 8.5
totalPedidos /= 8.5
totalPedidos **= 8.5


let contador = 0
contador++;
contador--;

let total = 0
let items = 0

function agregarAlCarrito(precio){
    total += precio;
    items++;
}

agregarAlCarrito(1.5)
agregarAlCarrito(3.00)

console.log("Items: " + items + ", Total: " + )

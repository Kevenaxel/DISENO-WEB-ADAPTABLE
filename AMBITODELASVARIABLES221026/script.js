//LET RESPETA WL BLOQUE {}

const esEstudiante = true;

if(esEstudiante){
    let mensaje = "Solo existe aqui!"
    var mensajeVar = "Esto se filtrara afuera"
    console.log("Dentro del If: " + mensaje);
    console.log("Var dentro del if")
}

console.log("Var fuera del if: " + mensajeVar);

console.log("Fuera del IF:" + mensaqje);
//ERROR: MENSAJE IS NOT DEFINED
//-- NO EXISTE FUERA DEL BLOQUE IF

for(let i = 0; i < 3; i++){
    let doble = i * 2;
    console.log("Doble dentro del FOR: " + doble)
}

console.log("Doble fuera del FOR: ", doble)
//ERROR: DOBLE IS NOT DEFINED




//Contador Privado Con closure
function crearContador(){
    let total = 0;
    return function (){
        i++;
        return total;''
    }
}

const contadorVistas = crearContador();


console.log(con)
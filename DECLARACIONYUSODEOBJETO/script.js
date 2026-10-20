//Declarar un objeto literal
const producto = {
    nombre: "Mouse inalambrico",
    precio: 12.50,
    stock: 0,
    disponibilidad: true,
    mostrarInfo: function(){
        console.log(`${this.nombre} --- $${this.precio}`);
    }
}

producto.mostrarInfo



//notacion de puntos
console.log("Nombre del Producto: " + producto.nombre);

//notacion de corchetes
const clave = "stock"

//modificar una propiedad de un objeto
producto.stock = 7;

//Agregar propiedad que no existe
producto.marca = "Logitech"

console.log("stock: " + producto[clave] + " --- Marca: " + producto.marca);



///Arriendo catalogo
const catalogo = [
    {
        nombre: "Mouse Ianalambrico",
        precio: 12.50,
        stock: 0,
        disponibilidad: true,
        mostrarInfo: function(){ console.log(`${this.nombre} ---- $${this.precio}`); }
    },
    {
        nombre: "Lapto HP",
        precio: 1200,
        stock: 50,
        disponibilidad: true,
        mostrarInfo: function(){ console.log(`${this.nombre} ---- $${this.precio}`); }
    },
    {
        nombre: "Teclado LogiTech",
        precio: 25,
        stock: 20,
        disponibilidad: true,
        mostrarInfo: function(){ console.log(`${this.nombre} ---- $${this.precio}`); }
    },

]

for(const cat of catalogo){
    console.log("Nombre: " + cat.nombre + ", Precio: " + cat.precio);
}

for(const cat of catalogo){
    if(cat.stock === 0){
        console.log(cat.nombre + ", Esta Agotado");
    }
}
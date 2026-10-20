// Datos de los productos
const productos = [
    { nombre: 'Camisa Oxford', precio: 29.99, categoria: 'ropa' },
    { nombre: 'Mochila Urban', precio: 54.50, categoria: 'accesorio' },
    { nombre: 'Tenis Runner',  precio: 89.00, categoria: 'calzado' },
];

// 1. Calcular precio final con descuento e IVA
function calcularPrecioFinal(precio, descuento = 0, iva = 0.16) {
    const neto = precio * (1 - descuento);
    return parseFloat((neto * (1 + iva)).toFixed(2));
}

// 2. Formatear como moneda
const formatearPrecio = (precio) => `$${precio.toFixed(2)}`;

// 3. Etiqueta de categoría (objeto como mapa)
const etiquetas = { 
    ropa: 'Ropa y moda', 
    accesorio: 'Accesorios', 
    calzado: 'Calzado' 
};
const obtenerEtiqueta = cat => etiquetas[cat] ?? 'General';
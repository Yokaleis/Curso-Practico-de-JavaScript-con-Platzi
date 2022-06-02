const precioOriginal = 120;
const descuento = 18;


//Calculando descuento
function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calcularDescuento() {
    const inputPrecio    = parseInt(document.getElementById("InputPrecio").value);
    const inputDescuento = parseInt(document.getElementById("InputDescuento").value);

    const precioConDescuento = calcularPrecioConDescuento(inputPrecio, inputDescuento);

    //Escribien en el HTML con JS

    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con descuento es: " + precioConDescuento;
}
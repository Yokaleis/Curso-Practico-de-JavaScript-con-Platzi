const precioOriginal = 120;
const descuento = 18;


//Calculando descuento
function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const coupons = [
    "HolaLove",
    "JhonnyDeep",
    "LOL",
];

function calcularDescuento() {
    const inputPrecio = parseInt(document.getElementById("InputPrecio").value);
    const inputCoupon = document.getElementById("InputCoupon").value;

    let descuento;
  
    switch(inputCoupon) {
      case coupons[0]: 
        descuento = 15;
      break;
      case coupons[1]: 
        descuento = 30;
      break;
      case coupons[2]: 
        descuento = 50;
      break;
    }

    const precioConDescuento = calcularPrecioConDescuento(inputPrecio, descuento);
  
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio con descuento son: $" + precioConDescuento;

  }
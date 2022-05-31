console.log("Interactuando con HTML");

//Cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado) {
    return lado **2;
}

//Calculando el perimetro del cuadrado
function calcularPerimetro() {
    const input = document.getElementById("InputCuadrado");//Capturamos lo que escribieron en el HTML
    const value = input.value;

    //Perimero Cuadrado
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
//Calculando el area del cuadrado
function calcularArea() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; //Capturamos lo que escribieron en el HTML

    //Area Cuadrado
    const area = areaCuadrado(value);
    alert(area);
}
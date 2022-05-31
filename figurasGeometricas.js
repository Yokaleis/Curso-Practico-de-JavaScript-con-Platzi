console.log("Encapsulando codigo en funciones");

//Cuadrado

//Calculando el perimetro del triangulo
function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado();

//Calculando el area del cuadrado
function areaCuadrado(lado) {
    return lado **2;
}
areaCuadrado();

//Triangulo

//Calculando el perimetro del triangulo
function perimentroTriangulo(ladoUno, ladoDos, base){
    return ladoUno + ladoDos + base;
}

//Calculando el area del triangulo
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//Circulo
const pi = Math.PI;

//Calculando el diametro del circulo
function diametroCirculo (radio){
    return radio * 2;
}

//Calculando el perimetro del circulo
function perimeroCirculo (radio) {
    const diametro = diametroCirculo (radio);
    return diametro * pi;
}

//Calculando el area del circulo
function areaCirculo (radio){
    return (radio * radio) * pi;
}


console.log("Interactuando con HTML");

//Cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado **2;
}
function calcularPerimetro() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularArea() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Triangulo 
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo() {
    
    const a = parseInt(document.getElementById("ladoA").value);//Capturamos lo que escribieron en el HTML
    const b = parseInt(document.getElementById("ladoB").value);
    const base = parseInt(document.getElementById("base").value);
/*     const a = document.getElementById("ladoA");//Capturamos lo que escribieron en el HTML
    const b = document.getElementById("ladoB");
    const base = document.getElementById("base");
    const valorA = a.value;
    const valorB = b.value;
    const valorBase = base.value; */
    console.log(a, b, base);
    const perimetroT = perimetroTriangulo(a, b, base);
    alert(perimetroT);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("base");
    const altura = document.getElementById("altura");
    const valor1 = base.value;
    const valor2 = altura.value
    console.log(valor1, valor2);
    const areaT = areaTriangulo(valor1, valor2);
    alert(areaT);
}


//Circulo

const pi = Math.PI;

function diametroCirculo (radio){
    return radio * 2;
}
function perimetroCirculo (radio) {
    const diametro = diametroCirculo (radio);
    return diametro * pi;
}
function areaCirculo (radio){
    return (radio * radio) * pi;
} 
function calcularCirculoP() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetroC = perimetroCirculo(value);
    alert(perimetroC);
}
function calcularCirculoA() {
    const input = document.getElementById("InputCirculo");
    const value = input.value; 
    const areaC = areaCirculo(value);
    alert(areaC);
}

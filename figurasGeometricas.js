console.log("Medidad de figuras geometricas");

console.group("Cuadrado");

//Cuadrado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " Centimentros");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimentro del cuadrado mide: " + perimetroCuadrado + " Centimentros");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + " Centimentros cuadrados");

console.groupEnd();

//Triangulo
console.group("Triangulo");
const ladoUno = 6;
const ladoDos = 6;
const base = 4;
const altura = 5.5;
console.log("Los lados del triangulo miden: " 
    + "Lado Uno: " + ladoUno + " Centimentros, "
    + "Lado Dos: " + ladoDos + " Centimentros, "
    + "Base: "     + base    + " Centimentros"
    + "Y la altura: "        + altura    + " Centimentros"
);
const perimentroTriangulo = ladoUno + ladoDos + base;
console.log("El perimentro del triangulo mide: " + perimentroTriangulo + " Centimentros");

const areaTriangulo = (base * altura) / 2;
console.log("El area del triangulo mide: " + areaTriangulo + " Centimentros cuadrados");

console.groupEnd();


//Circulo
console.group("Circulo");
const radio = 4;
const diametro = radio * 2;
const pi = Math.PI;
const perimeroCirculo = diametro * pi;
const areaCirculo = (radio **2) * pi;
console.log("El radio del circulo: " 
    + radio        + " Centimentros, "
    + "Su PI es: " + pi 
    + "el perimetro es : " + perimeroCirculo + " Centimentros "
    + "y el area es : "    + areaCirculo     + " Centimentros cuadrados"
);
console.groupEnd();

const primeraLista = [
    100,
    200,
    300,
    400,
    500,
    600,
];

let sumaLista = 0;

for (let i = 0; i < primeraLista.length; i++) {
    sumaLista = sumaLista + primeraLista[i];
};

const promedio = sumaLista / primeraLista.length;


// Array Functions Homework
// Alejandro Solarte Gaitán - 2225823
// Universidad Autónoma de Occidente
// Estructura de Datos y Algoritmos 2
// 12/02/2025

const arrayNumeros = [1,2,3,4,5,6,7,8,9];
const arrayLetras = ['a','b','c','d','e'];

// .forEach()
// Recorre el arreglo por cada elemento.
arrayNumeros.forEach((element) => {
    console.log(element);
});


// .map()
// Crea un nuevo Array con el parámetro dado.
var arrayNumDobles = arrayNumeros.map(function (nums) {
    return nums * 2;
})
console.log("Respuesta Función Map: \n");
for (let i = 0 ; i < arrayNumDobles.length ; i++) {
    console.log ("Soy el número " + arrayNumDobles[i] + ", y estoy en la posicion: " + i);
}
 

// .filter()
// Crea un nuevo Array con todos los elementos que cumplan la condicion implementada por la función dada.
const mayoresCinco = arrayNumeros.filter((number) => number > 5 );
console.log("Los números mayores a 5 son:");
console.log(mayoresCinco);


// .pop()
// Elimina el último elemento de un array y lo devuelve. Cambia la longitud del array
arrayNumeros.pop();
console.log("Respuesta Funcion Pop");
console.log(arrayNumeros);


// .find()
// Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada
const valor9 = arrayNumeros.find((element) => element > 5);
console.log("Función find(): " + valor9)


// .every()
// Prueba si todos los elementos del Array pasan la prueba implementada por la función proporcionada.
// Devuelve un valor booleano.
const esMayorQueCero = (currentValue) => currentValue > 0;
console.log(arrayNumeros.every(esMayorQueCero));


// .fill()
// Cambia todos los elementos de un Array por un valor estático.
// Desde el índice start (por defecto 0) hasta el índice end (default Array.lenght)
// Devuelve el arreglo modificado.
arrayNumDobles.fill(0,7,9);
console.log(arrayNumDobles);


// .some()
// Verifica si al menos un elemento del array cumple con la condición de la función.
const even = (element) => element % 2 === 0;
console.log("Respuesta .some");
console.log(arrayNumeros.some(even));


// .shift()
// Elimina el primer elemento de un array, modificando su longitud.
var ejemploShift = [2,3];
eliminado = ejemploShift.shift();
console.log("Respuesta .shift: ");
console.log(eliminado);


// .slice()
// Devuelve una copia de una parte del array dentro de un nuevo array.
const mitadArrayNumeros = arrayNumeros.slice(3,6);
console.log("Respuesta .slice: ");
console.log(mitadArrayNumeros);


// .sort()
// Ordena los elementos de un Array y lo devuelve.
const numDesorden = [6,4,3,0,1];
numDesorden.sort();
console.log("Respuesta .sort: ");
console.log(numDesorden);

// .reverse()
// Invierte el orden de los elementos de un array.
numDesorden.reverse();
console.log("Respuesta .reverse: ");
console.log(numDesorden);

// .push()
// Añade elemenos al final de un array
numDesorden.push(9);
console.log("Respuesta .reverse: ");
console.log(numDesorden);


// .includes()
// Determina si un array tiene un determinado elemento, devuelve valor buleno
console.log("Respuesta .includes:");
console.log(arrayNumeros.includes(5));
console.log(arrayLetras.includes('z'));


// .indexOf()
// Devuelve el primer índice en el que se encuentra un elemento del array, -1 si no
console.log("Respuesta .indexOf ");
console.log(arrayNumeros.indexOf(4));
console.log(arrayLetras.indexOf('y'));


// .toString()
// convierte el array en una cadena de texto, separa los elementos con comas
console.log("Respuesta .toString:");
console.log(arrayNumeros.toString());
console.log(arrayLetras.toString());


// .unshift()
// Agrega elementos al inicio del array y devuelve su nueva longitud
console.log("Respuesta .unshift:");
arrayLetras.unshift('x', 'y');
console.log(arrayLetras);


// .values()
// Devuelve un objeto iterador con los valores del array.
console.log("Respuesta .values:");
const iterador = arrayNumeros.values();
for (let valor of iterador) {
    console.log(valor);
}


// .with()
// Devuelve una copia del array con el elemento en el índice dado reemplazado por un nuevo valor.
const nuevoArrayConWith = arrayNumeros.with(2, 99);
console.log("Respuesta .with:");
console.log(nuevoArrayConWith);


// .findLastIndex()
// encuentra el último índice de un elemento que cumpla con la condición
const ultimoMayorCinco = arrayNumeros.findLastIndex(num => num > 5);
console.log("Respuesta .findLastIndex:");
console.log(ultimoMayorCinco);


// .findIndex()
// Devuelve el índice del primer elemento que cumpla con la condición
console.log("Respuesta .findIndex:");
const primerMayorCinco = arrayNumeros.findIndex(num => num > 5);
console.log(primerMayorCinco);



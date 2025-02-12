// Alejandro Solarte Gaitán
// Estructuras de Datos y Algoritmos 2
// Universidad Autónoma de Occidente

// Realizar una función que verifique si un numero es par o impar
// Usando una función flecha.

const funcionFlechaParImpar = (x) => {
    residuo = x % 2
    if (residuo == 0){
        return "Es par"
    } else {
        return "Es impar"
    }
    };

console.log(funcionFlechaParImpar(5)); 
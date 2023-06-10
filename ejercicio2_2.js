//se declara la matriz inicial
var matriz =[];
//se agrega el popup para ingresar valores a la matriz
matriz = prompt("ingrese valores a la matriz, separados por coma:");
//se utiliza la funcion split, agregando como separador la coma, actualiando la variable matriz
matriz = matriz.split(",");
//se imprime la matriz resultante en la cónsola, tal como lo solicita el ejercicio
console.log(matriz);
//he agregado una nueva línea para que se compruebe que se imprime una cadena completa dentro de la matriz, en lugar de un caracter.
console.log(matriz[2]);
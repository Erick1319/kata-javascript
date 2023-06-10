// Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

//especificamos las entradas como tipo numero
let numero = parseInt(prompt("ingresa un numero, lo usaremos para hacer multiplos de 5 con él:"));
//iniciamos el centinela en 1.
let i=1;
//imprimimos en consola el valor del multiplo
console.log(`el ${i} es un multiplo universal, veamos lo siguientes multiplos:`) ;
//iniciamos el bucle, mientras el valor del centinela sea menor o igual al introducido, calcularemos los multiplos de 5.
while(numero>=i)
{
console.log(`el ${i}° multiplo de 5 es:${i*5}`);
i++;
}
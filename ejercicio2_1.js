// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

//declaración del array vacío
var matriz =[];
//creación de un bucle for, donde especificamos que interactúe con la matriz, durante 10 veces, guardando los datos en la matriz
for (let i=0;i<10;i++){
//utilizamos el metodo push para agregar los valores al final de la matriz
//usamos el método random para generar números aleatorios, lo multiplicamos por 10.
//usamos el método redondear, para no tener números flotantes o decimales. 
 matriz.push(Math.round((Math.random()*100)))
}
//terminado el ciclo, imprimimos el array resultante.
console.log(matriz);  


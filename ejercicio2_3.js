// se carga el array propuesto
let array = [10,40,30,20,15,5];
//se extraen los valores menores y mayores del array
let nuMenor = Math.min(...array);
let nuMayor = Math.max(...array);
//se declara un nuevo array para no afectar el anterior.
//se utiliza la funcion sort, para ordenar de menor a mayor.
//de acuerdo con lo investigado, se han agregado una función de comparación para ordenarlo de forma ascendente.
let nuevoArray = array.sort((a,b)=>a-b);
//se imprime en cónsola el nuevo array ordenado.
console.log(`el nuevo array ordenado es: ${nuevoArray}`);
//se imprime en cónsola el valor mayor y menor del array.
console.log(`el valor menor es ${nuMenor}, y el valor mayor es: ${nuMayor}`)

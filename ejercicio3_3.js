// Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

//declaramos el arreglo y la entrada
let miArray = [];
let entrada = 0;
//inicializamos ciclo do-while, para que se ejecute el ciclo al menos una vez:
do{
//convertimos en entero para poder compararlo a cadena
entrada = parseInt(prompt("ingresa un número:"))
//verificamos si la entrada es de tipo texto, entonces corregimos al usuario
if (isNaN(entrada)){
    console.log("ingrese números por favor.")
}
//si la entrada es de tipo numerico y es diferente de cero, entonces agregamos al arreglo.
if(!isNaN(entrada)&&entrada!=0){
//lo pusheamos para que se vaya a la cola.    
   miArray.push(entrada);
};
//si la entrada es cero, el ciclo se  cierra
}while(entrada!=0);
//imprimimos el array resultante.
console.log(miArray)
//aquí agregué una nueva línea para comprobar que el array funciona perfectamente si selecciono el primer elemento:
console.log(miArray[0])


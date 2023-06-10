// Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.


//definimos los numeros ganadores, convirtiendolos a enteros
let ganador1 = parseInt(prompt("introduce un numero: entre 1 y 50"));
let ganador2 = parseInt(prompt("introduce otro numero: entre 1 y 50"));
//inicializamos contador
let i = 1;
//realizamos la condicional, que ambos numeros se encuentren en el rango aceptable
if ((ganador1>0&&ganador1<51)&&(ganador2>0&&ganador2<51)){
    while(i<=50){
//solo si alguno de los numeros coincide con los ingresados por el usuario, se imprimirá en la consola la palabra ¡lotería!
        if (i==ganador1||i==ganador2){
            console.log(`${i} ¡Loteria!`)
        }
//mientras no se cumpla la condicion de igualdad, se seguirá imprimiendo el numero sin cadena de texto.        
        else{console.log(i)}
        i++
    }
}
//salida en caso de que alguno de los números no se encuentren en el rango
else{
    console.log("no agregaste valores aceptados.")
}


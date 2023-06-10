// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.


//declaramos el arreglo y la entrada
let miArray = [];
let entrada = 0;
//inicializamos ciclo do-while, para que se ejecute el ciclo al menos una vez:
do{
//lo dejamos en cadena para el ingreso de palabras
entrada = prompt("ingresa una letra o palabra:")
//verificamos si la entrada es de tipo texto
if (isNaN(entrada)&&entrada!=""){
    console.log("siga ingresando palabras:")
    //lo pusheamos para que se vaya a la cola. 
    miArray.push(entrada);
}
//si la entrada es de tipo numerico y es diferente de cero, entonces corregimos al usuario
if(!isNaN(entrada)&&entrada!==""){
    window:alert("eso no es una palabra.");
};
//si la entrada está vacía, el ciclo se  cierra
}while(entrada!="");
//imprimimos el array resultante, utilizando join para concatenar.
window:alert(`las letras o palabras que ingresaste fueron: ${miArray.join(" ")}`)

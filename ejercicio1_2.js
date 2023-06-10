// Ejercicio 1, se declara variable de entrada
let numero   = prompt("Ingresa un numero");
// convertimos la entrada en entero para hacer mas facil la comparacion
respuesta = parseInt(numero,10);
// agregamos un condicional
if(respuesta%2==0){
window:alert(`el numero: ${numero} SI es divisible entre 2`);
}else if (respuesta%2>0){
    window:alert(`el numero: ${numero} NO es divisible entre 2`)
    // agregamos un condicional por default
}else{window:alert("Esa cosa no es un numero.")}
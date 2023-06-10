// Ejercicio 1, se declara variable de entrada
let numero   = prompt("Ingresa un numero");
// convertimos en entero para hacer mas facil la comparacion
respuesta = parseInt(numero,10);
// agregamos un condicional
if(respuesta%2==0){
window:alert(`el numero: ${numero} Es par`);
}else if (respuesta%2>0){
    window:alert(`el numero: ${numero} No es par`)
    // agregamos un condicional por default
}else{window:alert("Esa cosa no es un numero.")}
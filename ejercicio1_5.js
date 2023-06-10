// Ejercicio 1, se declara variable de entrada
let numero   = prompt("Ingresa un numero");
let numero2 = prompt("Ingresa otro numero");
// convertimos en entero para hacer mas facil la comparacion
a = parseInt(numero,10);
b = parseInt(numero2,10);
// agregamos un condicional
if(a>b){
window:alert(`el numero: ${b} Es menor`);
}else if(a<b) {
    window:alert(`el numero: ${a} Es menor`)
    // agregamos un condicional por default
}else{ window:alert(`¿seguro que agregaste un numero?`)}
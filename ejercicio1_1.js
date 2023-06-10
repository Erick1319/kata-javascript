// Ejercicio 1, se declara variable de entrada
let respuesta   = prompt("eres bellisimo/a?");
// convertimos la cadena en minusculas para hacer mas facil la comparacion
respuesta = respuesta.toLowerCase();
// agregamos un condicional
if(respuesta == "si"){
window:alert("Ciertamente");
}else if (respuesta =="no"){
    window:alert("No te creo")
    // agregamos un condicional por default
}else{window:alert("esa no es una respuesta valida eh?")}
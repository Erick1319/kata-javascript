//Solicitar al usuario una calificación (entre 1 y 10). 
//Luego se debe comprobar que el número efectivamente esté en ese rango,
// si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular”
// si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
let nota = parseInt(prompt("ingrese una calificacion entre 1 y 10"));
// convertimos la nota en entero y comparamos si cumple la especificación
if (nota>=1&&nota<=10){
//   si la nota es numero válido, entra al siguiente ciclo 
   if(nota<6){
    window:alert("reprobado");
   }
   
   if(nota>=6&&nota<9){
    window:alert("regular");
   }
   if(nota==9){
    windows:alert("bien");
   }
    if(nota==10){
        window:alert("excelente");
    }
}
//opción mostrada en caso de que no cumpla como una nota válida
else{
    window:alert(`ERROR. no agregaste una nota válida`);
}
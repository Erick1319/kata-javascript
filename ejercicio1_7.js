//Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes,
//otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo.
//Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let dia = prompt(`ingrese un día de la semana: `);
//convertimos a minuscula para respetar la igualdad estricta.
dia = dia.toLowerCase();
//impementamos un switch, que es lo más conveniente
switch(dia){
    case "lunes":
        window:alert("que floreja, hoy es lunes");
        break
    case "viernes":
        window:alert("hoy es viernes y el cuerpo lo sabe!");
        break
    case "sábado":
    case "domingo":
        window:alert("no importa si es sábado o domingo, es fin de semana");
        break
    case "martes":
    case "miercoles":
    case "jueves":
        window:alert("aun falta para viernes :(");
        break
        default:
            window:alert("wey, ¿sí sabes qué es un día de la semana?")
            break
}
// Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones.Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN Carrera $3999 MXN  Master: $2999 MXN Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento. Beca Google: 15% de descuento. Beca Jesua: 50% de descuento. Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses Carrera 6 meses Master: 12 meses

//inicializamos todas las variables necesarias:
let total = 0
let descuento = 0
 let course = 4999
 let carrera = 3999
 let master = 2999
 let programa = 0
 duracion = 0;

 //ingresamos un campo de entrada para la elección del programa educativo, convertimos a minusculas para efectos de comparación:
let nivel = prompt("Bienvenido al Programa educativo DEV.F \n por favor  escriba el nivel educativo a elegir:\nCourse: duración 2 meses \nCarrera: duración 6 meses \nMaster: duración 12 meses");
nivel = nivel.toLowerCase();
//se agrega una condicional para evitar que se ejecute el ciclo
if (nivel=="course"||nivel=="carrera"||nivel=="master"){
    //Abrimos un switch para declarar el tiempo y tipo de programa, de acuerdo a la entrada recibida
    switch (nivel){
        case "course": programa = course;duracion=2; break;
        case "carrera": programa = carrera; duracion=6; break;
        case "master": programa = master; duracion=12; break;
    // imprimimos una alerta en caso de recibir una opción válida
       
    };
    
    //solicitamos una beca para aplicar descuento
    let condicion = prompt("¿cuenta con alguna beca? ingrese el número de acuerdo a la opción: \n1. Si \n2. No");
    
    //aplicamos una condicional, en caso de que sí se cuente con una beca:
    if (condicion == "1"){
        let beca = prompt("Por favor escriba el tipo de beca con la que cuenta: \n 1. Facebook \n2. Google \n3. Jesua");
    //convertimos los datos de entrada en minusculas, para su fácil comparación:
        beca = beca.toLowerCase();
    // abrimos una multicondicional, para saber qué tipo de descuento se va a aplicar.
        switch (beca){
            case "facebook": descuento = programa-(0.20*programa); total =descuento*duracion; break;
            case "google": descuento =programa-(0.15*programa); total =descuento*duracion; break;
            case "jesua": descuento = programa-(0.50*programa); total =descuento*duracion; break;  
        }
    //imprimimos en ventana el tipo de programa, el valor con descuento y el costo total.
        window:alert(`el programa elegido es: ${nivel}, \n el valor mensual con descuento es de $${descuento}, \n el costo total es de $${total}`)
    }
    //Se aplica un condicional en caso de que no se cuente con una beca, imprimiendo el programa y la duración.
    else if(condicion=="2"){
        window:alert(`el programa elegido es: ${nivel}, el costo del programa es de: $${(programa*duracion)}`);
    }
}
else{
    window:alert("no elegiste un programa válido");
}


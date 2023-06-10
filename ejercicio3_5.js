// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

//definimos la variable de entrada 
let dia;
//inicializamos ciclo
do{
    dia = prompt("ingresa un dia de la semana");
    //pasamos la entrada a minusculas para comparar
    dia = dia.toLowerCase();
    //agregamos un multicondicional para cada dia de la semana
        switch(dia){
            case "lunes": window:alert(`que flojera, es ${dia}`);break;
            case "martes":window:alert(`apenas ${dia}, falta para el viernes`);break;
            case "miercoles":window:alert(`ombliguito de semana`);break;
            case "jueves":window:alert(`ricolino, ya falta poquito pal viernes`);break;
            case "viernes":window:alert(`hoy es ${dia} y  no me hablas desde el martes, que es lo que ha pasao`);break;
            case "sabado":window:alert(`estamos  un día de descanso ${dia}`);break;
            default:windows:alert("¿quien te enseñó los días de la semana?");break;
        }    
    }while(dia!="domingo");
        //en caso de que sea domingo, se ejecutará la siguiente accion
    window:alert("Ve a descansar")
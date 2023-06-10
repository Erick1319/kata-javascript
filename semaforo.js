//iniciamos declarando el arreglo de las luces
let luces=["verde","amarillo","rojo"];
//utilizamos el metodo queryselector para encontrar en el documento el id semaforo;
//agregamos el metodo a una variable para poder interactuar con ella como si fuese un objeto.
let cambios = document.querySelector('#semaforo');
//inicializamos un centinela o contador;
i=0;
//iniciamos nuestra funcion para interactuar
function semaforoLuces(){
    //declaramos el encendido, tomando el valor del arreglo de acuerdo con el contador;
    let encendido=luces[i];
    //abrimos un ciclo multicondicional para modificar el objeto cambios.src (la imagen)
    switch(encendido){
        //se imprimirá en consola el color de la luz,
        //se cambia el valor del contador para permitir paso al siguiente elemento del arreglo.
        //se reescribirá el nombre de la fuente, agregando el valor almacenado en la variable encendido
        case "verde": console.log("Luz Verde");i++;
        cambios.src=encendido+".png"; break;
        case "amarillo":console.log("Luz Amarilla");i++;
        cambios.src=encendido+".png";break;
        //en caso de que el valor sea rojo, se reiniciará el contador a 0,
        //de esta manera se logra que no nos salgamos del arreglo en consola 
        case "rojo":console.log("Luz Roja");i=i-2;
        cambios.src=encendido+".png"; break;
    }
}
//se ejecuta la función setinterval, llamando a la funcion semaforoLuces cada 2 segundos.
setInterval(semaforoLuces,2000);



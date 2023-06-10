// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.
//inicializamos el contador
let i=0;
//declaramos el arreglo.
miArray = [4,"dos",8,"tres",5,9,1,"cero"];
//inicializamos el ciclo, desde 0 y mientras que el contador sea menor a la longitud del arreglo, irá iterando con cada elemento del arreglo
for (i=0;i<miArray.length;i++){
    //se define si el tipo de elemento de la iteración es de tipo numero, se imprimirá en la consola.
    if(typeof(miArray[i])=="number"){
        console.log(miArray[i]);
    }
}
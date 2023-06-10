//Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
//El helado sin topping cuesta 50 MXN.
//El topping de oreo cuesta 10 MXN.
//El topping de KitKat cuesta 15 MXN.
//El topping de brownie cuesta 20 MXN.

let topping = parseInt(prompt("Heladería el cubito les ofrece los siguientes toppings :\n1. Oreo \n2. KitKat \n3. Brownie \ningrese un número de acuerdo al helado que desea:\n"));
if(topping>=1&&topping<4){
    switch (topping){
        case 1: window:alert(`el helado elegido fue Oreo y tiene un costo de: $10.00MXN`);
        break;
        case 2: window:alert(`el helado elegido fue KitKat y tiene un costo de: $15.00MXN`);
        break;
        case 3: window:alert(`el helado elegido fue Brownie y tiene un costo de: $20.00MXN`);
        break;
       //En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
        default: window:alert(`No tenemos este topping, lo sentimos.`);
        window:alert("el precio del helado sin topping cuesta $50.00MXN")
        break;
    }
}
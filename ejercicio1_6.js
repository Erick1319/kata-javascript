// Ejercicio 1, se declara variable de entrada
let a = parseInt(prompt("Ingresa el primer numero"));
let b = parseInt(prompt("Ingresa el segundo numero"));
let c = parseInt(prompt("Ingresa el tercer numero"));
// agregamos un condicional
if(a>b&&a!=c){
    if(a>c){
        window:alert(`el primer numero es mayor, y su valor es ${a}`);
    }
    else{
        window:alert(`el tercer numero es mayor, y su valor es ${c}`);
    }
}else if(b>a&&b!=c){
    if(b>c){
        window:alert(`el segundo numero es mayor y su valor es${b}`)
    }
    else{
        window:alert(`el tercer numero es mayor, y su valor es ${c}`);
    }
}
if(a==b||b==c){
    if(a>c){
        window:alert(`existen 2 numeros iguales. el valor mayor es: ${a}`);
    }
    else{
        window:alert(`existen 2 numeros iguales. el valor mayor es: ${c}`);
    } 
}
if(a==c){
    if(a>b){
        window:alert(`existen 2 numeros iguales. el valor mayor es: ${a}`);
    }
    else{
        window:alert(`existen 2 numeros iguales. el valor mayor es: ${b}`);
    }
}

    // agregamos un condicional por default

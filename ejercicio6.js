/////////////////////////////////////////////
const ingresar = document.getElementById('ingresar')
//llamamos a la función login, cuando ocurra el evento click
ingresar.addEventListener("click", login);
const usuarios = ["pedro","juana"]
//la funcion login vinculará el usuario en un registro.
function login(){
    //comprobar si el usuario registrado existe, continuar con el proceso, en caso contrario, reiniciar
    const usuarioRegistrado = entrada();
    if(usuarioRegistrado=="error"){
        location.reload()
    }else{
    //inicializar la variable datos en caso de que no haya sido declarada previamente, con un valor numerico de 0.
    var datos = parseInt(localStorage.getItem(usuarioRegistrado))
if (isNaN(datos)){
    datos = 0;
}
console.log(datos)  
//se inicializa el contenedor para nuevas opciones
actualizador();
//se carga el registro de las ventas.
registrarVentas();
//se cargan los ajustes para el empleado del mes.
empleadoMes();
//se cargan los ajustes de salida.
salir();
}
//se declara la función de salida.
function salir(){
    let salir = document.getElementById("salida");
    salir.addEventListener("click",cerrar)
}

function cerrar(){
    location.reload()
}

//se declara la función del mejor empleado del mes.
function empleadoMes(){
    let empleadoMes = document.getElementById("empleadoMes")
    empleadoMes.addEventListener("click",function mejorEmpleado(){
        let empleado1 = parseInt(localStorage.getItem("juana"))
        let empleado2 = parseInt(localStorage.getItem("pedro"))
        if(isNaN(empleado1)||isNaN(empleado2)){
            window:alert("aun no puede calcular las ventas, no hay ventas suficientes registradas")
            location.reload
        }
        if (empleado1<empleado2){
            window:alert(`el empleado Pedro ya vendido más, con un total de:  $${empleado2}, recibirá el incentivo del mes`)
        }if(empleado1==empleado2){
            window:alert(`ambos empleados han empatado en ventas`)
        }
        if(empleado2<empleado1){window:alert(`El empleado Juana ha vendido más, con un total de:  $${empleado1},recibirá el incentivo del mes.`)}
    })
}

function entrada(){
    //aquí solicitamos el usuario, y lo agregamos a la variable 
    var registro = prompt("por favor ingrese el nombre de usuario:")
    registro = registro.toLowerCase();
    let comprobar = usuarios.includes(registro);
    //colocamos una  condicional en caso de que exista el usuario, en caso  contrario, retorna un error.
    if(comprobar){
        window:alert(`Bienvenid@, ${registro}`);
        return registro;
    }else{
        window:alert("Usuario No Registrado");
        return "error";
    }
}
function actualizador(){  //esta función actualiza el contenedor, agregando nuevos botones.
    let menu = 
    '<div="seccion"><div><h1>¿Qué desea hacer?</h1></div><div id="botones"><div class="boton" id="registroVenta">registrar ventas</div><div class="boton" id="empleadoMes">calcular empleado del mes</div><div class="boton" id="salida">Salir</div></div></div>'
    //se hace un llamado al documento container, sobreeescribiendo su contenido mediante innerHTML
    document.getElementById('container').innerHTML=menu;     
}   
//esta funcion registrará las ventas y está vinculada al botón registrar ventas
function registrarVentas(){
    //agregamos entrada en el documento
         let regVenta = document.getElementById('registroVenta');
         //esta linea llamará a la función calcular
    regVenta.addEventListener("click",calcular);
    }
    //esta función calculará el total de los productos vendidos 
    function calcular(){
        //definimos un objeto con el tipo de productos a trabajar
        let productos = {
            aqua:200,
            emocion:180,
            alegria:160,
            frescura:150
        }
        //declaramos los datos necesarios.
        var valor = datos;
        let entrada;
        let consulta=0;
        let calculo = 0;
        var total = + 0;
        let cantidad = 0;
        do{
            //inicializamos un buvle for, para mostrar los productos a registrar  y almacenar la cantidad de dinero 
            entrada = prompt("Los productos disponibles son:\n 1.aqua\n2.emocion\n3.alegria\n4.frescura\ningrese el nombre del producto a calcular:");
            if(isNaN(entrada)&&entrada!==""){
                entrada=entrada.toLowerCase();
                //definimos una consulta para el  objeto.
                consulta = productos[entrada];
                //definimos la cantidad a ingresar
                cantidad = parseInt(prompt("ingrese la cantidad de productos vendidos:"));
                //en caso de que la cantidad no sea válida, no se agregará valor alguno
                if (isNaN(cantidad)){
                    window:alert(`no ingresó una cantidad válida`)
                    cantidad = 0;
                }
                calculo = consulta*cantidad;
            total += calculo;
            valor+=total;
            //configuramos un regristro de usuario con el valor de la venta.
            localStorage.setItem(usuarioRegistrado,valor)
            }
        }while(isNaN(entrada)&&entrada!=="");
        windows:alert(`el total vendido registrado es de: $${total}.00`);
        //recargamos para nueva captura
        location.reload()
    }
}
// localStorage.clear()
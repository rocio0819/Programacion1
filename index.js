"use strict";// obliga al interptete de javascript que muestra errores

//Creamos un objeto llamado Producto, con sus propiedades
//Utilizando el patrón de diseño Prototype generar luego herencias para otros obj
class Producto { // declaracion de una clase
    constructor(nombre, valor, cantidad) { //crear e inicializar un objeto creado a partir de una clase.
        this.nombre = nombre; //con this hacemos referencia al elemento .nombre dentro del contructor
        this.valor = valor;//le damos un atributo un valor a cada uno segun entrada de datos
        this.cantidad = cantidad;// "this.nombre" este elemento tendra el valor de "nombre" 
    }//Permite convertir el objeto a texto legible
  toString() { //método devuelve una cadena que representa el objeto
        return `Nombre: ${this.nombre}, Valor: ${this.valor}, Cantidad: ${this.cantidad}, Total: ${this.valor * this.cantidad}`;
    }//finaliza el metodo y devuelve un valor
}
//Creamos un objeto Inventario donde productos es un arreglo
class Inventario {
    constructor(productos) {
        this.productos = productos;
    }
    //Con este método (creamos metodo dentro de clase) agrego nuevos productos al arreglo productos
    agregar(productoNuevo) {

        //TODO para crear un nuevo arreglo usando un arreglo existente como parte de él
        this.productos.push(productoNuevo); //Add con push agrego un nuevo elemento al array
    }
}
//Creamos un objeto inventarioArt y asigno un arreglo vacío
//Se pueden crear otros objetos Inventarios para otras categorías
let inventarioArt = new Inventario([]); //crea nuevo objeto 

//Esta función permite agregar productos al arreglo a través de los input del HTML
function ingresar() {
    let nombre = document.getElementById("nombre").value; 
    //seleccionar un elemento del documento 
    //por medio del valor del atributo id 
    let valor = Number(document.getElementById("valor").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    document.getElementById("correcto").innerText = '';//innerText actualiza el 
    //contenido de texto del nodo seleccionado.

    // Función flecha para validar todos los campos
    //Devuelve el mismo mensaje en caso que el valor no sea numérico para 'valor' y 'cantidad'
    let validar = (() => {
        //Verificación de campos vacíos
        let mensaje = "";

        if (nombre == "") {
            mensaje += "Ingrese un nombre" + '\n';
        }
        if (valor == "") {
            mensaje += "Ingrese un valor" + '\n';

        }
        if (cantidad == "") {
            mensaje += "Ingrese una cantidad" + '\n';
        }
        //Verificación de valores numéricos
        if (isNaN(valor)) {  //intento convertir el parámetro pasado a un número
            mensaje += "Ingrese un valor" + '\n';
        }
        if (isNaN(cantidad)) { //idem
            mensaje += "Ingrese una cantidad" + '\n';
        // Si no se puede convertir, devuelve true; en caso contrario, devuelve false
        }
        let parrafo_errores = document.getElementById("mensaje");
        parrafo_errores.innerText = mensaje;
        //Si no hay mensajes de error, retorna true
        return mensaje == "" ? true : false;
    })

    //Si la validación esta ok y retorna true, se agrega el producto al inventario
    //Si la validación retorna false, el producto no se agrega
    if (validar()) {

        let nuevo = new Producto(nombre, valor, cantidad); //declaro variable nuevo que es 
        //igual a nuevo producto
        inventarioArt.agregar(nuevo); //metodo agregar sobre el objeto nuevo que
        //tiene el nuevo producto
        document.getElementById("correcto").innerText = `Producto agregado correctamente`;
        //actualizo con innerText
        document.getElementById("formulario").reset();//restauro los elementos
        // de un formulario a sus valores por defecto. 
    }
}

function listar() {
    let resultado = document.getElementById("lista");
    //!Primer intento (los resultados me quedaban separados por comas)
    //resultado.innerText = inventarioRopa.productos.toString();
    //console.log(inventarioRopa.productos.toString());

    if (inventarioArt.productos == "") { //si se aprieta listar sin haber ingresado productos
        resultado.innerText = "No ha ingresado ningún producto aún";
    } else {
        //AQUI YA HAY PRODUCTOS A LISTAR 
        //!solución: usar un forEach() que ejecuta la función,ejecuta la 
        //función indicada. productos=> resultado.una vez por cada elemento del array
        // indicada una vez por cada elemento del array.
        document.getElementById("lista").innerText = ""; // vacio  lista
        //Aca hacemos por cada elemento del array los productos del inventario
        //Variable InventarioRopa.Propiedad  Productos se almacena...
        // el valor resultante del toString
        // izquierda es mayor o igual que el de la derecha
        //inventarioRopa.productos.forEach(productos => resultado.innerText += productos.toString() + '\n');
        //inventarioRopa.productos.forEach(productos => console.log(productos.toString()));
        //objeto.arreglo. funcion por cadauno de los elementos de array
        inventarioArt.productos.forEach(productos => resultado.innerText += productos.toString() + '\n');
        inventarioArt.productos.forEach(productos => console.log(productos.toString()));
        
    }
}


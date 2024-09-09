// definicion de los productos. base de datos
const productos = [
    { nombre: "Vino + Gaseosa", precio: 5100 },
    { nombre: "Vino + Jugo", precio: 4675 },
    { nombre: "Gaseosa", precio: 2000 },
    { nombre: "Jugo", precio: 1500 },
    { nombre: "Vino", precio: 4000 },
    { nombre: "Cerveza", precio: 3000 },
];

// el total del carro empieza vacio
const carrito = [];

// al elemento que se agregara al carrito, le defino el producto (que ya viene con el precio) y las cantidades
const agregarCarrito = (producto, cantidad) => {
    const elementoCarrito = {
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,
    }
    // para que al listado vacio del carrito se agregue la seleccion
    carrito.push(elementoCarrito)
};

// sumador de precios del carrito
const totalCarrito = () => {
    let totalCompra = 0
    for (let i = 0; i < carrito.length; i++) {
        totalCompra += carrito[i].precio * carrito[i].cantidad
    } return totalCompra
};

// para tener el listado de lo comprado
const listadoComprado = () => {
    let mensaje = ""
    for (let i = 0; i < carrito.length; i++) {
        mensaje = mensaje + carrito[i].nombre + "\n"
    }
    return mensaje;
};

// Ventas generadas en el dia
let ventasTotales = 0;

// Definicion de la app de simulacion
alert("Lea atentamente las instrucciones y realice un pedido por persona");
const appCompra = () => {

    // para cliente nuevo
    let clienteNuevo = true;
    while (clienteNuevo) {

        // para elegir producto del cliente
        let loop = true
        while (loop) {
            let producto = parseInt(prompt("Por favor ingrese el numero de la opcion deseada: \n 0) " + productos[0].nombre + "= $" + productos[0].precio + " \n 1) " + productos[1].nombre + "= $" + productos[1].precio + " \n 2) " + productos[2].nombre + "= $" + productos[2].precio + " \n 3) " + productos[3].nombre + "= $" + productos[3].precio + " \n 4) " + productos[4].nombre + "= $" + productos[4].precio + " \n 5) " + productos[5].nombre + "= $" + productos[5].precio))
            while (producto > 5) {
                producto = parseInt(prompt("Opcion incorrecta. Por favor ingrese el numero de la opcion deseada: \n 0) " + productos[0].nombre + "= $" + productos[0].precio + " \n 1) " + productos[1].nombre + "= $" + productos[1].precio + " \n 2) " + productos[2].nombre + "= $" + productos[2].precio + " \n 3) " + productos[3].nombre + "= $" + productos[3].precio + " \n 4) " + productos[4].nombre + "= $" + productos[4].precio + " \n 5) " + productos[5].nombre + "= $" + productos[5].precio))
            };

            let cantidad = parseInt(prompt("cuantos " + productos[producto].nombre + " desea comprar"))
            agregarCarrito(productos[producto], cantidad)
            loop = confirm("usted ha cargado " + carrito.length + " productos. Agregar otra compra?")
            console.log("monto parcial = " + totalCarrito())
            ventasTotales += totalCarrito();
        };

        alert("usted a comprado \n " + listadoComprado() + " \n Su total es $" + totalCarrito());

        // secuencia de comparacion de monto recibido con esperado
        let montoAbonado = parseInt(prompt("Indique el monto con el que abonara"));
        while (montoAbonado < totalCarrito()) {
            alert("Monto insuficiente. Por favor, abone el total del monto")
            montoAbonado = parseInt(prompt("El total es $" + totalCarrito() + ". Ingrese nuevamente"))
        }
        if (montoAbonado > totalCarrito()) {
            let vuelto = montoAbonado - totalCarrito()
            alert("Gracias. Su vuelto es de " + vuelto)

        } else if (montoAbonado === totalCarrito()) {
            alert("Gracias por abonar con lo justo")
        };

        // reset de ventas | cambio de cliente
        carrito.length = 0; //para vaciar el carrito
        clienteNuevo = confirm("Desea generar la compra para otro cliente?");
    }

    alert("las ventas totales durante el dia fueron de $" + ventasTotales);
}

// Ejecucion de la app
appCompra();

console.log("ventas totales " + ventasTotales);
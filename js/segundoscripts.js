

let carrito = []

let seleccion = prompt("Bienvenido, tenemos varios atuendos que puedes comprar, Para continuar ingrese si, para salir ingrese no");

while(seleccion != "si" && seleccion != "no" || seleccion == null){
    alert("No ha seleccionado ninguna opcion");
    seleccion = prompt("Tenemos varios atuendos que puedes comprar. Para continuar ingrese 1.\n Para salir ingrese 0.");
}

if(seleccion == "si"){
    alert("Tenemos los siguientes atuendos");

    let todosLosProductos = productos.map((producto) =>
        producto.nombre + " " + producto.precio + "$");

    alert(todosLosProductos.join(" -- "))

} else if(seleccion == "no"){
    alert("Gracias por su compra, hasta luego");
}

while(seleccion != "no"){
    let producto = prompt("Elige una skin.");
    let precio = 0;

    if(producto == "Emperador" ||producto == "Renegado" ||producto == "Defensor" ||producto == "Arquera"){
       
        switch(producto){
            case "Emperador":
                precio = 10;
                break;

            case "Renegado":
                precio = 20;
                break;

            case "Defensor":
                precio = 30;
                break;

            case "Arquera":
                precio = 40;
                break;

            default:
                break;
        }

    let unidades = parseInt(prompt("¿Cuantas skins quiere llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("Noo tenemos esa skin")
    }

    seleccion = prompt("¿Quieres seguir comprando?");

    while(seleccion === "no"){
        alert("Gracias por su compra, hasta luego");
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto es:
            ${carritoFinal.unidades * carritoFinal.precio}`);
           
        })
        break;
    
    }
}

const total = carrito.reduce ((acc,el) => acc + el.unidades * el.precio, 0);
console.log(`El total a pagar por su compra es: ${total}`)
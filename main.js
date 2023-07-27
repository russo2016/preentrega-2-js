const Productos = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Productos("supreme 7000pff", 13000,10)
let producto2 = new Productos("supreme sin nicotina 2000pff", 8000,14)
let producto3 = new Productos("fume unlimited 7000pff", 12500,5)
let producto4 = new Productos("supreme 2000pff", 8000,8)
let producto5 = new Productos("fume extra 2500pff", 6950,11)
let producto6 = new Productos("fume infinity 3500pff", 9700,2)
let producto7 = new Productos("fume ultra 2500pff", 7700,12)

const lista =[producto1,producto2,producto3,producto4,producto5,producto6,producto7]

function filtrarPorPrecio(){
    let precio = prompt("Ingrese cuanto dinero tiene ").trim()
    while(isNaN(precio)){
        precio = prompt("Ingrese cuanto dinero tiene").trim()
    }
    let resultado = lista.filter((producto) => producto.precio < precio)
    if (resultado.length > 0){
        let clave = prompt("Ingrese el producto que quiere").trim().toUpperCase()
        let resultado1 = resultado.filter((producto) => producto.nombre.toUpperCase().includes(clave))
        while(clave === ""){
            clave = prompt("Ingrese el producto que quiere").trim().toUpperCase()
        }
        if (resultado1.length > 0){
            let resultado2 = resultado1.filter((producto) => producto.stock > 0)
            if (resultado2.length > 0){
                console.table(resultado2)
                return resultado2
            }else{
                alert("No tenemos stock en este momento")
            }
        }else{
            alert("No existe ese producto o sale mas de lo que tiene")
            return resultado1
        }
    } else{
        alert("No le alcanza para nada" )
        return resultado
    }
}


let lista2 = filtrarPorPrecio()
let producto = ""

function comprar(lista2){
    let compra = prompt("Que desea comprar (sea especifico, por favor)")
    if (compra != ""){
        producto = lista2.find((i) => i.nombre === compra);
    }else{
        alert("no se ingreso nada")
        return
    } 
    if (producto){
        alert(compra + " agregado al carrito exitosamente!")
        let precioProducto = producto.precio
        console.log("compró el vaporizador " + compra + " y le sale $" + precioProducto)
    }else{
        alert("No se encontró el producto o no fue especifico")
    }
}

if (lista2.length > 1){
let tienda = prompt("Desea comprar algo? (si/no)").trim().toLowerCase()
while (tienda != "si" && tienda != "no"){
    alert("Dato inválido.")
    tienda = prompt("Desea comprar algo? (si/no)").trim()
}
if (tienda === "si"){
    comprar(lista2)
    alert("Gracias por su compra")
}
if (tienda === "no"){
    alert("Gracias por visitarnos")
}

}else{
    alert("Gracias por visitarnos")
}
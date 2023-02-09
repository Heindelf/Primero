    var Clave = parseInt(prompt("ingrese la clave del producto"))
    var Producto = String(prompt("ingrese el nombre del producto"))
    var Precio = parseFloat(prompt("ingrese el precio del producto"))
    var Cantidad = parseInt(prompt("ingrese la cantidad que se comprara del producto"))

    if (Clave = 1){
 Descuento = Precio *10/100
 Total = Descuento - Precio
console.log("el precio a pagar del producto" + Producto+"con clave"+Clave+"es de"+Total)
    }else if (Clave = 2){  
        Descuento = Precio *20/100
        Total = Precio - Descuento
        console.log("el precio a pagar del producto  " + Producto+" con clave"+Clave+"  es de  "+Descuento)
    }else{
        console.log("el precio a pagar es de"+Precio)
    }
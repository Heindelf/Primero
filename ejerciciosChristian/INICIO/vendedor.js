var sueldoBase = parseFloat(prompt("ingrese el sueldo base del vendedor"))
var ventas1 = parseFloat(prompt("ingrese el valor de la primera venta"))
var ventas2 = parseFloat(prompt("ingrese el valor de la segunda venta"))
var ventas3 = parseFloat(prompt("ingrese el valor de la tercera venta"))

if (Number(ventas1 && ventas2 && ventas3)){
    var venta = (ventas1+ventas2+ventas3*10)/100
var total = venta + sueldoBase
console.log("las ganancias de las ventas son de :" +venta+"$ y las ganancias totales con el sueldo base es de :"+total+"$")
}else {
    console.log("ingrese un dato valido")
}



var Conejos = parseInt(prompt("ingrese la cantidad total que hay de conejos"))
var ConejosBlancos = parseInt(prompt("ingrese la cantidad total de conejos Blancos que se compraran"))
var PrecioBlancos = parseFloat(prompt("ingrese el valor por unidad de conejos blancos"))
var ConejosNegros = parseInt(prompt("ingrese la cantidad total de conejos Negros que se compraran"))
var PrecioNegros = parseFloat(prompt("ingrese el valor por unidad de conejos negros"))

while (ConejosBlancos > Conejos){
    console.log("la cantida excede el total de conejos")
    var ConejosBlancos = parseInt(prompt("ingrese la cantidad total que hay de conejos Blancos"))
    break;
}

while (ConejosNegros > Conejos){
    console.log("la cantida excede el total de conejos")
    var ConejosBlancos = parseInt(prompt("ingrese la cantidad total que hay de conejos Negros"))
    break;
}


if (typeof(Number(Conejos && ConejosBlancos && ConejosNegros))){

    VentaT = ConejosBlancos + ConejosNegros ;
    console.log("la venta total de conejos es de" + VentaT);

    Precio = (PrecioBlancos*ConejosBlancos) + (PrecioNegros*ConejosNegros)
    console.log("el precio total a pagar es de" + Precio);
    
if (ConejosBlancos > ConejosNegros){
    console.log("Se vendieron mas conejos blancos")
}else{
    console.log("se vendieron mas conejos negros")
}

}else {
    console.log("el valor que ingreso no es numerico")
}


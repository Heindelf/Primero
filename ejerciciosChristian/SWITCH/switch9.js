var Visita = String(prompt("ingrese el lugar al que viajara"))
var Distancia= parseFloat(prompt("ingrese la distancia a la cual viajara"))
var Dias = parseInt(prompt("Ingrese los dias en los que estara alojado"))
Pago = Distancia * 2,5
if (Dias > 7 && Distancia > 800){
Descuento = Distancia * 30/100
console.log("el precio con descuento que tendra en su visita a  "+Visita+"   sera de"+Descuento+" $")
}else{
    console.log("el precio que tendra que pagar para ir a"+Visita+"  es de "+Pago+" $")
}
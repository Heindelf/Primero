alert(" Ingrese la base")
var Base = parseFloat(prompt("Base"))
alert(" Ingrese la altura")
var Altura = parseFloat(prompt("Altura"))
var Area =  Base * Altura /2

if (Number.isFinite(Base) && (Base <0)){
    console.log("Ingrese un dato valido")
}else if (Number.isFinite(Altura)&& (Altura < 0)){
    console.log("ingrese un dato valido")
}else{
    console.log("El area del triangulo es de: "+Area )

}




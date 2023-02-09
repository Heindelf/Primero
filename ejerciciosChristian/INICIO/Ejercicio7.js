var Dinero = (50);


var tiro =parseInt(prompt("ingrese que numero desea apostar en el dado"));
var apuesta = parseInt(prompt("ingrese cuanto dinero desea apostar apartir de sus 50 pesos base"))

while(apuesta > 50){
    alert("su apuesta excede al dinero inicial vuelva a ingresar su apuesta")
    var apuesta = parseInt(prompt("ingrese cuanto dinero desea apostar apartir de sus 50 pesos base"))
}
var restante = Dinero - apuesta

var aleatoria = Math.ceil(Math.random()*6);

if (aleatoria === tiro){
    alert ("felicidades usted acaba de ganar")
    gano = apuesta *2
    total = gano + restante
    alert("usted gano :" +gano+ " su total  es de :  "+total )
}else {
    perdida = Dinero - apuesta
    alert("El numero que acaba de salir fue de : sddfwe"+aleatoria+" lo sentimos acaba de perder :" +apuesta+" su total es de : "+ perdida)

}
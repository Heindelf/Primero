alert(" Los siguientes datos haran dos operaciones aritmeticas")
alert("las cuales la primera sera: 3*A-4*B/A*A")
alert("las cuales la primera sera: (((B+C)/2*A+10)*3*B)-6")
alert("A=2 , B = 5 y C=1")

function suma(Primero){
var A=2;
var B=5;
var Primero = 3*A-4*B/A*A
return Primero
}
function suma2(Segundo){
    var C=1;
    var A=2;
    var B=5;
    var Segundo = (((B+C)/2*A+10)*3*B)-6; 
    return Segundo
    }


console.log ("el resultado de la primera operacion es de :"+suma()+" y el segundo resultado es de : "+suma2()); 
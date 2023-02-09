var capital = parseInt(prompt("ingrese la capital que pose en M"));

while (capital < 0) {
  var capital = prompt("ingrese un dato mayor a 0");
}

if (Number(capital === 100)) {
  console.log("podra invertir en la empresa");
} else if (Number(capital > 100)) {
  console.log("podra invertir en mas proyectos");
} else if (Number(capital > 0)) {
  console.log("no tiene fondos sufientes para invertir");
} else {
  console.log("ingrese un dato numerico");
}

////////////////////////////////////////////////////////
let nombre = "christian";

console.log(nombre.length);

for (let i = 0; i < nombre.length; i++) {
  console.log(nombre[i]);
}

//////////////////////////////////////////////////////////

let numero = 0;
while (numero < 10) {
  numero++;
  console.log(numero);
}

//////////////////////////////

let numero2 = 0;

//////////////////////////////

var numero3 = 100;

while (numero3 > 0) {
  console.log(numero2);
  numero2 -= 5;
}

///////////////

    var fibo = 10;
    var num1 = 1;
    var num2 = 0;
    var suma = 0;
    for (i = 1; i <= fibo; i++) {
  num2 = suma;
  suma  = num1 + suma;
  num1=num2;
    console.log(num1); 
    
    }

  
var n = 0;
while (n < 4) {
  var productos = String(prompt("ingrese el producto que desea comprar"));
  n++;
  console.log(productos);
}
let precio1 = parseFloat(
  prompt("ingrese el precio del primer producto que ingreso")
);
let precio2 = parseFloat(
  prompt("ingrese el precio del segundo producto que ingreso")
);
let precio3 = parseFloat(
  prompt("ingrese el precio del tercero producto que ingreso")
);
let precio4 = parseFloat(
  prompt("ingrese el precio del cuarto producto que ingreso")
);

total = precio1 + precio2 + precio3 + precio4;

var tipo = parseInt(
  prompt(
    "ingrese el tipo de pago si es al contado presione 1 y si es con tarjeta de credito presione 2"
  )
);

if (tipo == 1) {
  total = (total * 10) / 100;
  console.log("el precio a pagar es de :" + total + " $");
} else if (tipo == 2) {
  total = (total * 20) / 100;

  console.log("el precio a pagar es de :" + total + " $");
} else {
  console.log("ingrese de nuevo los datos");
}

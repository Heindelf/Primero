
//arrays

arreglo = [1,2,4,3]
console.log(arreglo.length);

console.log(arreglo[0]);
console.log(typeof arreglo);


for (var i = 0; i < arreglo.length; i++) {
  arreglo[i] = 5 
}
console.log
// agregar un elemento al final del arreglo
arreglo.push(true);
console.log(arreglo);
// eliminar el ultimo elemento del arreglo
arreglo.pop();
console.log(arreglo);
// eliminar el primer elemento del arreglo
arreglo.shift();
console.log(arreglo);
// agregar un elemento al inicio del arreglo
arreglo.unshift(5);
console.log(arreglo);
// eliminar un elemento en una posicion especifica
arreglo.splice(2, 3);
console.log(arreglo);
// agregar un elemento en una posicion especifica
arreglo.splice(0, 0, 1, 2, 3, "hola");
console.log(arreglo);
// buscar un elemento en el arreglo
var indice = arreglo.indexOf(5);
console.log(indice);
// copiar un arreglo
var copiaArreglo = arreglo.slice();
console.log(copiaArreglo);
// ordenar un arreglo
var arreglo2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arreglo2.reverse();
console.log(arreglo2);

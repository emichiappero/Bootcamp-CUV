//Variables

let dia1 = "Lu";
let dia2 = "Ma";
let dia3 = "Mi";
let dia4 = "Ju";
let dia5 = "Vi";
let dia6 = "Sa";
let dia7 = "Do";

//Arrays

let dias = ["Lu", 5, "Mi", "Ju", true, "Sa", "Do", "Día Osvaldo"]; //Declaro un array

//alert(dias[4]); // Muestra "Vi" en el alert

//alert(dias[7]); //undefined

//alert("Cant. elementos: " + dias.length); //conocer la longitud de mi array (cant. elementos)

valorDolar = [1000, 1021, 1040, 1032];
clientes = ["cliente1", "cliente2", "cliente2"];

let miArray = []; //crear un array

//agregar datos a un array
miArray[0] = "Emiliano";
miArray[1] = "Santino";
miArray[2] = null;
miArray[3] = "Laura";

//miArray.length -----> me devuelve la cantidad de elementos de miArray
//alert("Length miArray = " + miArray.length);
//alert(miArray[2]);

/*

Lista de compras

Pedir al usuario que ingrese una lista de los productos a comprar.
Mostrar cuántos productos se agregaron a la lista.
Aclaración: si ingresa "NO", significa que no quiere ingresar más productos

*/

// let prod = prompt("Ingrese un producto o NO para finalizar");
// let lista = [];
// let i = 0;

// while (prod != "NO") {
//   lista[i] = prod;
//   prod = prompt("Ingrese un producto o NO para finalizar");
//   i++;
// }

//alert("La cantidad total de productos agregados es " + lista.length);

// let cont = 0;
// while (cont < lista.length) {
//   //alert(lista[cont]);
//   cont++;
// }

//console.log("texto o lo que quiero mostrar en Consola");

let colores = [];
colores[0] = "rojo";
colores[1] = "amarillo";

colores.push("azul"); //agrega un elemento al final del array
colores.push("negro", "blanco", "verde");

console.log(colores);
console.log("Longitud total = " + colores.length);
console.log("El elemento en la posicion 4 es: " + colores[3]);

//Push ----> agrega un elemento al final del array. Ej: miArray.push("algo")
//Pop  ----> elimino el último elemento de un array. Ej: miArray.pop()

colores.pop(); //elimine el ultimo elemento
console.log(colores);

//shift ---> eliminar el primer elemento de un array
colores.shift();
console.log(colores);

//unshift ----> agregar un elemento al comienzo del array
colores.unshift("primer elemento");
console.log(colores);

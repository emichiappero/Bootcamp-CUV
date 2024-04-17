//Estructuras de Repetición

//WHILE (mientras)
//Explicación: mientras la condición sea verdadera, se ejecuta lo que está
//dentro del While

// while (condicion) {
//   //aquí va el códig que quiero repetir
// }

//Ejemplo

// let numero = 4;
// let i = 2;

// while (numero >= i) {
//   alert("este es un mensaje");
//   i = i + 1; //sumamos 1 a i
// }

// let num = parseInt(prompt("ingrese un numero a adivinar"));
// let otro_num = 0;

// while (num > otro_num) {
//   otro_num = parseInt(prompt("Adiviná el número."));
// }

//EJERCICIO
//Pedir al usuario que ingrese un numero
//y mostrar la sumatoria desde el 1 hasta el número ingresado.
// Ej: ingresa el 8.
// Mostrar 1+2+3+4+5+6+7+8 = 36

let numero = parseInt(prompt("Ingrese un número"));
let sumatoria = 0;
let contador = 0;
let texto = "0";

// 5 = 1+2+3+4+5 ----> La sumatoria es 15

while (numero > contador) {
  contador = contador + 1; // contador++;
  sumatoria = sumatoria + contador; // sumatoria += contador;
  texto = texto + " + " + contador;
}

alert("La sumatoria de " + numero + " es " + texto + " = " + sumatoria);

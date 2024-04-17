/*

ESTRUCTURA CONDICIONAL IF (simple)

if(condicion){
  ...
  ....
  ....
  ...
}

if(condicion){
  ....
  ....
}else{
  ....
  ...
}

*/

let edad = 25;

//Quiero mostrar en un alert, un texto, SÓLO SI la edad es mayor o igual a 25

// if (edad >= 25) {
//   alert("La codición SI se cumple");
// } else {
//   alert("La condición NO se cumple");
// }

//Operadores Matemáticos/Aritméticos de comparación
/* 

- Mayor que ( > )
- Menor que ( < )
- Mayor o igual ( >= )
- Menor o igual ( <= )
- Igual ( == )
- Distinto ( != )

*/

/*

Operadores lógicos (comparan 2 o más condiciones)

AND (y) ---> && 
OR  (o) ---> ||
NOT (negación) ----> !


Ej:

condicion1 && condicion2
condicion1 || condicion2
!condicion1

!true == false
!false == true

*/

// let a = true;
// let b = 30;
// let c = "hola";

// if ((true == a || c > 3) && b <= b - 1) {
//   alert("Este es un mensaje");
// } else {
//   alert("Este mensaje SI se va a mostrar, porque el resultado es FALSO");
// }

let numero = prompt("Ingrese su edad"); //pide un dato al usuario

alert(typeof numero); // 34

parseInt(numero); // parseInt ---> convertir un string a numero entero
parseFloat("45.9"); //parseFloat ---> convierto de string a numero decimal

/*

Pedir al usuario que ingrese su edad y sólo si es mayor de edad, mostrar un 
mensaje (alert) que diga que puede consumir alcohol.
Caso contrario, mostrar un mensaje que indique que es menor de edad.

*/

if (conficion1) {
  if (condicion2) {
    algo;
  }
} else {
}

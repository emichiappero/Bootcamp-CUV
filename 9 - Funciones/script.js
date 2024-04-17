// Funciones

// DRY = Don't Reapeat Yourself (No repitas)

// FUncion es un bloque de código que escribimos una vez, y lo utilizamos
// todas las veces que nosotros querramos

//Forma de DECLARAR una función
// function sumar(){
//   let a = 10;
//   let b = 20;
//   let resultado = a + b;
//   alert(resultado);
// }

//Forma de "llamar" o "utilizar" una Funcion
//sumar(); //ejecutando la función sumar (instanciar)

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   alert(resultado);
// }

// sumar(30, 10); // ejecutando mi funcion, pasandole 2 valores
// sumar(2, 5);

// let a = 15;
// let b = 5;
// sumar(b, b); //10

//Return en Funciones

//Funcion que SUMA 2 numeros y devuelve el resultado
function suma(n1, n2) {
  let resultado = n1 + n2;
  return resultado;
}

//funcionque RESTE 2 numeros y devuelve el resultado
function resta(n1, n2) {
  let resultado = n1 - n2;
  return resultado;
}

//Funcion que MUESTRA un texto en un alert, según un valor recibido por param
function mostrarResultado(res) {
  alert("El resultado es = " + res);
}

let operacion1 = suma(50, 20);
//mostrarResultado(operacion1);

let operacion2 = resta(42, 20);
//mostrarResultado(operacion2);

// crear una función que reciba 2 parametros (nombre y apellido),
// y retorne/devuelva el nombre y apellido unidos por una coma (ej: Juan, Perez)
// lo muestro en un alert

//Declaro la funcion
function nombreCompleto(nombre, apellido) {
  //Forma larga
  let res = nombre + ", " + apellido;

  let i = 1;

  if (i == 1) {
    return res;
  } else {
    return "ERROR 404";
  }
}

alert(nombreCompleto("Juan", "Perez"));

alert(nombreCompleto("Laura", "Lopez"));

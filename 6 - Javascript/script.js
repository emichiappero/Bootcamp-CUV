//alert("Esta es la forma Externa");

/* TIPOS DE DATOS 

12345     -----> numero/entero/int
12345.98  -----> numero/decimal/float

"texto"   -----> cadena de caracteres/string
'12345'   -----> cadena de caracteres/string
"hola123" -----> cadena de caracteres/string

true      -----> boolean/booleano
false     -----> boolean/booleano

null      -----> valor vacío
undefined -----> no tiene valor definido (aún)

*/

//Variables = un lugar donde se puede almacenar datos.
// Técnicamente hablando: es un espacio reservado de memoria

var nombre_de_la_variable; // declaré mi variable (crear)
nombre_de_la_variable = 456; // asignando un valor a la variable

var apellido = "Lopez"; //declarando y asignando un dato a mi variable

//Para crear una variable utilizo la siguiente fórmular
// pablabra_reservada nombre_variable = valor
// Ej: var listadoClientes = "listado"

//SI está permitido
var nombre_completo //guiones bajos
var nombreCompleto //camel Case (notación camello)
var usuarioLogueado
var cliente2 //utilizar numeros al final


//NO está permitido
var var; //no puedo nombrar a mi variable con una palabra reservada
var nombre.apellido; //no puedo utilizar puntos
var 123listado; //no puedo comenzar por un número
var gustos;helados; //no puedo utilizar ; en el nombre
var acción; //no puedo utilizar acento
var añoCreacion; //no puedo utilizar ñ
var pingüinos;


var edad = 12;
var nombre = "Emiliano";
var padreNuestro = "Padre nuestro ......."

var accion;
var anio;

//Ejemplos

var iva = 21;
var total = 1976.24;
var nombreCliente = "Agustina Perez";
var userLogin = true;
var modeDark = false;
var dispositivoPrendido = "aspiradora";
var texto = 'este es un texto de prueba';

let suma = 12;
let bandaRock = "Nirvana";


//Suma ---> se suman los numeros
let num1 = 100;
let num2 = 1.4;

let miVariable = num1 + num2; //101.4


//Concatenar (unir) ----> se concatenan los string
let color = "rojo";
let edad = 34;
let pais = "Argentina - ";

let res = pais + color + edad + "HOLA CHICOS"; //Argentina - rojo34Hola chicos

alert(res); // Argentina - rojo34Hola chicos


/*

Ejercicio: 
Guardar en variables: sus nombres, apellidos y edad. Y mostrarlo en un alert:
Ej: Emiliano Chiappero, 39 años

*/
//Objetos

// Par clave-valor
// clave : valor
// key : value

let miArray = ["rojo", "azul", "verde"]; //array

miArray[3] = "amarillo"; // rojo, azul, verde, amarillo

console.log(miArray[2]); // verde



let usuario = {
  telefono: 12345678,
  mayorEdad: true,
  nacionalidad: "Argentino",
  email: "emiliano@gmail.com",
  apellido: "Chiappero",
};

// Para acceder y/o agregar y/o modificar una propiedad/atributo:

//ACCEDER u OBTENER un atributo o propiedad
//dot notation (notación de puntos)
console.log(usuario.telefono); // accedo al valor telefono del usuario

//corchetes
console.log(usuario["telefono"]); //accedo al valor telefono del usuario


// AGREGAR un atributo o propiedad
usuario.colorOjos = "marrones"; // notacion puntos

usuario["colorOjos"] = "marrones"; //notacion corchetes


// Modificar un atributo  o propiedad
usuario.mayorEdad = false; //notacion puntos

usuario["mayorEdad"] = false; //notacion corchetes


/*
Pedir por prompt al usuario los NOMBRES de sus familiares directos 
(padre, madre, hermana, hermano, hijo, hija, esposa, esposo).

Guardar esos nombres en un objeto. 
y Luego agregar el atributo mascota con el nombre de una mascota.
Finalmente mostrar el valor de la madre y la mascota.
*/
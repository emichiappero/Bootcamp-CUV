let i = 0; //contador para utilizar en el While
let boton = document.getElementsByClassName("comprar"); //selecciono todos los elementos con clase "comprar"
let carrito = document.getElementById("carrito"); //selccionamos el div con ID = "carrito"

let texto_carrito = "";

console.log(boton.length); //cant de botones (longitud)

while (i < boton.length) {
  let boton_id = boton[i].getAttribute("id"); //obtener el ID de cada boton
  let precio = boton[i].getAttribute("data-precio"); //accedo al atributo data-precio
  let descripcion = boton[i].getAttribute("data-producto"); //accedo al atribito data-producto

  texto_carrito = boton_id + " - " + descripcion + " [ $" + precio + " ]";

  //agregamos el Oyente del evento "click" a cada boton particular
  boton[i].addEventListener("click", function () {
    //lo que hago cuando se dispare el evento "click"

    carrito.textContent = texto_carrito;

    //alert("comprar " + boton_id + " - $" + precio);
    console.log(
      "Comprando... " + boton_id + " - " + descripcion + " [ $" + precio + " ]"
    );
  });

  i++;
}

// Ejercicio 1

let imagen1 = document.getElementById("img1");
let imagen2 = document.getElementById("img2");

let imagen = document.getElementById("imagen");

imagen1.addEventListener("click", function () {
  imagen.src = "https://dummyimage.com/600x400/000/fff&text=imagen+1";
  imagen1.setAttribute("disabled", true);
  imagen2.removeAttribute("disabled");
});
imagen2.addEventListener("click", function () {
  imagen.src = "https://dummyimage.com/600x400/f216f2/0011ff&text=imagen+2";

  imagen2.setAttribute("disabled", true);
  imagen1.removeAttribute("disabled");
});

//Ejercicio de las vocales
let input = document.getElementById("texto");
let resultado = document.getElementById("resultado");

function vocales(texto) {
  let i = 0;
  let long = texto.length;
  let array = [];
  while (i < long) {
    array[i] = texto[i];
  }
  return array;
}

input.addEventListener("keypress", function () {
  let palabra = vocales(input.value);
  console.log(palabra);
});

//incluir librerias o paquetes
const express = require("express");

//instanciar express
const app = express();

//si el cliente ingresa por [GET] http://google.com ---> servidor me de una respuesta
// peticion/request (cliente) ----> respuesta/response (servidor)

//end points (rutas) ---> necesito el metodo y url

// [GET] http://localhost:4000/hola
app.get("/hola", function (req, res) {
  res.send("Holaaa"); //enviamos la respuesta
});

// [GET] http://localhost:4000/nombre/5op/Roberto

app.get("/nombre/:a/:b", function (req, res) {
  let param_a = req.params.a;
  let param_b = req.params.b;

  res.send(param_a + " - " + param_b);
});

app.get("/detalle/:album", function (req, res) {
  let disco = req.params.album;
  if (parseInt(disco) > 5) {
    res.status(404).send("<h3>No se encuentra el Album</h3>");
  } else {
    res.send("<h2>Viendo el detalle del Album #" + disco + "</h2>");
  }
});

app.listen(4000, function () {
  console.log("Servidor iniciado en http://localhost:4000");
});

//Ejercicio: Crear una ruta que reciba 2 parametros y sean gustos de helados
// Como respuesta el servidor debera mostrar "Mi helado favorito es de XXXXX y XXXXXX"

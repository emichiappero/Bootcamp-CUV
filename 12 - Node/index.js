// Creando un servidor web usando Node
// //Incluimos librerías/modulos que necesitamos
// const http = require("http");
// const fs = require("fs");

// //creamos un objeto con nuestro servidor utilizando el modulo HTTP
// http
//   .createServer(function (req, res) {
//     //Creando la cabecera de la respuesta que va a dar el servidor
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//       "Access-Control-Allow-Origin": "*",
//     });

//     //tomamos el archivo index.html utilizando el modulo "fs"
//     let archivoHtml = fs.createReadStream(__dirname + "/index.html");

//     //enviamos el archivo como parte de la respuesta/response
//     archivoHtml.pipe(res);
//   })
//   .listen(3000); //el servidor escucha el puerto 3000 (http://localhost:3000)

// console.log("Estamos visitando el sitio http://localhost:3000");

//Creando un servidor web utilizando Express

// instanciamos o incluimos los paquetes/modulos necesarios
const express = require("express");
const app = express();

//aca especificamos la ruta y metodo de la peticion del cliente

// GET http://localhost:3000/
app.get("/inicio", function (req, res) {
  //enviar el archivo
  res.sendFile(__dirname + "/index.html");
});

app.get("/saludo/:nombre", function (req, res) {
  let name = req.params.nombre;

  console.log("Hola " + name);
  res.send("Hola " + name);
});

//Escuchar el puerto 3000
app.listen(3000);

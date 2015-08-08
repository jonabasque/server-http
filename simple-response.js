var http = require("http");

//La funcion que pasamos como primer paramentro del método createServer recibe 2 parámentros que son la peticion y la respuesta. //En el método createServer tendré los parámetros que le paso a la funcion manejadora del evento, cuando se produzca. Por lo que al indicarlos no le estoy pasando algo que no existe, por que si existe. Son variables u objetos que están en el ambito de la funcion createServer.
http
	.createServer(function(request, response){ 
		//Por dejecto nos lo devuelve en texto plano text/html
		response.writeHead(200, {"Content-type": "text/html"});
		//response.write("Hola, esta es la respuesta desde el servidor HTTP"); 
		response.end("<h1>Hola navegador, desde server Node.js</h1>"); //podemos pasar a end() la respuesta.

	})
	.listen(3000); // .listen() no es de httpo es de la respuesta de createServer() si lo invocamos sobre http.listen() nos dice no definido

console.log("Server escuchando en el http://localhost:3000"); 

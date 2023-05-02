const http = require("http");
const fs = require("fs");

function req(request, response) {
	if (request.url === "/quiz.js") {
		let file = fs.createReadStream("quiz.js");
		file.pipe(response);
		response.writeHead(200, { "Content-Type": "text/javascript" });
	} else {
		let file = fs.createReadStream("Login Page.html");
		file.pipe(response);
		response.writeHead(200, { "Content-Type": "text/html" });
	}
}

http.createServer(req).listen(5500);
console.log("Server is listening at port 5500");

var http = require('http');
var fs = require('fs');


//404 response
function send404(response){
	response.writeHead(404,{"context-type" : "text/plain"});
	response.write("error 404 : page not found!!!");
	response.end();
}

//handling user request
function onRequest(request,response){
	if(request.method=='GET'&&request.url=='/'){
		console.log("a user nade a request" + request.url);

		//request.url == / means trying to connect to homepage

		response.writeHead(200,{"context-type":"text/plain"});
		fs.createReadStream('./index.html').pipe(response);

	} else{
		send404(response);
	}
}


// function onRequest(request,response){
// 	console.log("a user nade a request" + request.url);
// 	response.writeHead(200,{"context-type": "text/plain"});
// 	response.write("here is your response");
// 	response.end();
// }
http.createServer(onRequest).listen(8080);
console.log("i am listening....")
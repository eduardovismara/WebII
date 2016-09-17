// JavaScript Document
var http = require('http'),
	  fs = require('fs'),
   index = fs.readFileSync('index.html');
    user = fs.readFileSync('user.html');
    naoencontrada = fs.readFileSync('naoencontrada.html');
	
var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	
	if(req.url == "/"){
		res.write(index);
	}else if(req.url == "/user"){
		res.write(user);
	}else{
		res.writeHead(404);
		res.write(naoencontrada);
	}
	res.end();
});

server.listen(3000, function(){
		console.log('Executando Server http (Porta 3000)');
	});
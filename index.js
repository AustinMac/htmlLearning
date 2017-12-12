var express = require('express');//looks in pacakge.json for a module called express. 
//In dependencies is a pacakge called express so this will be validated. Then it stores it in the variable express..
var app = express(); //so evoking the function from vriable express, to create a new server, 
//which is stored in varibale app. 

var api = require('./api.js');

app.use('/api', api);

app.get("/",function(request,response){//express only allows one response per end point and app.get is an end point. // the "/" = localhost:8080/
    //response.send("Hello World");
    response.sendfile("./index.html")
});//first argument is the url, second is a function.

app.get("/HelloWorld",function(request,response){//second end point at localhost:8080/HelloWorld
    response.send("Hello World");
});//first argument is the url, second is a function.

app.listen(8080); //8080 is a port number it lists it to port 8080.

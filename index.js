// create a http server an api server we use built in module of node js http
const http = require("http") // built in module of node js
const myServer = http.createServer((req,res)=>{
  console.log('request recived');
  res.end('hello from my server');// we end the server after giving response with .end
  
}); // create a server / web server 
// we need a handler function to run this server
// handler function helps to process incoming request and send response back to client
// createServer function takes a handler function as an argument (takes a request listener callled callback function)---> this is responsible incoming request and send response back to client with two parameters ((req,res)=>{})
// req is request object and res is response object
// req include request header and body which is sent by client and include request method, url, headers, and more
// req information include ip address, what is request, meta data 
// res is what we send back to client
myServer.listen(8000,()=>{ console.log('server is running on port 8000')})//8000 is a port number, port number is door, a house has many doors. where we need to run this server. one server can run on one port only. multiple server cant run on same port 
// then we give a callback function in 2nd parameter.. if everything goes fine it will run the callback function
//to run this server we need to call listen method on server object
// here server object is const myServer

// if we create any changes it wont show on the server we need to kill



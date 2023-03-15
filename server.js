const http = require('http');

const server = http.createServer( (req, res) => {
  /*console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Welcome to my node js Project</h1></body>')
  res.write('</html>');
  res.end(); */

  if(req.url == '/'){
    res.end('<body><h1>Welcome to my node js Project</h1></body>')
  }
  if(req.url == '/home'){
    res.end("Welcome Home");
  }
  else if(req.url == '/about'){
    res.end("Welcome to About Us page");
  }
  else if(req.url == '/node'){
    res.end('Welcome to my Node Js project');
  }
  else{
    res.writeHead(404, {"Content-type":"text/html"});
    res.end("<h1> Error 404 </h1>");
   } 
})

server.listen(7000, '127.0.0.1', () => {
    console.log("Code is running in 3000 port")
})

/* When url = /home , return response ==> Welcome home
When url = /about, return response ==> Welcome to About Us page
When url =/node, return response ==> Welcome to my Node Js project */
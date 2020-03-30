var http = require("http");
var fs= require("fs");
//var message= "This is it"
http.createServer(function(req, res) {

    fs.readFile('index.html',function(err, data){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    
    res.end();

    req.on('data', (chunk) => {
      fs.writeFile('mytext.txt', '/message', function(err, file){
        if (err) throw err;
        console.log('saved');
      });
    })
  });
})
  .listen(8080);

  
    

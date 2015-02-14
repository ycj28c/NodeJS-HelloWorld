var sys = require("sys"),  
    http = require("http");  
http.createServer(function(request, response) {  
    response.writeHead(200, {"Content-Type": "text/html"});  
    response.write("Hello World!");  
    response.end();  
}).listen(8080);  
sys.puts("Server running at http://localhost:8080/"); 
//然后我们在命名台中输入命令node http.js，在浏览器输入http://localhost:8080/
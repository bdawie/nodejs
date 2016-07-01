var http= require("http");
var static = require("./static");
http.createServer(function (request,response){
    if(static.canHandleRequest(request)){
        static.serveStaticAsset(request,response);
        return;
    }
      response.end('Hello World');
}).listen(5000,"127.0.0.1", () => {
    console.log('Server is running');
});
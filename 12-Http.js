const http = require('http');

const server = http.createServer((req, res)=>{
    switch(req.url) {
        case '/' : 
            res.end(`<h1>Main page</h1>`);
            break;
        case '/about' : 
            res.end(`<h1>About</h1>`);
            break; 
        default : 
            res.end(`<h1>Oops !!! Wrong page</h1><p><a href="/">back to first page</a></p>`)
        
    }
})

server.listen(5000);
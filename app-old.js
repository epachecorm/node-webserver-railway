const http = require('http');

http.createServer((req, res) => {
    console.log(req);

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200,{ 'Content-Type': 'text/plain'});

    res.write('id, nombre\n');
    res.write('1, Fernando\n');
    res.write('2, Maria\n');
    res.write('3, Juan\n');
    res.write('4, Pedro\n');    

    res.write('404 | Page not found');
    res.end();
}).listen(8080);

console.log('Listening on port ', 8080);
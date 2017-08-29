let http = require('http');
let server = http.createServer(function (request, response) {

    console.log(request);

    let players = [{ name: 'sachin', age: 40 }, { name: 'dravid', age: 402 }];

    //response.setHeader('Content-Type', 'application/json');
    if (request.url.indexOf('mallik') > 0) {
        response.writeHead(401);
        response.end();
    }
    else if (request.url.indexOf('page2') > 0) {
        response.write('This is a Test Page 2');
    }
    else if (request.url.indexOf('players') > 0) {
        response.write(JSON.stringify(players));
    }
    else {
        response.write(`<html>
        <h1> Node JS</h1>
        <hr>
        <h3>This is rendered from Node</h3>
        </html>`);
    }



    response.end();

})

server.listen(1234);
const http = require('http')

http.createServer((request, response) => {

    console.log(request.url)

    if (request.url === '/') {
        response.write('Welcome to the server')
        return response.end()
    }

    if (request.url === '/about') {
        response.write(`
        <h1>acerca de</h1>
        <p>Esta página no se encontró</p>
        `)
        return response.end()
    }
    response.write(`
        <h1>Not Found</h1>
        <p>Esta página no se encontró</p>
        <a href="/">Volver a la página principal</a>
    `)
    return response.end()
}).listen(3000)


console.log('Listen port 3000')

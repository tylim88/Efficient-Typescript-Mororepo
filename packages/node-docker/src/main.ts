import * as http from 'http'

const server = http.createServer((request, response) => {
    response.end('Hello, World')
})
server.listen(3000)

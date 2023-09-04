const  http = require('http')

const server = http.Server((req,res) =>{
   if (req.url === '/') {
    res.end('Welcome to our homepage')
   }
   if (req.url === '/about') {
    res.end('Here is our short history')
   }
  res.end( `
  <h1>Oop !</h1>
  <p>We can't seems to find the page you are looking for </p>
  <a href="/">Back home</a>
  `)
})

server.listen(5000);
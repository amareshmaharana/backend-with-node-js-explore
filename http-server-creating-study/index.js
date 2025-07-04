import http from "http"
import fs from "fs"
import url from "url"
import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.end('Welcome to home page')
})

app.get('/about', (req, res) => {
    res.end(`Hey ${req.query.name}`)
})

app.listen(5000, () => {
    console.log('Server started')
})

// before entry of express.js
// const serverHandler = (req, res) => {
//     if(req.url === '/favicon.ico') return res.end()
    
//     const log = `New req received at : ${Date.now()} and url: ${req.url}, with method: ${req.method}\n`

//     const myUrl = url.parse(req.url, true)
//     // console.log(myUrl)

//     switch (myUrl.pathname) {
//         case '/':
//             res.end('Home page')
//             break;
//         case '/about':
//             const username = myUrl.query.myname
//             res.end(`Hi, ${username}`)
//             break;
//         case '/search':
//             const search = myUrl.query.search_query
//             res.end(`You searched for: ${search}`)
//             break;
//         case '/sign-up':
//             if(req.method === 'GET') res.end('This is a sign up page')
//             if(req.method === 'POST'){
//                 res.end('You signed up')
//             }
//             break;
//         default:
//             res.end('404 Not Found')
//             break;
//     }
//     fs.appendFile("log.txt", log, (err, data) => {
//         if(err){
//             console.log(err)
//         }
//         // console.log(data)
//         // res.end('Hello from server!')
//     })
// }

// const server = http.createServer(app)

// server.listen(5000, () => {
//     console.log('Server started')
// })
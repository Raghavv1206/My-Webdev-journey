const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About us!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})
app.get('/blog', (req, res) => {
  res.send('hello blog!')
})


app.get('/blog/:slug', (req, res) => {
  //logic to fetch {slug} from the db
  //for url: http://127.0.0.1:3000/blog/intro-to-padosi?mode=dark&region=in
  console.log(req.params)  //will output { slug: 'intro-to-padosi' }
  console.log(req.query)  //will output { mode: 'dark', region: 'in' }

  res.send(`hello ${req.params.slug}!`)
})


// app.get('/blog/intro-to-js', (req, res) => {
//   //logic to fetch intro to js from the db
//   res.send('hello intro-to-js!')
// })
// app.get('/blog/intro-to-py', (req, res) => {
//   //logic to fetch intro to py from the db
//   res.send('hello intro-to-py!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


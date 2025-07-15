
// ejs website : ejs.co 
// github wiki page for express and ejs https://github.com/mde/ejs/wiki/Using-EJS-with-Express



const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "Adidas";
    let searchtext = "Search Now"
    let arr = [1, 54, 65]
  res.render("index", {sitename : sitename, searchtext: searchtext, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogtitle = "Adidas why and when?";
    let blogcontent = "its a very good brand"
  res.render("blogpost", {blogtitle: blogtitle, blogcontent:blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

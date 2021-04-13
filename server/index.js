const bodyparser = require('body-parser')
const express = require('express')

//admin account
var admin = require('firebase-admin')
const cors = require('cors')

const isAuthenticated = require('./authMiddleware')

var serviceAccount = require("./recipes-666-firebase-adminsdk-7nbon-6ccc26f890.json")
var pool = require('./main/db')

const app = express()

app.use(cors())

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

// body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//db connect
pool.connect()

//authentication
app.get('/', isAuthenticated, (req, res, next) => {
  res.status(200)
  res.json({ ok: true })
})

//get all recipes
app.get('/recipes', (req, res, next) => {
  pool.query("SELECT * FROM recipes ORDER BY _id;", (q_err, q_res) => {
    res.json(q_res.rows)
  })
  res.status(200)
})

//get all recipes by type
app.get('/recipes/:type', (req, res, next) => {
  const type = req.params.type;
  pool.query("SELECT * FROM recipes WHERE type = $1;", [type], (q_err, q_res) => {
    res.json(q_res.rows)
  })
  res.status(200)
})

//get a recipe details
app.get('/recipes/details/:_id', (req, res, next) => {
  const _id = req.params._id;
  pool.query("SELECT * FROM recipes WHERE _id = $1;", [_id], (q_err, q_res) => {
    res.json(q_res.rows)
  })
})

//create a recipe
app.post('/recipes/create', (req, res, next) => {
  const values = [req.body.type, req.body.name, req.body.products, req.body.description, req.body.imageUrl, req.body.author]
  pool.query(`INSERT INTO recipes (type, name, products, description, imageurl, author, likes, date_created) VALUES ($1, $2, $3, $4, $5, $6, 0, NOW() );`, 
    values, (q_err, q_res) => {
      if (q_err) { 
        return 
      }
      res.json(q_res.rows)
  })
})

//update a recipe
app.post('/recipes/:_id/edit', (req, res, next) => {
  const values = [req.body.type, req.body.name, req.body.products, req.body.description, req.body.imageurl, req.body._id]
  pool.query(`UPDATE recipes SET type = $1, name = $2, products = $3, description = $4, imageurl = $5, date_updated = NOW() WHERE _id = $6;`, 
    values, (q_err, q_res) => {
      if (q_err) { 
        return 
      }
      res.json(q_res.rows)
  })
})

//update likes
app.post('/recipes/:_id/like', (req, res, next) => {
  const _id = req.params._id;
  const likes = req.body.likes;
  pool.query(`UPDATE recipes SET likes = $1 WHERE _id = $2 RETURNING likes as new_likes;`, 
    [likes, _id], (q_err, q_res) => {
      if (q_err) { 
        return 
      }
      res.json(q_res.rows)
  })
})

//admin account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

//start server
app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})
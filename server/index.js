// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

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


// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

pool.connect()


app.get('/', isAuthenticated, (req, res, next) => {
  res.status(200)

  //check for a specific user
  // if (req.user.email !== 'admin@user.bg') {
  //   console.log('You are not the admin');
  // }

  // app.get('/users/:userId', isAuthenticated, (req, res) => {})

  res.json({ ok: true })
  // console.log(req.headers.authorization);
  // const token = req.headers.authorization;
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

//admin account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})
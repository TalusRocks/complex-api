const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid/v4')

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(morgan('dev'))

// const authorRoutes = require('./src/routes/authors')
// app.use('/books/:bookId/authors', authorRoutes)

const bookRoutes = require('./src/routes/books')
app.use('/books', bookRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: "Not found"}})
})

const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener)

module.exports = app

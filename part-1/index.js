const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/supported-operations', (req, res) => {
  res.send('supported-operations')
})

app.get('/square', (req, res) => {
  res.send('square')
})

app.get('/compute', (req, res) => {
  res.send('compute')
})

const port = 3000
app.listen(port, () => {
  console.log('Express server is listening on port', port)
})

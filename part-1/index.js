const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/api/supported-operations', (req, res) => {
  const supportedOperations = {
    "/": "division",
    "+": "addition",
    "-": "subtraction",
    "*": "multiplication"
  }
  res.json(supportedOperations)
})

app.get('/api/square?:number', (req, res) => {
  const number = Number(req.query.number)
  const response = {"result": Math.pow(number, 2)}
  res.json(response)
})

app.get('/api/compute', (req, res) => {
  res.send('compute')
})

const port = 3000
app.listen(port, () => {
  console.log('Express server is listening on port', port)
})

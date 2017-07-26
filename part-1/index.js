const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

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

app.post('/api/compute', (req, res) => {
  const operator = req.body.operator
  const operands = req.body.operands

  if(operator === "+"){
    res.send({result: operands[0] + operands[1]})
  }
  if(operator === "-"){
    res.send({result: operands[0] - operands[1]})
  }
  if(operator === "*"){
    res.send({result: operands[0] * operands[1]})
  }
  if(operator === "/"){
    res.send({result: (operands[0] / operands[1]).toFixed(2)})
  }
  else {
    res.status(404).send({error: "invalid operator '" + operator + "'. Valid operators are /, +, -, *"})
  }
})

const port = 3000
app.listen(port, () => {
  console.log('Express server is listening on port', port)
})

const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({
  database: 'grocery_store'
})

const checkTest = () => {
  return 2
}

module.exports = {
  checkTest,
  db
}

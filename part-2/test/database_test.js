const expect = require('chai').expect
const {checkTest, queries, db} = require('../database.js')
const pgPromise = require('pg-promise')
const pgp = pgPromise()

describe("Phase 3 Assessment, Part 2", () => {
  it("'AllItems' should display a list of items", () => {
    return queries('allItems')
      .then( (data) => {
        pgp.end()
        expect(data.slice(0,188)).to.eql('ID   Name          Price    Section\n-----------------------------------------\n1    Aluminum F... 8.84     miscellaneous\n2    Apples        10.81    produce\n3    Bacon         9.01     meat')
      })
  })
})

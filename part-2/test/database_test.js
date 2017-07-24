const expect = require('chai').expect
const {checkTest, db} = require('../database.js')
const pgPromise = require('pg-promise')
const pgp = pgPromise()

describe("Checking that this test is connecting properly", () => {
  it("2+2=4", () => {
    expect(checkTest() + 2).to.eql(4)
  })
  it('2+2=3 should fail', () => {
    expect(checkTest() +2).to.eql(3)
  })
})

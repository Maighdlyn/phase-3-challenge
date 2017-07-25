const expect = require('chai').expect
const {allItems, itemsInSection, cheapItems, countItemsInSection} = require('../database.js')
const pgPromise = require('pg-promise')
const pgp = pgPromise()

describe("Phase 3 Assessment, Part 2", () => {
  it('A call to countItemsInSection("packaged") returns 5', () => {
    return countItemsInSection("packaged")
      .then( (data) => {
        pgp.end()
        expect(data).to.eql('There are 5 items in the packaged section.')
      })
  })

  it(' A call to itemsInSection("bulk") returns the items "Flour", "Pasta", and "Rice"', () => {
    return itemsInSection('bulk')
      .then( (data) => {
        pgp.end()
        expect(data).to.eql('ID   Name \n------------------\n16   Flour\n33   Pasta\n36   Rice')
      })
  })

  it('A call to cheapItems() returns the item with name "Fish" as the first item and the item with name "Honey" as the last item', () => {
    return cheapItems()
      .then( (data) => {
        pgp.end()
        expect(data.slice(0,79)).to.eql('ID   Name         Price \n------------------------------\n15   Fish          0.49')
        expect(data.slice(728, 751)).to.eql('22   Honey         9.31')
      })
  })

  it('"AllItems" should display a list of items', () => {
    return allItems()
      .then( (data) => {
        pgp.end()
        expect(data.slice(0,188)).to.eql('ID   Name          Price    Section\n-----------------------------------------\n1    Aluminum F... 8.84     miscellaneous\n2    Apples        10.81    produce\n3    Bacon         9.01     meat')
      })
  })
})

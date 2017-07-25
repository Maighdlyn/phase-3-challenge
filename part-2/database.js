const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({
  database: 'grocery_store'
})

const formatSpaces = (string, maxLength) => {
  if (string.length > maxLength) {
    return string.slice(0,maxLength) + "..."
  }
  else {
    while (string.length < maxLength + 3){
      string += ' '
    }
    return string
  }
}

const allItems = () => {
    return db.any('SELECT * FROM items')
      .then( (data) => {
        const header = 'ID   Name          Price    Section\n-----------------------------------------\n'
        const rows = data
          .map(item => formatSpaces(item.id.toString(), 2) + formatSpaces(item.name, 10) + ' ' + formatSpaces(item.price, 5) + ' ' + item.section)
          .join('\n')
        return header + rows
      })
  }

const itemsInSection = (section) => {
    return db.any('SELECT * FROM items WHERE section = $1', [section])
    .then( (data) => {
      const header = 'ID   Name \n------------------\n'
      const rows = data
        .map(item => formatSpaces(item.id.toString(), 2) + item.name)
        .join('\n')
      return header + rows
    })
  }

const cheapItems = () => {
  return db.any('SELECT * FROM items WHERE price < 10.00 ORDER BY price')
    .then( (data) => {
      const header = 'ID   Name         Price \n------------------------------\n'
      const rows = data
        .map(item => formatSpaces(item.id.toString(), 2) + formatSpaces(item.name, 10) + ' ' + formatSpaces(item.price, 5))
        .join('\n')
      return header + rows
    })
}

const countItemsInSection = (section) => {
    return db.any('SELECT COUNT(*) FROM items WHERE section = $1', [section])
    .then( (data) => {
      return "There are " + data[0].count + " items in the " + section + " section."
    })
}

const checkNodeQuery = (query, parameter) => {
  switch(query) {
    case 'allItems':
      return allItems()
      break
    case 'itemsInSection':
      return itemsInSection(parameter)
      break
    case 'cheapItems' :
      return cheapItems()
      break
    case 'countItemsInSection' :
      return countItemsInSection(parameter)
      break
    case 'mostRecentOrders' :
      console.log("Recent orders")
      break
    case 'lastShopperName' :
      console.log("last shopper")
      break
    case 'orderTotal' :
      console.log("total for id " + parameter)
      break
  }
}

if(require.main === module) {
  const nodeQuery = process.argv[2]
  const nodeParameter = process.argv[3]
  checkNodeQuery(nodeQuery, nodeParameter)
    .then( (data) => {
      console.log(data)
      pgp.end()
    })
}


module.exports = {
  allItems,
  itemsInSection,
  cheapItems,
  countItemsInSection
}

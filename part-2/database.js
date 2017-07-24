const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({
  database: 'grocery_store'
})

const formatSpaces = (string, maxLength) => {
  if (string.length > maxLength) {
    return string.slice(0,10) + "..."
  }
  else {
    while (string.length < maxLength + 3){
      string += ' '
    }
    return string
  }
}

const queries = (query, parameter) => {
  switch(query) {
    case 'allItems':
      return db.any('SELECT * FROM items')
        .then( (data) => {
          // console.log(data)
          const header = 'ID   Name          Price    Section\n-----------------------------------------\n'
          const rows = data
            .map(item => formatSpaces(item.id.toString(), 2) + formatSpaces(item.name, 10) + ' ' + formatSpaces(item.price, 5) + ' ' + item.section)
            .join('\n')
          return header + rows
        })
      break;
    case 'itemsInSection':
      console.log("These items are in " + parameter)
      break;
    case 'cheapItems' :
      console.log("Items under $10")
      break;
    case 'countItemsInSection' :
      console.log("count stuff in " + parameter)
      break;
    case 'mostRecentOrders' :
      console.log("Recent orders")
      break;
    case 'lastShopperName' :
      console.log("last shopper")
      break;
    case 'orderTotal' :
      console.log("total for id " + parameter)
      break;
  }
}

if(require.main === module) {
  const nodeQuery = process.argv[2]
  const nodeParameter = process.argv[3]
  queries(nodeQuery, nodeParameter)
    .then( (data) => {
      console.log(data)
      pgp.end()
    })
}

module.exports = {
  // checkTest,
  queries,
  db
}

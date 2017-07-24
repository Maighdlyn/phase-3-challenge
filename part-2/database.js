const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({
  database: 'grocery_store'
})

// const checkTest = () => {
//   return 2
// }

const queries = (query, parameter) => {
  switch(query) {
    case 'allItems':
      console.log("All the items")
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
const nodeQuery = process.argv[2]
const nodeParameter = process.argv[3]
queries(nodeQuery, nodeParameter)

module.exports = {
  // checkTest,
  db
}

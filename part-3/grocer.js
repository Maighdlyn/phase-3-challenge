(function () {
  const addToCartButtons = document.querySelectorAll('.add-to-cart')
  let cartCounter = 0
  let priceTotal = 0

  const addToCart = () => {
    const parentDiv = event.target.parentNode.innerText
    const itemArray = parentDiv.split('\n').slice(0,2)

    priceTotal += Number(itemArray[1].slice(1))
    cartModal(itemArray)

    cartCounter++
    document.querySelector('#cart-button').innerHTML = "Cart (" + cartCounter + ")"
  }

  cartModal = (itemArray) => {
    document.querySelector('.items-list').appendChild(document.createElement('div')).className = "cart-row flex flex-row-around"
    const cartRows = document.querySelectorAll('.cart-row')
    const lastRow = cartRows[cartRows.length-1]
    lastRow.appendChild(document.createElement('p')).innerText = itemArray[0]
    lastRow.appendChild(document.createElement('p')).innerText = itemArray[1]

    document.querySelector('.cart-total').innerText = '$' + priceTotal.toFixed(2)
  }

  showCart = () => {
    document.querySelector('.grey-out').classList.remove('invisible')
  }

  hideCart = () => {
    document.querySelector('.grey-out').classList.add('invisible')
  }

  clearCart = () => {
    const itemsList = document.querySelector('.items-list')
    while (itemsList.firstChild) {
      itemsList.removeChild(itemsList.firstChild)
    }
    document.querySelector('.cart-total').innerText = 'Total: $0'
    document.querySelector('#cart-button').innerHTML = "Cart (0)"
    cartCounter = 0
    priceTotal = 0
}

  // All event Listeners:

  for(i=0; i<addToCartButtons.length; i++){
  addToCartButtons[i].addEventListener('click', addToCart)
  }
  document.querySelector('#cart-button').addEventListener('click', showCart)
  document.querySelector('.close-cart').addEventListener('click', hideCart)
  document.querySelector('.clear-cart').addEventListener('click', clearCart)
})()

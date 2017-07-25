(function () {
  const addToCartButtons = document.querySelectorAll('.add-to-cart')
  let cartCounter = 0
  let priceTotal = 0

  const addToCart = () => {
    const parentDiv = event.target.parentNode.innerText
    const itemArray = parentDiv.split('\n').slice(0,2)

    cartCounter++
    document.querySelector('#cart-button').innerHTML = "Cart (" + cartCounter + ")"

    priceTotal += Number(itemArray[1].slice(1))
    console.log('total:', priceTotal)

    cartModal(itemArray)
  }

  cartModal = (itemArray) => {
    // this is where DOM nodes are gonna be made for the items list
    console.log(itemArray)
  }

  showCart = () => {
    document.querySelector('.grey-out').classList.remove('invisible')
  }

  hideCart = () => {
    document.querySelector('.grey-out').classList.add('invisible')
  }

  // All event Listeners:

  for(i=0; i<addToCartButtons.length; i++){
  addToCartButtons[i].addEventListener('click', addToCart)
  }
  document.querySelector('#cart-button').addEventListener('click', showCart)
  document.querySelector('.close-cart').addEventListener('click', hideCart)

})()

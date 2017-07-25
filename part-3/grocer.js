(function () {
  const addToCartButtons = document.querySelectorAll('.add-to-cart')
  let cartCounter = 0

  const addToCart = () => {
    cartCounter++
    document.querySelector('#cart-button').innerHTML = "Cart (" + cartCounter + ")"
  }

  for(i=0; i<addToCartButtons.length; i++){
  addToCartButtons[i].addEventListener('click', addToCart)
}

})()

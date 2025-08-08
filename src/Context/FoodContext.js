import React from 'react'

const FoodContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
})

export default FoodContext

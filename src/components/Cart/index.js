import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'

import FoodContext from '../../Context/FoodContext'
import CartEmpty from '../CartEmpty'
import CartList from '../CartList'

import './index.css'

class Cart extends Component {
  render() {
    return (
      <FoodContext.Consumer>
        {value => {
          const {cartList} = value
          const isCartEmpty = cartList.length === 0

          return (
            <>
              <Header activeTabId="Cart" />
              <div className="cart-container">
                {isCartEmpty ? <CartEmpty /> : <CartList />}
              </div>
              <Footer />
            </>
          )
        }}
      </FoodContext.Consumer>
    )
  }
}

export default Cart

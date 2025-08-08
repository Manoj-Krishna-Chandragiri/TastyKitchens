import './index.css'

const Counter = props => {
  const {foodId, quantity, increaseQuantity, decreaseQuantity} = props

  const onDecrement = () => {
    decreaseQuantity(foodId)
  }

  const onIncrement = () => {
    increaseQuantity(foodId)
  }

  return (
    <div className="cart-quantity-container">
      <button
        type="button"
        className="quantity-button"
        data-testid="decrement-quantity"
        onClick={onDecrement}
      >
        -
      </button>
      <p className="food-quantity" data-testid="item-quantity">
        {quantity}
      </p>
      <button
        type="button"
        className="quantityy-button"
        data-testid="increment-quantity"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  )
}

export default Counter

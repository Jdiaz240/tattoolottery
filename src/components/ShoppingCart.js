

function ShoppingCart(props) {
  // let cartCount = props.cartCount
    return (
    <div className='cart'>
      <h3 style={{ border: '1px solid black' }}>Shopping Cart: {props.cartCount} </h3>
    </div>
  )
}

export default ShoppingCart 
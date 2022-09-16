import Checkout from './Checkout'


function ShoppingCart(props) {
  //gets the numbers array from local storage
  //let cartCount = sessionStorage.getItem('chosenNum')
  //parses the numbers array string back into array format
  // let session = JSON.parse(cartCount)
  
  return (
    <div className='cart'>
      <h3 style={{ border: '1px solid black' }}>Shopping Cart: {props.count} </h3>
      <Checkout numbers={props.numbers}/>
    </div>
  )
}

export default ShoppingCart 
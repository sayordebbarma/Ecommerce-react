import React, { useContext } from 'react'
import { Products } from '../../Products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './CartItem';
import './Cart.css';


export const Cart = () => {
  const { cartItems, getCartTotal } = useContext(ShopContext);
  const totalAmount = getCartTotal();

  return (
    <div className="cart">
      <div>
        <h1>your cart</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0 ) {
            return <CartItem data={product}/>
          }
        })}
      </div>
      <div className="checkout">
        <p>Total cost: ₹ { totalAmount }</p>
        <button>Countinue shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

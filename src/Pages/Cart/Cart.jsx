import React, { useContext } from 'react'
import { Products } from '../../Products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';
import './Cart.css';


export const Cart = () => {
  const { cartItems, getCartTotal } = useContext(ShopContext);
  const totalAmount = getCartTotal();

  const navigate = useNavigate()
  return (
    <div className="cart">
      <div>
        <h1>YOUR CART</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0 ) {
            return <CartItem data={product}/>
          }
        })}
      </div>

      {totalAmount > 0 ? (
      <div className="checkout">
        <p>Total cost: ₹ { totalAmount }</p>
        <button onClick={() => navigate('/')}>Countinue shopping</button>
        <button>Checkout</button>
      </div> ): (
        <h2>Your cart is empty</h2>
      )}
    </div>

  )
}

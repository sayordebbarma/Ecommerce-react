import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const {id, name, price, image} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

  return (
    <div className="product">
        <img src={image} alt="" />

        <div className="details">
            <h3>{ name }</h3>
            <p> ₹ { price }</p>
        </div>

        <div className="addToCart" onClick={() => addToCart(id)}>
          Buy Now {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </div>
    </div>
  )
}

import React from 'react'

export const CartItem = (props) => {
    const {id, name, price, image} = props.data;

  return (
    <div className='cartItem'>
        <img src={image} alt="productImg" />

        <div className="details">
            <p>
                <b>{name}</b>
            </p>
            <p>₹ { price }</p>
        </div>
    </div>
  )
}

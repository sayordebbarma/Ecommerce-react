import React from 'react'

export const Product = (props) => {
    const {id, name, price, image} = props.data;
  return (
    <div className="product">
        <img src={image} alt="" />

        <div className="details">
            <h3>{ name }</h3>
            <p> ₹ { price }</p>
        </div>

        <div className="addToCart">Buy Now</div>
    </div>
  )
}

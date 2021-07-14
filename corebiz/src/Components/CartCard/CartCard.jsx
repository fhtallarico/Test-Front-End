import React, { useState } from 'react';
import './CartCard.css';

const CartCard = (props) => {
    const { product } = props
    return (
        <div class="cart-card">
            <img class="cart-card-img" src={product.imageUrl} alt="..."/>
            <h5 class="cart-card-title">{product.productName}</h5>
            <p class="cart-card-price">{product.qty} unidades x ${product.price * product.qty}</p>
        </div>
    )
}

export default CartCard;
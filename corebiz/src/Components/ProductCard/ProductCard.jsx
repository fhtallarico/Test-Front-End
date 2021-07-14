import React from "react";
import StarRatings from "react-star-ratings";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div class="product-card">
      <div class="img-container">
        <img src={props.imageUrl} alt="..." />
      </div>
      <div class="product-details">
        <p class="product-name">{props.productName}</p>
        <StarRatings
          class="star-ratings"
          rating={props.stars}
          starRatedColor="red"
          starDimension="10.35px"
          numberOfStars={5}
        />
        {props.listPrice ? (
          <div>
            <p class="before-price">de $ {props.listPrice}</p>
            <p class="current-price">por $ {props.price}</p>
          </div>
        ) : (
          <div>
            <p class="before-price">de $ {props.price}</p>
            console.log(props.price)
            <p class="current-price">por $ {props.price}</p>
          </div>
        )}
        {props.installments?.length ? (
          <p class="prod-installments">
            o en {props.installments[0].quantity} de ${" "}
            {props.installments[0].value}
          </p>
        ) : (
          <></>
        )}
        <button
          class="comprar-btn"
          onClick={() => {
            let product = {
              id: props.productId,
              name: props.productName,
              imageUrl: props.imageUrl,
              quantity: 1,
              price: props.price,
            };
            if (localStorage.getItem(product.id)) {
              let savedProduct = JSON.parse(localStorage.getItem(product.id))
              savedProduct.quantity += 1;
              localStorage.setItem(product.id, JSON.stringify(savedProduct));
              console.log(savedProduct)
            } else {
              localStorage.setItem(product.id, JSON.stringify(product));
            }
          }}
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

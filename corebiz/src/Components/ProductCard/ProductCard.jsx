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
        {
            props.listPrice ? (
                <div>
                    <p class="before-price">de $ {props.listPrice}</p>
                    <p class="current-price">por $ {props.price}</p>
                </div>

            ) : (
                <p class="current-price">por $ {props.price}</p>
            )
        }
        {
            props.installments?.length ? (
                <p class="prod-installments">o en {props.installments[0].quantity} de $ {props.installments[0].value}</p>
            ) : (
                <p></p>
            )
        }
        <button class="comprar-btn" onClick={()=> {
            props.addToCart("id Producto", props.ProductId)
        }}>COMPRAR</button>
      </div>
    </div>
  );
};

export default ProductCard;

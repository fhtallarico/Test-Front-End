import React from "react";
import StarRatings from "react-star-ratings";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { product, addToCart } = props;

  return (
    <div class="product-card">
      <div class="img-container">
        <img src={product.imageUrl} alt="..." />
      </div>
      <div class="product-details">
        <div class="product-texts">
          <p class="product-name">{product.productName}</p>
          <StarRatings
            class="star-ratings"
            rating={product.stars}
            starRatedColor="red"
            starDimension="10.35px"
            numberOfStars={5}
          />
          {product.listPrice ? (
            <div>
              <p class="before-price">de $ {product.listPrice}</p>
              <p class="current-price">por $ {product.price}</p>
            </div>
          ) : (
            <div>
              <p class="before-price">de $ {product.price}</p>
              <p class="current-price">por $ {product.price}</p>
            </div>
          )}
          {product.installments?.length ? (
            <p class="prod-installments">
              o en {product.installments[0].quantity} de ${" "}
              {product.installments[0].value}
            </p>
          ) : (
            <></>
          )}
        </div>

        <button
          class="comprar-btn"
          onClick={() => {
            addToCart(product);
          }}
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

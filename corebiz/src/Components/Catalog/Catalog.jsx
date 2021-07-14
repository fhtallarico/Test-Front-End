import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./Catalog.css";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [cartItems, setCartItems] = useState([]);

  const indexOfLastProd = currentPage * postsPerPage;
  const indexOfFirstProd = indexOfLastProd - postsPerPage;
  const currentProds = products.slice(indexOfFirstProd, indexOfLastProd);

  const addToCart = (product) => {

    const exist = cartItems.find((x) => x.productId === product.productId);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.productId === product.productId ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    if (localStorage.getItem("cart")) {
      localStorage.clear()
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    axios
      .get("https://corebiz-test.herokuapp.com/api/v1/products/")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  }, []);

  return (
    <div>
      <div class="catalog">
        <h2 class="cat-text">Mas vendidos</h2>
        <div class="cat-wrapper">
          <div>
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={() => {
                prevPage();
              }}
            />
          </div>

          <div class="prods-list">
            {currentProds?.length ? (
              currentProds.map((product) => {
                return <ProductCard product={product} addToCart={addToCart} />;
              })
            ) : (
              <h1>Error al cargar productos</h1>
            )}
          </div>
          <div>
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={() => {
                nextPage();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

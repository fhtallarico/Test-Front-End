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

  const indexOfLastProd = currentPage * postsPerPage;
  const indexOfFirstProd = indexOfLastProd - postsPerPage;
  const currentProds = products.slice(indexOfFirstProd, indexOfLastProd);

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
      .get("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  }, []);

  return (
    <div>
      <div class="catalog">
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
                return (
                  <ProductCard
                    productId={product.productId}
                    productName={product.productName}
                    stars={product.stars}
                    imageUrl={product.imageUrl}
                    listPrice={product.listPrice}
                    price={((product.price / 10) + ".00")}
                    installments={product.installments}
                  />
                );
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

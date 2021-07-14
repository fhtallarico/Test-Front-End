import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar.jsx";
import CartCard from "../CartCard/CartCard.jsx";
import "./NavBar.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50rem",
    height: "50rem",
  },
};
Modal.setAppElement("#root");

const NavBar = () => {
  let subtitle;
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, [modalIsOpen]);

  return (
    <div class="nav-bar">
      <nav class="nav-bar-container">
        <img
          alt="logo"
          src="https://simmonsarg.vteximg.com.br/arquivos/logo_corebiz-new.png?v=637263799472400000"
          class="img-logo"
        />
        <SearchBar />
        <div class="button-container">
          <FontAwesomeIcon icon={faUser} />
          <p>Mi cuenta</p>
          {cart?.length ? (
            <FontAwesomeIcon
              onClick={openModal}
              style={{ color: "red" }}
              icon={faShoppingCart}
            />
          ) : (
            <FontAwesomeIcon onClick={openModal} icon={faShoppingCart} />
          )}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Carrito</h2>
          <div class="cart-prods-container">
            {cart?.length ? (
              cart.map((product) => {
                return <CartCard product={product} />;
              })
            ) : (
              <h3>No hay productos en el carrito</h3>
            )}
          </div>
        </Modal>
      </nav>
    </div>
  );
};

export default NavBar;

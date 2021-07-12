import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav class="nav-bar">
        <img
          alt="logo"
          src="https://simmonsarg.vteximg.com.br/arquivos/logo_corebiz-new.png?v=637263799472400000"
          class="img-logo"
        />
        <div class="button-container">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar/SearchBar.jsx"
import "./NavBar.css";

const NavBar = () => {
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
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

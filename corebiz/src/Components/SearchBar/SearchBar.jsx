import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div class="search-bar">
            <input class="search-input" type="text" placeholder="¿Qué estás buscando?"></input>

        </div>
    )
}

export default SearchBar
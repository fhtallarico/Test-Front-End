import React from "react";
import axios from "axios";
import "./NewsForm.css";

const NewsForm = () => {
  const validarEmail = (email) => {
    if (
      /^\w+([.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(
        email
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;

    if (validarEmail(email)) {
      axios
        .post(`https://corebiz-test.herokuapp.com/api/v1/newsletter`, {
          email: email,
          name: name,
        })
        .then((res) => {
          console.log(res);
          document.getElementById("input-name").value = "";
          document.getElementById("input-email").value = "";
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("ERROR");
    }
  };
  return (
    <div class="news-form">
      <h3 class="form-tittle">¡Únete a nuestras novedades y promociones!</h3>
      <form class="form-ingreso">
        <input type="text" id="input-name" placeholder="Ingresa tu nombre" />
        <input type="text" id="input-email" placeholder="Ingresa tu mail" />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Suscribirme
        </button>
      </form>
    </div>
  );
};

export default NewsForm;

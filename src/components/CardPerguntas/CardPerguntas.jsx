import React from "react";
import "./CardPerguntas.css";
import greenElipse from "https://germinnecomp-img.s3.sa-east-1.amazonaws.com/BolinhaVerde.png";
import PropTypes from "prop-types";

function CardPerguntas({ title, text }) {
  return (
    <div className="cardPerguntas">
      <img src={greenElipse} alt="green elipse" />
      <div className="cardPerguntasText">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

CardPerguntas.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardPerguntas;

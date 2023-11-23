import React from "react";
import "./passosTrabalheConosco.css";
import PropTypes from "prop-types";

function PassosTrabalheConosco({ titulo }) {
  return (
    <section className="passosTrabalheConosco">
      <h2>{titulo}</h2>
      <img src={urlImg} alt={altImg} />
    </section>
  );
}

PassosTrabalheConosco.propTypes = {
  urlImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default PassosTrabalheConosco;

import React from 'react';
import PropTypes from 'prop-types';

function CardPublicidade({ srcImg }) {
  return (
    <div>
      <img src={ srcImg } alt="Propaganda" />
      <hr />
      <p>Publicidade</p>
    </div>
  );
}

CardPublicidade.propTypes = {
  srcImg: PropTypes.string.isRequired
};

export default CardPublicidade;
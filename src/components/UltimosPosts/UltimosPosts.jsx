import React from 'react';
import PropTypes from 'prop-types';
import './ultimosPosts.css';

function UltimosPosts({ srcImg, altImg, title, category }) {
  return (
    <div className="card-ultimos-posts">
      <img src={srcImg} alt={altImg} />
      <div>
        <h6>{title}</h6>
        <p className="ultimos-posts-category">{category}</p>
      </div>
    </div>
  );
}

UltimosPosts.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default UltimosPosts;

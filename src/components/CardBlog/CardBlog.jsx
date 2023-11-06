import React from 'react';
import PropTypes from 'prop-types';

function CardBlog({ srcImg, altImg, title, resume, category }) {
  return (
    <article>
      <div>
        <img src={ srcImg } alt={ altImg } />
      </div>

      <div>
        <h3>{ title }</h3>
        <p>{ resume }</p>
        <p>{ category }</p>
      </div>
    </article>
  );
}

CardBlog.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CardBlog;
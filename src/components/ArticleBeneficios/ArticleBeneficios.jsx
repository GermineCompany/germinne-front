import React from 'react';
import PropTypes from 'prop-types';
import './articleBeneficios.css';

function ArticleBeneficios({ urlImg, altImg, title, text }) {
  return (
    <article className='article-beneficios'>
      <div>
        <img src={ urlImg } alt={ altImg } />
      </div>

      <div>
        <h4>{ title }</h4>
        <p>{ text }</p>
      </div>
    </article>
  );
}

ArticleBeneficios.propTypes = {
  urlImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ArticleBeneficios;
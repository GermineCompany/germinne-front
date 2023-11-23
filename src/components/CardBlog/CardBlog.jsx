import React from 'react';
import PropTypes from 'prop-types';
import './cardBlog.css';
import { useNavigate } from 'react-router-dom';

function CardBlog({ srcImg, altImg, title, resume, category, idArticle }) {
  const navigate = useNavigate();

  const handleDirect = () => navigate(`/artigo/${idArticle}`);

  return (
    <article className='card-blog'>
      <div>
        <img src={ srcImg } alt={ altImg } onClick={ handleDirect } />
      </div>

      <div>
        <h3 onClick={ handleDirect }>{ title }</h3>
        <p>{ resume }</p>
        <div className='categoria-ler-mais'>
          <a href={ `/artigo/${idArticle}` }>Ler mais...</a>
          <p className='category'>{ category }</p>
        </div>
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
  idArticle: PropTypes.string,
};

export default CardBlog;
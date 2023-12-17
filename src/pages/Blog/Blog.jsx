import React, { useState } from 'react';
import busca from '../../images/busca.png';
import publicidade from '../../images/card-publicidade-germinne.png';
import CardBlog from '../../components/CardBlog/CardBlog';
import CardPublicidade from '../../components/CardPublicidade/CardPublicidade';
import './blog.css';
import CarouselBlog from '../../components/CarouselBlog/CarouselBlog';
import artigos from '../../data/artigos';

function Blog() {
  const [buscar, setBuscar] = useState('');

  const handleChange = (event) => setBuscar(event.target.value);

  return (
    <div className="main-container-limitador">
      <div className="pagina-blog">
        <article className="carousel-blog">
          <CarouselBlog />
        </article>

        <hr />

        <div className="filtros">
          <p>Todos</p>
          <p>Agricultura urbana</p>
          <p>Cultivo</p>
          <p>Notícias</p>
        </div>

        <div className="busca">
          <div>
            <div className="icone-lupa">
              <img src={busca} alt="Icone de uma lupa" />
            </div>
            <input
              onChange={handleChange}
              type="text"
              name="busca"
              id="busca"
              placeholder="Pesquise no blog"
              value={buscar}
            />
          </div>
        </div>

        <div className="box-artigos">
          {artigos.map(
            ({ artigoId, titulo, descricao, imagemCard, categoria }) => {
              return (
                <CardBlog
                  key={artigoId}
                  srcImg={imagemCard}
                  altImg="Foto do telhado verde"
                  title={titulo}
                  resume={descricao}
                  category={categoria}
                  idArticle={artigoId}
                />
              );
            }
          )}
        </div>


      </div>
    </div>
  );
}

export default Blog;

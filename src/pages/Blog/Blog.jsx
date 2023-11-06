import React, { useState } from 'react';
import banner from '../../images/banner-blog.svg';
import busca from '../../images/busca.png';
import artigo from '../../images/artigo-exemplo.png';
import publicidade from '../../images/publi.png';
import CardBlog from '../../components/CardBlog/CardBlog';
import CardPublicidade from '../../components/CardPublicidade/CardPublicidade';
import './blog.css';


function Blog() {
  const [buscar, setBuscar] = useState('');

  const handleChange = (event) => setBuscar(event.target.value);

  return (
    <div>
      <article className='banner-blog'>
        <div>
          <img src={banner} alt="Banner de uma planta germinando" />
        </div>

        <div>
          <h2>Blog Germinar Conhecimento</h2>
          <p>Está procurando informações sobre hortas? Temos que tudo você precisa aqui</p>
        </div>
      </article>

      <div className='filtros'>
        <p>Cultivo</p>
        <p>Plantas</p>
        <p>Vasos</p>
        <p>Curiosidades</p>
      </div>

      <div className='busca'>
        <p>Mais recentes:</p>

        <div>
          <input
            onChange={handleChange}
            type="text"
            name="busca"
            id="busca"
            placeholder='Pesquise no blog'
            value={buscar}
          />
          <div className='icone-lupa'>
            <img src={busca} alt="Icone de uma lupa" />
          </div>
        </div>
      </div>

      <div className='box-artigos'>
        <div>
          <CardBlog
            srcImg={artigo}
            altImg="Foto do telhado verde"
            title="O Telhado Verde do Shopping Eldorado: Um Refúgio Natural"
            resume="Este artigo revela como o Shopping Eldorado se transforma em um refúgio verde e relaxante no meio da cidade, proporcionando uma experiência única para quem busca tranquilidade em São Paulo."
            category="Cultivo"
          />

          <CardBlog
            srcImg={artigo}
            altImg="Foto do telhado verde"
            title="O Telhado Verde do Shopping Eldorado: Um Refúgio Natural"
            resume="Este artigo revela como o Shopping Eldorado se transforma em um refúgio verde e relaxante no meio da cidade, proporcionando uma experiência única para quem busca tranquilidade em São Paulo."
            category="Cultivo"
          />

          <CardBlog
            srcImg={artigo}
            altImg="Foto do telhado verde"
            title="O Telhado Verde do Shopping Eldorado: Um Refúgio Natural"
            resume="Este artigo revela como o Shopping Eldorado se transforma em um refúgio verde e relaxante no meio da cidade, proporcionando uma experiência única para quem busca tranquilidade em São Paulo."
            category="Cultivo"
          />
        </div>

        <div>
          <CardPublicidade srcImg={publicidade} />
          <CardPublicidade srcImg={publicidade} />
        </div>
      </div>

    </div>
  );
}

export default Blog;
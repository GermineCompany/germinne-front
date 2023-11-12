import React, { useState } from 'react';
import busca from '../../images/busca.png';
import artigo from '../../images/artigo-exemplo.png';
import publicidade from '../../images/publi.png';
import CardBlog from '../../components/CardBlog/CardBlog';
import CardPublicidade from '../../components/CardPublicidade/CardPublicidade';
import './blog.css';
import CarouselBlog from '../../components/CarouselBlog/CarouselBlog';


function Blog() {
  const [buscar, setBuscar] = useState('');

  const handleChange = (event) => setBuscar(event.target.value);

  return (
    <div className='pagina-blog'>
      <article className='carousel-blog'>
        <CarouselBlog />
      </article>

      <hr />

      <div className='filtros'>
        <p>Todos</p>
        <p>Agricultura urbana</p>
        <p>Cultivo</p>
        <p>Curiosidades</p>
      </div>

      <div className='busca'>
        <div>
          <div className='icone-lupa'>
            <img src={busca} alt="Icone de uma lupa" />
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="busca"
            id="busca"
            placeholder='Pesquise no blog'
            value={buscar}
          />
        </div>
      </div>

      <div className='box-artigos'>
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

      <hr />

      <div className='publicidade'>
        <CardPublicidade srcImg={ publicidade }/>
        <CardPublicidade srcImg={ publicidade }/>
      </div>

    </div>
  );
}

export default Blog;
import React from 'react';
import { useParams } from 'react-router-dom';
import artigos from '../../data/artigos';
import { useState } from 'react';
import { useEffect } from 'react';
import ultimoPostImg from '../../images/ultimos-posts.png';
import CardPublicidadeBox from '../../components/CardPublicidadeBox/CardPublicidadeBox';
import UltimosPosts from '../../components/UltimosPosts/UltimosPosts';
import publicidade from '../../images/card-publicidade-germinne.png';
import './artigo.css';

function Artigo() {
  const [artigo, setArtigo] = useState([]);
  const { id } = useParams();

  const getArtigo = () => {
    const artigoFiltered = artigos.filter(({ artigoId }) => artigoId == id);

    console.log(artigoFiltered);
    console.log(artigoFiltered[0].paragrafos.length);

    !artigo.length && setArtigo(artigoFiltered);
  };

  useEffect(() => {
    getArtigo();
  }, []);

  return (
    <div className="main-container-limitador">
      <section className="pagina-artigo">
        <div>
          <span className="categoria-artigo">Agricultura Urbana</span>
          <h2>{artigo.length && artigo[0].titulo}</h2>

          <div className="artigo-creditos">
            <p>11 de setembro de 2023</p>
            <p>Fonte: artigo retirado da BeGreen</p>
          </div>
        </div>

        <div className="box-artigo-aside">


          {/* artigo-telhado-verde */}

          {/* 

          <article className="artigo-blog">
            <figure>
              <img
                src={artigo.length && artigo[0].imagens[0]}
                alt="Imagem de um saco de terra junto com uma pá"
              />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <p>{artigo.length && artigo[0].paragrafos[0]}</p>

            <p>{artigo.length && artigo[0].paragrafos[1]}</p>

            <p>{artigo.length && artigo[0].paragrafos[2]}</p>

            <p>{artigo.length && artigo[0].paragrafos[3]}</p>

            <figure>
              <img
                src={artigo.length && artigo[0].imagens[1]}
                alt="Imagem de duas mãos plantando uma arvore"
              />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <p>{artigo.length && artigo[0].paragrafos[4]}</p>

            <p>{artigo.length && artigo[0].paragrafos[5]}</p>
          </article> */}

          {/* artigo-telhado-verde */}

          
          



          <aside>
            <CardPublicidadeBox srcImg={publicidade} />

            <div className="box-ultimos-posts">
              <h4>Últimos posts</h4>

              <UltimosPosts
                srcImg={ultimoPostImg}
                altImg="Imagem de três vasos"
                title="Confira como cultivar de maneira efetiva:"
                category="Cultivo"
              />
              <UltimosPosts
                srcImg={ultimoPostImg}
                altImg="Imagem de três vasos"
                title="Confira como cultivar de maneira efetiva:"
                category="Cultivo"
              />
              <UltimosPosts
                srcImg={ultimoPostImg}
                altImg="Imagem de três vasos"
                title="Confira como cultivar de maneira efetiva:"
                category="Cultivo"
              />
              <UltimosPosts
                srcImg={ultimoPostImg}
                altImg="Imagem de três vasos"
                title="Confira como cultivar de maneira efetiva:"
                category="Cultivo"
              />
              <UltimosPosts
                srcImg={ultimoPostImg}
                altImg="Imagem de três vasos"
                title="Confira como cultivar de maneira efetiva:"
                category="Cultivo"
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Artigo;

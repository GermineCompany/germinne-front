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
  const [artigo, setArtigo] = useState({});
  const { id } = useParams();

  const getArtigo = () => {
    const artigoFiltered = artigos.filter(({ artigoId }) => artigoId == id);
    setArtigo(artigoFiltered[0]);
  };

  useEffect(() => {
    getArtigo();
  }, []);

  return (
    <div className="main-container-limitador">
      <section className="pagina-artigo">
        <div>
          <span className="categoria-artigo">{ artigo.categoria }</span>
          <h2>{ artigo.titulo }</h2>

          <div className="artigo-creditos">
            <p>{ artigo.data }</p>
            <p>{ artigo.fonte }</p>
          </div>
        </div>
 
        <div className="box-artigo-aside">
          <div dangerouslySetInnerHTML={{ __html: artigo.conteudo }} />
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

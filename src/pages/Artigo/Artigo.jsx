import React from "react";
import { useParams } from "react-router-dom";
import artigos from "../../data/artigos";
import { useState } from "react";
import { useEffect } from "react";
import ultimoPostImg from "../../images/ultimos-posts.png";
import CardPublicidadeBox from "../../components/CardPublicidadeBox/CardPublicidadeBox";
import UltimosPosts from "../../components/UltimosPosts/UltimosPosts";
import "./artigo.css";

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
    <section className="pagina-artigo">
      <div>
        <h2>{artigo.length && artigo[0].titulo}</h2>

        <div className="artigo-creditos">
          <p>11 de setembro de 2023</p>
          <p>Fonte: artigo retirado da BeGreen</p>
        </div>
      </div>

      <div className="box-artigo-aside">
        <article className="artigo-blog">
          <img
            src={artigo.length && artigo[0].imagens[0]}
            alt="Imagem de um saco de terra junto com uma pá"
          />

          <p>{artigo.length && artigo[0].paragrafos[0]}</p>

          <p>{artigo.length && artigo[0].paragrafos[1]}</p>

          <p>{artigo.length && artigo[0].paragrafos[2]}</p>

          <p>{artigo.length && artigo[0].paragrafos[3]}</p>

          <img
            src={artigo.length && artigo[0].imagens[1]}
            alt="Imagem de duas mãos plantando uma arvore"
          />

          <p>{artigo.length && artigo[0].paragrafos[4]}</p>

          <p>{artigo.length && artigo[0].paragrafos[5]}</p>
        </article>

        <aside>
          <CardPublicidadeBox />

          <div className="box-ultimos-posts">
            <h4>Últimos posts</h4>

            <UltimosPosts
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/ultimos-posts.png"
              altImg="Imagem de três vasos"
              title="Plantar de forma segura!"
              category="Cultivo"
            />
            <UltimosPosts
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/ultimos-posts.png"
              altImg="Imagem de três vasos"
              title="Plantar de forma segura!"
              category="Cultivo"
            />
            <UltimosPosts
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/ultimos-posts.png"
              altImg="Imagem de três vasos"
              title="Plantar de forma segura!"
              category="Cultivo"
            />
            <UltimosPosts
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/ultimos-posts.png"
              altImg="Imagem de três vasos"
              title="Plantar de forma segura!"
              category="Cultivo"
            />
            <UltimosPosts
              srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/ultimos-posts.png"
              altImg="Imagem de três vasos"
              title="Plantar de forma segura!"
              category="Cultivo"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Artigo;

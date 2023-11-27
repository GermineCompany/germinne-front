import React from "react";
import ImagemPequenaGB from "../ImagemPequenaGB/ImagemPequenaGB";
import imgsecundaria1 from "../../images/gb-imagem-secundaria1.png";
import imgsecundaria2 from "../../images/gb-imagem-secundaria2.png";
import imgsecundaria4 from "../../images/gb-imagem-secundaria4.png";
import imgprincipal from "../../images/gb-imagem-principal.png";
import "./descricaoProduto.css";
import BotaoSelecaoGB from "../BotaoSelecaoGB/BotaoSelecaoGB";

function DescricaoProduto() {
  return (
    <div className="box-descricao-produto">
      <div className="descricao-imagens">
        <div className="box-imagens-secundarias">
          <ImagemPequenaGB
            srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/gb-imagem-secundaria1.png"
            altImg="Imagem ilustrativa da Germinne Box"
          />
          <ImagemPequenaGB
            srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/gb-imagem-secundaria2.png"
            altImg="Imagem ilustrativa da Germinne Box"
          />
          <ImagemPequenaGB
            srcImg="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/gb-imagem-secundaria4.png"
            altImg="Imagem ilustrativa da Germinne Box"
          />
        </div>

        <div className="box-imagem-descricao">
          <img
            src="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/gb-imagem-principal.png"
            alt="Imagem ilustrativa da Germinne Box"
          />
          <p>
            Adquira nossa Germinne Box, nosso kit contem todo o nescessario para
            proporcionar a você a facilidade de ter o seu próprio jardim verde,
            saudável e vibrante com alimentos frescos e orgânicos.
          </p>
        </div>
      </div>

      <div className="box-selecao">
        <div className="nome-preco">
          <h2>Kit Horta Urbana GerminneBox</h2>
          <p>
            <span>R$</span> 44,90
          </p>
        </div>

        <div className="div-botoes">
          <p>
            Selecione o tipo de produto: <span>Germinne Box</span>
          </p>
          <div className="box-botoes-selecao">
            <BotaoSelecaoGB
              className="botao-selecionado"
              contentButton="Germinne Box"
            />
            <BotaoSelecaoGB contentButton="Kit Plantio" />
          </div>
        </div>

        <div className="div-botoes">
          <p>
            Semente: <span>Salsa</span>
          </p>
          <div className="box-botoes-selecao">
            <BotaoSelecaoGB contentButton="Coentro" />
            <BotaoSelecaoGB
              className="botao-selecionado"
              contentButton="Manjericão"
            />
            <BotaoSelecaoGB contentButton="Salsa" />
          </div>
          <div className="box-botoes-selecao">
            <BotaoSelecaoGB
              className="botao-selecionado"
              contentButton="Hortelã"
            />
            <BotaoSelecaoGB contentButton="Tomate Cereja" />
            <BotaoSelecaoGB
              className="botao-selecionado"
              contentButton="Alecrim"
            />
          </div>
        </div>

        <div className="div-botoes box-quantidade">
          <p>Quantidade</p>

          <button>
            <span onClick={() => console.log("MENOS")}>-</span> 1{" "}
            <span onClick={() => console.log("MAIS")}>+</span>
          </button>
        </div>

        <div className="div-botoes botao-adicionar-carrinho">
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default DescricaoProduto;

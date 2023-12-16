import React, { useContext, useState } from 'react';
import ImagemPequenaGB from '../ImagemPequenaGB/ImagemPequenaGB';
import './descricaoProduto.css';
import BotaoSelecaoGB from '../BotaoSelecaoGB/BotaoSelecaoGB';
import GerminneContext from '../../context/GerminneContext';
import { useNavigate } from 'react-router';

function DescricaoProduto() {
  const navigate = useNavigate();
  const germinneBox = {
    titulo: 'Kit Horta Urbana GerminneBox',
    descricao: 'Adquira nossa Germinne Box, nosso kit contem todo o nescessario para proporcionar a você a facilidade de ter o seu próprio jardim verde, saudável e vibrante com alimentos frescos e orgânicos.',
    preco: 134.99,
    imagem: ['https://germinnecomp-img.s3.sa-east-1.amazonaws.com/germinne-box-1.png', 'https://germinnecomp-img.s3.sa-east-1.amazonaws.com/germinne-box-2.png', 'https://germinnecomp-img.s3.sa-east-1.amazonaws.com/germinne-box-3.png']
  }
  const kitPlantio = {
    titulo: 'Kit Plantio para GerminneBox',
    descricao: 'adquira seu kit plantio',
    preco: 22.99,
    imagem: ['https://germinnecomp-img.s3.sa-east-1.amazonaws.com/publi.png', 'https://germinnecomp-img.s3.sa-east-1.amazonaws.com/publi.png', 'https://germinnecomp-img.s3.sa-east-1.amazonaws.com/publi.png']
  }
  const { checkout } = useContext(GerminneContext);
  const [infoCarrinho, setInfoCarrinho] = useState({
    sementes: [],
    quantidade: 1,
    produto: 'GerminneBox',
    preco: 0,
    imagem: '',
  });


  const [imagemDestaque, setImagemDestaque] = useState(germinneBox.imagem[0]);

  const changeQuantidade = ({ target: { id } }) => {
    if (id == '+') {
      setInfoCarrinho({ ...infoCarrinho, quantidade: infoCarrinho.quantidade + 1 });
    } else {
      if (infoCarrinho.quantidade == 0) return;
      setInfoCarrinho({ ...infoCarrinho, quantidade: infoCarrinho.quantidade - 1 });
    }
  };

  const toggleSeed = (seed) => {
    const updatedSeeds = infoCarrinho.sementes.includes(seed)
      ? infoCarrinho.sementes.filter((s) => s !== seed)
      : [...infoCarrinho.sementes, seed];
    setInfoCarrinho({ ...infoCarrinho, sementes: updatedSeeds });
  };

  const handleRedirectCheckout = () => {
    checkout.setCheckoutInfo(infoCarrinho);
    navigate('/checkout');
  };

  const handleChangeDestaque = (src) => setImagemDestaque(src);

  return (
    <div className="box-descricao-produto">

      <div className="descricao-imagens">
        <div className="box-imagens-secundarias">
          <ImagemPequenaGB
            srcImg={infoCarrinho.produto === 'GerminneBox' ? germinneBox.imagem[0] : kitPlantio.imagem[0]}
            altImg="Imagem ilustrativa da Germinne Box"
            funcClick={() => handleChangeDestaque(infoCarrinho.produto === 'GerminneBox' ? germinneBox.imagem[0] : kitPlantio.imagem[0])}
          />
          <ImagemPequenaGB
            srcImg={infoCarrinho.produto === 'GerminneBox' ? germinneBox.imagem[1] : kitPlantio.imagem[1]}
            altImg="Imagem ilustrativa da Germinne Box"
            funcClick={() => handleChangeDestaque(infoCarrinho.produto === 'GerminneBox' ? germinneBox.imagem[1] : kitPlantio.imagem[1])}
          />
          <ImagemPequenaGB
            srcImg={infoCarrinho.produto === 'GerminneBox' ? germinneBox.imagem[2] : kitPlantio.imagem[2]}
            altImg="Imagem ilustrativa da Germinne Box"
            funcClick={() => handleChangeDestaque(infoCarrinho.produto === 'GerminneBox' ? germinneBox.imagem[2] : kitPlantio.imagem[2])}
          />
        </div>

        <div className="box-imagem-descricao">
          <img src={imagemDestaque} alt="Imagem ilustrativa da Germinne Box" />
          <p>
           {infoCarrinho.produto === 'GerminneBox' ? germinneBox.descricao : kitPlantio.descricao}
          </p>
        </div>
      </div>

      <div className="box-selecao">
        <div className="nome-preco">
          <h2>{infoCarrinho.produto === 'GerminneBox' ? germinneBox.titulo : kitPlantio.titulo}
          </h2>
          <p>
            <span>R$</span> {infoCarrinho.produto === 'GerminneBox' ? germinneBox.preco : kitPlantio.preco}
          </p>
        </div>

        <div className="div-botoes">
          <p>
            Selecione o tipo de produto: <span>{infoCarrinho.produto}</span>
          </p>
          <div className="box-botoes-selecao">
            <BotaoSelecaoGB
              className={infoCarrinho.produto === 'GerminneBox' ? 'botao-selecionado' : ''}
              changeClass={() => {
                setInfoCarrinho({ ...infoCarrinho, produto: 'GerminneBox', preco: 134.99, imagem: germinneBox.imagem[0]})
                setImagemDestaque(germinneBox.imagem[0])
              }}
              contentButton="GerminneBox"
            />
            <BotaoSelecaoGB
              className={infoCarrinho.produto === 'Kit Plantio' ? 'botao-selecionado' : ''}
              changeClass={() => {
                setInfoCarrinho({ ...infoCarrinho, produto: 'Kit Plantio', preco: 22.99, imagem: kitPlantio.imagem[0] })
                setImagemDestaque(kitPlantio.imagem[0])
              }}
              contentButton="Kit Plantio"
            />
          </div>
        </div>

        <div className="div-botoes">
          <p>
            Selecione as sementes que deseja: <span>{infoCarrinho.sementes.join(', ')}</span>
          </p>
          <div className="box-botoes-selecao">
            <BotaoSelecaoGB
              className={infoCarrinho.sementes.includes('Alecrim') ? 'botao-selecionado' : ''}
              changeClass={() => toggleSeed('Alecrim')}
              contentButton="Alecrim"
            />
            <BotaoSelecaoGB
              className={infoCarrinho.sementes.includes('Coentro') ? 'botao-selecionado' : ''}
              changeClass={() => toggleSeed('Coentro')}
              contentButton="Coentro"
            />
            <BotaoSelecaoGB
              className={infoCarrinho.sementes.includes('Hortelã') ? 'botao-selecionado' : ''}
              changeClass={() => toggleSeed('Hortelã')}
              contentButton="Hortelã"
            />

          </div>
          <div className="box-botoes-selecao">
            <BotaoSelecaoGB
              className={infoCarrinho.sementes.includes('Manjericão') ? 'botao-selecionado' : ''}
              changeClass={() => toggleSeed('Manjericão')}
              contentButton="Manjericão"
            />
            <BotaoSelecaoGB
              className={infoCarrinho.sementes.includes('Salsa') ? 'botao-selecionado' : ''}
              changeClass={() => toggleSeed('Salsa')}
              contentButton="Salsa"
            />
            <BotaoSelecaoGB
              className={infoCarrinho.sementes.includes('Tomate Cereja') ? 'botao-selecionado' : ''}
              changeClass={() => toggleSeed('Tomate Cereja')}
              contentButton="Tomate Cereja"
            />
          </div>
        </div>

        <div className="div-botoes box-quantidade">
          <p>Quantidade:</p>

          <button>
            <span
              id='-'
              onClick={changeQuantidade}
            >
              -
            </span>
            {infoCarrinho.quantidade}{' '}
            <span
              id='+'
              onClick={changeQuantidade}
            >
              +
            </span>
          </button>
        </div>

        <div className="div-botoes botao-adicionar-carrinho">
          <button onClick={handleRedirectCheckout}>Comprar agora</button>
        </div>
      </div>
    </div>
  );
}

export default DescricaoProduto;

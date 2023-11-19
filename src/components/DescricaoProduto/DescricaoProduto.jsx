import React from 'react';
import ImagemPequenaGB from '../ImagemPequenaGB/ImagemPequenaGB';
import imagemPequena from '../../images/miniatura-gb.png';
import imagemGrande from '../../images/gb-grande.png';
import './descricaoProduto.css';
import BotaoSelecaoGB from '../BotaoSelecaoGB/BotaoSelecaoGB';

function DescricaoProduto() {
  return (
    <div className='box-descricao-produto'>
      <div className='descricao-imagens'>
        <div>
          <ImagemPequenaGB 
            srcImg={ imagemPequena }
            altImg='Imagem ilustrativa da Germinne Box'
          />
          <ImagemPequenaGB 
            srcImg={ imagemPequena }
            altImg='Imagem ilustrativa da Germinne Box'
          />
          <ImagemPequenaGB 
            srcImg={ imagemPequena }
            altImg='Imagem ilustrativa da Germinne Box'
          />
          <ImagemPequenaGB 
            srcImg={ imagemPequena }
            altImg='Imagem ilustrativa da Germinne Box'
          />
        </div>

        <div className='box-imagem-descricao'>
          <img src={ imagemGrande } alt="Imagem ilustrativa da Germinne Box" />
          <p>Adquira nossa Germinne Box, nosso kit contem todo o nescessario para proporcionar a você a facilidade de ter o seu próprio jardim verde, saudável e vibrante com alimentos frescos e orgânicos.</p>
        </div>
      </div>

      <div className='box-selecao'>
        <div className='nome-preco'>
          <h2>Kit Horta Urbana GerminneBox</h2>
          <p><span>R$</span> 44,90</p>
        </div>

        <div className='div-botoes'>
          <p>Selecione o tipo de produto: <span>Germinne Box</span></p>
          <div className='box-botoes-selecao'>
            <BotaoSelecaoGB contentButton='Germinne Box'/>
            <BotaoSelecaoGB contentButton='Kit Plantio'/>
          </div>
        </div>

        <div className='div-botoes'>
          <p>Semente: <span>Salsa</span></p>
          <div className='box-botoes-selecao'>
            <BotaoSelecaoGB contentButton='Coentro'/>
            <BotaoSelecaoGB contentButton='Manjericão'/>
            <BotaoSelecaoGB contentButton='Salsa'/>
          </div>
          <div className='box-botoes-selecao'>
            <BotaoSelecaoGB contentButton='Hortelã'/>
            <BotaoSelecaoGB contentButton='Tomate Cereja'/>
            <BotaoSelecaoGB contentButton='Alecrim'/>
          </div>
        </div>

        <div className='div-botoes box-quantidade'>
          <p>Quantidade</p>

          <button><span onClick={() => console.log('MENOS')}>-</span> 2 <span onClick={() => console.log('MAIS')}>+</span></button>
        </div>

        <div className='div-botoes botao-adicionar-carrinho'>
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default DescricaoProduto;
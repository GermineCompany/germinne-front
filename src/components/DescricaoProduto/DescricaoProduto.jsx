import React from 'react';
import ImagemPequenaGB from '../ImagemPequenaGB/ImagemPequenaGB';
import imagemPequena from '../../images/miniatura-gb.png';
import imagemGrande from '../../images/gb-grande.png';
import './descricaoProduto.css';

function DescricaoProduto() {
  return (
    <div>
      <div className='descricao-imagens'>
        <div>
          <ImagemPequenaGB 
            srcImg={ imagemPequena }
          />
          <ImagemPequenaGB 
            srcImg={ imagemPequena }
          />
          <ImagemPequenaGB 
            srcImg={ imagemPequena }
          />
          <ImagemPequenaGB 
            srcImg={ imagemPequena }
          />
        </div>

        <div>
          <img src={ imagemGrande } alt="Imagem ilustrativa da Germinne Box" />
          <p>Adquira nossa Germinne Box, nosso kit contem todo o nescessario para proporcionar a você a facilidade de ter o seu próprio jardim verde, saudável e vibrante com alimentos frescos e orgânicos.</p>
        </div>
      </div>
    </div>
  );
}

export default DescricaoProduto;
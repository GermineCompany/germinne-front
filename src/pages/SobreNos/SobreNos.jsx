import React from 'react';
import CardSobreNos from '../../components/CardSobreNos/CardSobreNos';
import missao from '../../images/missao.svg';
import visao from '../../images/visao.svg';
import valor from '../../images/valor.svg';
import './sobreNos.css';
import { MdOutlineEmail, MdOutlineWhatsapp } from 'react-icons/md';
import FormsSobreNos from '../../components/FormsSobreNos/FormsSobreNos';

function SobreNos() {
  return (
    <div className="main-container-limitador">

      <div className='box-paleta'>
        <h2>Nossa paleta de cores</h2>
        <img src="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/paleta-de-cores.png" alt="Imagem da paleta de cores" />
      </div>

      <div className='box-banner-logo'>
        <img src="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/banner-logo.png" alt="" />
      </div>

      <div className='box-impactos-sociais'>
        <h2>O impacto da <span>Germinne</span>:</h2>
        <div className='box-impactos-sociais-imagens'>
          
          <div className='div-impactos'>
            <img src="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/impacto-comunitario1.png" alt="" />
            <p>Benefícios sua <span>saúde</span> fisica com a ingestão de menos agrotóxicos.</p>
          </div>

          <div className='div-impactos'>
            <img src="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/impacto-comunitario2.png" alt="" />
            <p>Diminuição do stress e prevenção de doenças mentais com a <span>hortoterapia</span>.</p>
          </div>

          <div className='div-impactos'>
            <img src="https://germinnecomp-img.s3.sa-east-1.amazonaws.com/impacto-comunitario3.png" alt="" />
            <p>Alimentos mais saborosos e <span>orgânicos</span> cultivados em casa.</p>
          </div>

     

        </div>
      </div>


    </div>


  );
}

export default SobreNos;

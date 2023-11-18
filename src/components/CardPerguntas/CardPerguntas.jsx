import React from 'react';
import './CardPerguntas.css';
import bolinha from '../../images/BolinhaVerde.png';
import PropTypes from 'prop-types';



function CardPerguntas({title, text}){
  return (
    <div  className='CardPerguntas'>
       
      <div className='ImagemBola'> 
        <img src={bolinha} alt="" />
      </div>
      <p className='Titulo'>{title}  </p>
      <p className ='Texto'>{text}   </p>  <br />
      
    </div>
  );
  
}

CardPerguntas.propTypes={
  title: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired,
};

export default CardPerguntas;
import React, { useEffect } from 'react';
import { useState } from 'react';
import './vitrineHorticultores.css';
import CardHorticultor from '../../components/CardHorticultor/CardHorticultor';
import api from '../../utils/axios';

function VitrineHorticultores() {
  const [CEP, setCEP] = useState('');
  const [horticultores, setHorticultores] = useState([]);
  const handleChange = (event) => setCEP(event.target.value);

  const getHorticultores = async () => {
    try {
      const response = await api.get('/profissional');
      console.log(response.data);
      setHorticultores(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHorticultores();
  }, []);

  return (
    <div className='box-vitrine-horticultores'>
      <div className='box-introducao-vitrine'>
        <h2>Escolha dentre nossos parceiros disponíveis e inicie já um orçamento. </h2>
        <p>É rápido, gratuito e sem sair de casa</p>

        <div className='box-inputs-vitrine'>
          <div>
            <div>
              <select>
                <option value="default" disabled selected>Selecione o tipo de serviço</option>
                <option value="plantio">Plantio</option>
                <option value="cultivo">Cultivo</option>
                <option value="pragas">Controle de pragas</option>
              </select>
            </div>

            <div>
              <input
                type="number"
                name="CEP"
                value={CEP}
                onChange={handleChange}
                placeholder='Digite seu CEP'
              />
            </div>
          </div>

          <div>
            <button>Consultar profissionais</button>
          </div>
        </div>
      </div>

      <article className='box-horticultores main-container-limitador'>
        {
          horticultores.map((horticultor) => 
            (
              <CardHorticultor
                id={horticultor.idProfissional}
                key={horticultor.idProfissional}
                srcImg={horticultor.imagemPerfil}
                name={horticultor.nome}
                description={horticultor.biografia}
                rating='4.8'
              />
            )
          )
        }
      </article>
    </div>
  );
}

export default VitrineHorticultores;
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './formsSobreNos.css';

function FormsSobreNos() {
  const [state, handleSubmit] = useForm("xaygkwra");

  if (state.succeeded) {
    return <p>Obrigado por nos enviar uma mensagem!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className='formulario-duvidas'>
      <div>
        <label htmlFor="nome">
          <input
            id="nome"
            type="text"
            name="nome"
            placeholder='Digite seu nome'
          />
        </label>
        <ValidationError
          prefix="Nome"
          field="nome"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            name="email"
            placeholder='Digite seu email'
          />
        </label>
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="assunto">
          <input
            id="assunto"
            type="text"
            name="assunto"
            placeholder='Qual assunto você quer tratar?'
          />
        </label>
        <ValidationError
          prefix="Assunto"
          field="assunto"
          errors={state.errors}
        />
      </div>

      <div>
        <label htmlFor="mensagem">
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder='Digite sua mensagem...'
          />
        </label>
        <ValidationError
          prefix="Mensagem"
          field="mensagem"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting}>
        Enviar mensagem
      </button>
    </form >
  );
}

export default FormsSobreNos;
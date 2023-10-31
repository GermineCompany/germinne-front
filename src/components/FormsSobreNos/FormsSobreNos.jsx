import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function FormsSobreNos() {
  const [state, handleSubmit] = useForm("xaygkwra");

  if (state.succeeded) {
    return <p>Obrigado por nos enviar uma mensagem!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">
          Nome
          <input
            id="nome"
            type="text"
            name="nome"
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
          Email
          <input
            id="email"
            type="email"
            name="email"
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
          Assunto
          <input
            id="assunto"
            type="text"
            name="assunto"
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
          Digite sua mensagem
          <textarea
            id="mensagem"
            name="mensagem"
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
    </form>
  );
}

export default FormsSobreNos;
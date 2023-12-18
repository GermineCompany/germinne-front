import React, { useContext, useState } from "react";
import "./verificacaoProfissional.css";
import GaleriaProjetos from "../GaleriaProjetos/GaleriaProjetos";
import { PiFilePdfDuotone } from "react-icons/pi";
import api from "../../utils/axios";
import GerminneContext from "../../context/GerminneContext";
import { useNavigate } from "react-router-dom";

function VerificacaoProfissional() {
  const {
    loggedUser: { id, nome },
  } = useContext(GerminneContext);
  const navigate = useNavigate();
  const [infos, setInfos] = useState({
    experiencia: "",
    trabalhos: "",
    rg: "",
    telefone: "",
  });
  const [checked, setChecked] = useState(false);
  const [buttonActived, setButtonActived] = useState(true);
  const [verificacaoCompleta, setVerificacaoCompleta] = useState(false);

  const handleChange = (event) =>
    setInfos({ ...infos, [event.target.id]: event.target.value });

  const setInfoHorticultor = async () => {
    try {
      await api.put(`/profissional/${id}`, { rg: infos.rg });
      setVerificacaoCompleta(true);
      setTimeout(() => (window.location.href = "/perfil"), 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="verificacao-profissional">
      {verificacaoCompleta && (
        <div className="verificacao-completa">
          <h2>
            Parabéns, <span>{nome}</span>!
          </h2>
          <img
            src="https://media.tenor.com/bm8Q6yAlsPsAAAAj/verified.gif"
            alt="Check verde"
          />
          <p>Seu perfil foi verificado com sucesso!</p>
        </div>
      )}

      {!verificacaoCompleta && (
        <div>
          <h2>
            Solicite sua <span>verificação</span>:
          </h2>

          <div className="box-inputs-verificacao-profissional">
            <div>
              <label htmlFor="rg">
                RG
                <input
                  placeholder="Informe seu RG..."
                  onChange={handleChange}
                  value={infos.rg}
                  type="text"
                  name="rg"
                  id="rg"
                />
              </label>

              <label htmlFor="telefone">
                Telefone para avaliação técnica
                <input
                  placeholder="Informe seu telefone..."
                  onChange={handleChange}
                  value={infos.telefone}
                  type="text"
                  name="telefone"
                  id="telefone"
                />
              </label>
            </div>

            <div>
              <label htmlFor="rg">
                Tempo de experiência na área
                <input
                  placeholder="Exemplo: 1 ano"
                  onChange={handleChange}
                  value={infos.experiencia}
                  type="text"
                  name="experiencia"
                  id="experiencia"
                />
              </label>

              <label htmlFor="telefone">
                Número de trabalhos realizados
                <input
                  placeholder="Exemplo: 10 serviços"
                  onChange={handleChange}
                  value={infos.trabalhos}
                  type="text"
                  name="trabalhos"
                  id="trabalhos"
                />
              </label>
            </div>
          </div>

          <div className="checkbox-verificacao-profissional">
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                  setButtonActived(!buttonActived);
                }}
              />
              Aceito os termos éticos e de diretrizes da plataforma
            </label>
          </div>

          <div className="box-certificados-na-area">
            <div>
              <h4>Certificados relevantes na área:</h4>
              <div className="box-certificados">
                <div className="div-galeria-projetos">
                  <div className="galeria-projetos">
                    <PiFilePdfDuotone />
                  </div>
                  <p>Certificado Agricul...</p>
                </div>
                <div className="div-galeria-projetos">
                  <div className="galeria-projetos">
                    <PiFilePdfDuotone />
                  </div>
                  <p>Certificado Agricul...</p>
                </div>
                <GaleriaProjetos />
              </div>
            </div>

            <div>
              <button
                className="button-solicitar-verificacao"
                disabled={buttonActived}
                onClick={setInfoHorticultor}
              >
                Solicitar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerificacaoProfissional;

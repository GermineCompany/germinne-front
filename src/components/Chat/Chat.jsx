import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer
      fluid
      className="py-5 rounded"
      style={{ backgroundColor: "#0fbd6c64" }}
    >
      <MDBRow>
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <h5 className="font-weight-bold mb-3 text-center text-lg-start">
            Chats
          </h5>

          <MDBCard>
            <MDBCardBody>
              <MDBTypography listUnStyled className="mb-0">
                <li
                  className="p-2 border-bottom"
                  style={{ backgroundColor: "#eee" }}
                >
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row imagem-chat-perfil">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                        alt="avatar"
                        className="imagem-chat-perfil rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Camile Santana</p>
                        <p className="small text-muted">
                          Olá, seu orçamento ficou em R$ 300,00
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">Just now</p>
                      <span className="badge bg-danger float-end">1</span>
                    </div>
                  </a>
                </li>
                <li className="p-2">
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">Sidney França</p>
                        <p className="small text-muted">
                          Boa tarde, tudo bem? Qual o tipo de serviço que você
                          precisa?
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="small text-muted mb-1">5 mins ago</p>
                      <span className="text-muted float-end">
                        <MDBIcon fas icon="check" />
                      </span>
                    </div>
                  </a>
                </li>
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="6" lg="7" xl="8">
          <MDBTypography listUnStyled>
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <MDBCard>
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Sidney França</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 12 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">Olá! Como posso ajudar você hoje?</p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <li class="d-flex justify-content-between mb-4">
              <MDBCard className="w-100">
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">Lara Croft</p>
                  <p class="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 13 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                    Olá! Estou interessado em criar uma horta em casa. Quanto
                    custaria?
                  </p>
                </MDBCardBody>
              </MDBCard>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            </li>
            <li className="d-flex justify-content-between mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                width="60"
              />
              <MDBCard>
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p className="fw-bold mb-0">Sidney França</p>
                  <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> 10 mins ago
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                    Pode me dizer o tamanho aproximado da área para a horta e
                    suas preferências de plantas?
                  </p>
                </MDBCardBody>
              </MDBCard>
            </li>
            <li className="bg-white mb-3">
              <MDBTextArea
                label="Digite sua mensagem aqui..."
                id="textAreaExample"
                rows={4}
              />
            </li>
            <MDBBtn color="info" rounded className="float-end">
              Enviar
            </MDBBtn>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

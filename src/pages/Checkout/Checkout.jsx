import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./mdb.min.css";
import "./checkout.css";
import React, { useContext, useState } from "react";
import GerminneContext from "../../context/GerminneContext";
import api from "../../utils/axios";
import { useNavigate } from "react-router";

export default function Checkout() {
  const navigate = useNavigate();
  const {
    checkout: { checkoutInfo },
    loggedUser: { id },
  } = useContext(GerminneContext);
  const [completed, setCompleted] = useState(false);
  console.log(checkoutInfo);

  const handleFinalizaCompra = async () => {
    const infoPedido = {
      idProduto: checkoutInfo.idProduto,
      idUsuario: id,
      idStatus: 2,
      quantidade: checkoutInfo.quantidade,
    };

    try {
      const result = await api.post("/pedido", infoPedido);
      console.log(result.data);
      setCompleted(`Pedido #${result.data.idPedido} criado com sucesso!`);
      setTimeout(() => navigate("/perfil"), 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-100 h-custom ">
      {completed && (
        <div className="box-compra-finalizada">
          <img
            src="https://media.tenor.com/bm8Q6yAlsPsAAAAj/verified.gif"
            alt="Logo de checkmark em verde"
          />
          <h2>Compra finalizada com sucesso!</h2>
        </div>
      )}

      {!completed && (
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard className="shadow-5">
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol lg="7">
                      <MDBTypography tag="h5">
                        <a href="/loja" className="text-body">
                          <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                          Continue comprando
                        </a>
                      </MDBTypography>

                      <hr />

                      <MDBCard className="mb-3">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <MDBCardImage
                                  src={ checkoutInfo.imagem }
                                  fluid
                                  className="rounded-3"
                                  style={{ width: "65px" }}
                                  alt="Shopping item"
                                />
                              </div>
                              <div className="ms-3">
                                <MDBTypography tag="h5">
                                  {checkoutInfo.produto}
                                </MDBTypography>
                                <p className="small mb-0">
                                  {checkoutInfo.sementes.join(", ")}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <MDBTypography
                                  tag="h5"
                                  className="fw-normal mb-0"
                                >
                                  {checkoutInfo.quantidade}
                                </MDBTypography>
                              </div>
                              <div style={{ width: "80px" }}>
                                <MDBTypography tag="h5" className="mb-0">
                                  R${" "}
                                  {checkoutInfo.quantidade * checkoutInfo.preco}
                                </MDBTypography>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <MDBIcon fas icon="trash-alt" />
                              </a>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>

                    <MDBCol lg="5">
                      <MDBCard
                        style={{ backgroundColor: "var(--cta-roxo)" }}
                        id="card-detalhes-cartao"
                        className="bg-#FCE4EC text-white rounded-3"
                      >
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Detalhes do cartão
                            </MDBTypography>
                          </div>

                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-visa fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-amex fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                          </a>

                          <form className="mt-4">
                            <MDBInput
                              className="mb-4"
                              label="Nome no cartão"
                              type="text"
                              size="lg"
                              placeholder="Nome no cartão"
                              contrast
                            />

                            <MDBInput
                              className="mb-4"
                              label="Número do cartão"
                              type="text"
                              size="lg"
                              minLength="19"
                              maxLength="19"
                              placeholder="1234 5678 9012 3457"
                              contrast
                            />

                            <MDBRow className="mb-4">
                              <MDBCol md="6">
                                <MDBInput
                                  className="mb-4"
                                  label="Expiração"
                                  type="text"
                                  size="lg"
                                  minLength="7"
                                  maxLength="7"
                                  placeholder="MM/AAAA"
                                  contrast
                                />
                              </MDBCol>
                              <MDBCol md="6">
                                <MDBInput
                                  className="mb-4"
                                  label="CVV"
                                  type="text"
                                  size="lg"
                                  minLength="3"
                                  maxLength="3"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  contrast
                                />
                              </MDBCol>
                            </MDBRow>
                          </form>

                          <hr />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">
                              R$ {checkoutInfo.quantidade * checkoutInfo.preco}
                            </p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Entrega</p>
                            <p className="mb-2">R$ 30,00</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total</p>
                            <p className="mb-2">
                              R${" "}
                              {(
                                checkoutInfo.quantidade * checkoutInfo.preco +
                                30.0
                              ).toFixed(2)}
                            </p>
                          </div>

                          <MDBBtn
                            style={{
                              backgroundColor: "var(--font-banner-verde)",
                            }}
                            color="info"
                            block
                            size="lg"
                          >
                            <div
                              onClick={handleFinalizaCompra}
                              className="d-flex justify-content-between"
                            >
                              <span>
                                R${" "}
                                {(
                                  checkoutInfo.quantidade * checkoutInfo.preco +
                                  30.0
                                ).toFixed(2)}
                              </span>
                              <span>
                                Finalizar compra{" "}
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    </section>
  );
}

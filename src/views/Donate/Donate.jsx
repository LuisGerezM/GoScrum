import logo from "assets/img/GoScrum.png"

import "./Donate.styles.css"

const Donate = () => {
  return (
    <main>
      <section>
        <div>
          <div className="title">Colaborá con el proyecto</div>
          <img src={logo} alt="logo GOScrum" />
        </div>
        <p>
          Si quieres apoyar y contribuir con la mejora o el desarrollo de nuevos proyectos, puedes aportar tu granito de arena. Sólo debes que pulsar
          en el botón “Donar” y rellenar los datos que requiera "Mercado Pago" y enviar tu aporte.
        </p>
        <div>
          <a href="https://mpago.la/27oogTa" target="_blank" rel="noreferrer">
            Donar con MercadoPago
          </a>
        </div>
        <p>Desde GoScrum agradecemos tu colaboración.</p>
      </section>
    </main>
  )
}

export default Donate

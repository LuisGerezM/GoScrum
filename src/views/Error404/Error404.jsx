import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import error404 from "assets/img/not_found.png"

import "./Error404.styles.css"

export default function Error404() {
  const to = localStorage.getItem("token_user") ? "/" : "/login"
  return (
    <>
      <section className={`grid-container ${to === "/" ? "with-header" : "not-header "}`}>
        <div>
          <img src={error404} alt="error404 img" />
        </div>
        <div>
          <div className="span-letter">
            <span className="span-a">Upss...😵</span>
            <span className="span-b">No encontramos</span>
            <span className="span-c">la pagina buscada</span>
          </div>
          <LinkReactRouter linkClass="btn-link" to={to} valueLink="Ir a Login" />
        </div>
      </section>
    </>
  )
}

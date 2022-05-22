import { Button } from "components/Button/Button"
import { LinkReactRouter } from "components/LinkReactRouter/LinkReactRouter"
import { Link } from "react-router-dom"
import "./Error404.styles.css"

export default function Error404({ pageTransition }) {
  return (
    <>
      <section className="grid-container">
        <div>
          <img src="/img/not_found.png" alt="logo" />
        </div>
        <div>
          <h1>
            <span className="span-a">Upss...</span>
            <span className="span-b">No encontramos</span>
            <span className="span-c">la pagina buscada</span>
          </h1>
          <LinkReactRouter classN="btn-link" to="/login" valueLink="Ir a Login" />
        </div>
      </section>
    </>
  )
}

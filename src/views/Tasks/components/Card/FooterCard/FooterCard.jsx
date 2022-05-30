import { Button } from "components/Button/Button"
import React from "react"

export const FooterCard = ({ showMoreDescription, description, limitString, handleSeeMore }) => {
  const txtBtn = showMoreDescription ? "Ver menos" : "Ver más"
  return (
    <>
      <p>{showMoreDescription ? description : limitString(`${description}`).string} </p>

      {limitString(`${description}`).addButton && <Button type="button" onClick={handleSeeMore} textBtn={txtBtn} />}
    </>
  )
}

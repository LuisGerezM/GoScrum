import React from "react"
import { Link as LinkRR } from "react-router-dom"

export const LinkReactRouter = ({ classDiv = "", classL = "", to, valueLink }) => (
  <div className={classDiv}>
    <LinkRR className={classL} to={to}>
      {valueLink}
    </LinkRR>
  </div>
)

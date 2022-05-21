import React from "react"
import { Link as LinkRR } from "react-router-dom"

export const LinkReactRouter = ({ to, valueLink, classN = "" }) => (
  <LinkRR className={classN} to={to}>
    {valueLink}
  </LinkRR>
)

import { Button } from "components/Button/Button"
import React from "react"

export const BodyCard = ({ dateTime, status, actionsCard, data, importance, userName, enableUserActions }) => {
  const statusInLowerCase = status.toLowerCase()
  const importanceInLowerCase = importance.toLowerCase()

  return (
    <>
      <div className="created">{dateTime}</div>
      <div className="created">{userName}</div>
      <Button
        nameClass={statusInLowerCase}
        type="button"
        onClick={enableUserActions.status ? () => actionsCard(data, "editar status") : undefined}
        textBtn={statusInLowerCase}
      />
      <Button nameClass={importanceInLowerCase} type="button" textBtn={importanceInLowerCase} />
    </>
  )
}

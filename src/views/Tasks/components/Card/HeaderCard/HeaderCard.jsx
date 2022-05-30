import { utilQueryUserData } from "utilities/utilQueryUserData"
import { DeleteCardButton } from "./DeleteCardButton"
import { EditCardButton } from "./EditCardButton"

export const HeaderCard = ({ userName, actionsCard, data, title, queryUserOnLine }) => {
  const { enableUserActions } = utilQueryUserData({ userName, queryUserOnLine })

  return (
    <>
      <EditCardButton enableUserActions={enableUserActions} actionsCard={actionsCard} data={data} />
      <DeleteCardButton enableUserActions={enableUserActions} actionsCard={actionsCard} data={data} />
      <div className="title">{title}</div>
    </>
  )
}

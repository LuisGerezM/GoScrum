import { DeleteCardButton } from "./DeleteCardButton"
import { EditCardButton } from "./EditCardButton"

export const HeaderCard = ({ nameUser, userName, actionsCard, data, title }) => {
  return (
    <>
      <EditCardButton nameUser={nameUser} userName={userName} actionsCard={actionsCard} data={data} />
      <DeleteCardButton nameUser={nameUser} userName={userName} actionsCard={actionsCard} data={data} />
      <div className="title">{title}</div>
    </>
  )
}

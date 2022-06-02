import { DeleteCardButton } from "./DeleteCardButton"
import { EditCardButton } from "./EditCardButton"

export const HeaderCard = ({ actionsCard, data, title, enableUserActions }) => {
  return (
    <>
      <EditCardButton enableUserActions={enableUserActions} actionsCard={actionsCard} data={data} />
      <DeleteCardButton enableUserActions={enableUserActions} actionsCard={actionsCard} data={data} />
      <div className="title">{title}</div>
    </>
  )
}

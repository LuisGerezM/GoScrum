import { DeleteCardButton } from "./DeleteCardButton"

export const HeaderCard = ({ nameUser, userName, actionsCard, data, title }) => {
  return (
    <>
      <DeleteCardButton nameUser={nameUser} userName={userName} actionsCard={actionsCard} data={data} />
      <div className="title">{title}</div>
    </>
  )
}

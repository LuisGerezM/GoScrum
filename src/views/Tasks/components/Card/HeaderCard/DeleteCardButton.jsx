export const DeleteCardButton = ({ nameUser, userName, actionsCard, data }) => {
  return (
    <>
      {nameUser === userName && (
        <div className="close" onClick={() => actionsCard(data, "eliminar")}>
          X
        </div>
      )}
    </>
  )
}

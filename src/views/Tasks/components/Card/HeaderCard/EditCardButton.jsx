import EditIcon from "@mui/icons-material/Edit"

export const EditCardButton = ({ nameUser, userName, actionsCard, data }) => {
  return (
    <>
      {nameUser === userName && (
        <div className="edit" onClick={() => actionsCard(data, "editar")}>
          <EditIcon />
        </div>
      )}
    </>
  )
}

import EditIcon from "@mui/icons-material/Edit"

export const EditCardButton = ({ enableUserActions, actionsCard, data }) => {
  return (
    <>
      {enableUserActions.status && (
        <div className="edit" onClick={() => actionsCard(data, "editar")}>
          <EditIcon />
        </div>
      )}
    </>
  )
}

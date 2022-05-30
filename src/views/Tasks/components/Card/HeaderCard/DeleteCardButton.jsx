import CloseIcon from "@mui/icons-material/Close"

export const DeleteCardButton = ({ actionsCard, data, enableUserActions }) => {
  return (
    <>
      {enableUserActions.status && (
        <div className="close" onClick={() => actionsCard(data, "eliminar")}>
          <CloseIcon />
        </div>
      )}
    </>
  )
}

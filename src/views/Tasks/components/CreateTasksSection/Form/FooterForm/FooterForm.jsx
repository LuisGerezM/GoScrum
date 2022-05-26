export const FooterForm = ({ error, loadingTasks }) => {
  return (
    <div className="footer-form">
      <button type="submit" disabled={loadingTasks ? true : false}>
        Crear
      </button>
      {error === "error create" && <div>No pudimos crear la tarea</div>}
    </div>
  )
}

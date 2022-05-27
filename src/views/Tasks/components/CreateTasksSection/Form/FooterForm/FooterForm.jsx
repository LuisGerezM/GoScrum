export const FooterForm = ({
  error,
  loadingTasks,
  title,
  // initialValues
}) => {
  return (
    <div className="footer-form">
      <button type="submit" disabled={loadingTasks ? true : false}>
        {title}
        {/* Crear */}
      </button>
      {error === "error create" && <div>No pudimos crear la tarea</div>}
    </div>
  )
}

export const FooterTaskForm = ({ error, loadingTasks, title }) => {
  return (
    <div className="footer-form">
      <button type="submit" disabled={loadingTasks ? true : false}>
        {title}
      </button>
      {error.name === "error create" && <div>No pudimos crear la tarea 😥</div>}
    </div>
  )
}

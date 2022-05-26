export const FooterForm = ({error}) => {
  return (
    <div className="footer-form">
      <button type="submit">Crear</button>
      {error === "error create" && <div>No pudimos crear la tarea</div>}
    </div>
  )
}

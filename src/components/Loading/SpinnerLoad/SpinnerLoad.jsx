import "./SpinnerLoad.styles.css"

export const SpinnerLoad = ({ nameClass = "" }) => {
  return (
    <div className={"lds-spinner " + (nameClass ? "tasks-create" : "")}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

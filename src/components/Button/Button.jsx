export const Button = ({ type, textBtn, onClick, classN = "" }) => {
  return (
    <button type={type} className={classN} onClick={onClick}>
      {textBtn}
    </button>
  )
}

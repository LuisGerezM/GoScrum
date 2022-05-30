export const Button = ({ type = "", textBtn, onClick = null, nameClass = "", disabled = false }) => {
  return (
    <button type={type} className={nameClass} onClick={onClick} disabled={disabled}>
      {textBtn}
    </button>
  )
}

export const Button = ({ type = "", textBtn, onClick, nameClass = "", disabled = false }) => {
  return (
    <button type={type} className={nameClass} onClick={onClick} disabled={disabled}>
      {textBtn}
    </button>
  )
}

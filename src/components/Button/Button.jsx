export const Button = ({ type = "", textBtn, onClick, classN = "", disabled = false }) => {
  return (
    <button type={type} className={classN} onClick={onClick} disabled={disabled}>
      {textBtn}
    </button>
  )
}

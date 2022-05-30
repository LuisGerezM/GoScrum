const Input = ({
  txtLabel = null,
  name,
  type,
  errors = null,
  touched = null,
  values,
  handleChange,
  handleBlur,
  placeholder = "",
  nameClass = "",
  nameClassDiv = "",
  disabled = null,
}) => {
  return (
    <div className={nameClassDiv ? nameClassDiv : ""}>
      {txtLabel && <label>{txtLabel}</label>}
      <input
        className={nameClass + (touched && touched[name] && errors ? " error" : "")}
        type={type}
        name={name}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled ? disabled : false}
      />
      {errors && touched[name] && <span className={errors ? "error" : ""}>{errors}</span>}
    </div>
  )
}

export default Input

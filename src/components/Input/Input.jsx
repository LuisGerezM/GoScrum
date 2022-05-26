const Input = ({ txtLabel = null, name, type, errors = null, touched, values, handleChange, handleBlur, placeholder = "", nameClass = "" }) => {

  return (
    <div>
      {txtLabel && <label>{txtLabel}</label>}
      <input
        className={nameClass + (touched[name] && errors ? " error" : "")}
        type={type}
        name={name}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {errors && touched[name] && <span className={errors ? "error" : ""}>{errors}</span>}
    </div>
  )
}

export default Input

const Input = ({ txtLabel, name, type, errors, touched, values, handleChange, handleBlur }) => {
  return (
    <div>
      <label>{txtLabel}</label>
      <input className={touched[name] && errors ? "error" : ""} type={type} name={name} value={values} onChange={handleChange} onBlur={handleBlur} />
      {errors && touched[name] && <span className={errors ? "error" : ""}>{errors}</span>}
    </div>
  )
}

export default Input

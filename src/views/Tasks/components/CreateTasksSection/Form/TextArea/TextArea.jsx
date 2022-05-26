export const TextArea = ({ name, errors, touched, values, handleChange, handleBlur }) => {
  return (
    <div>
      <textarea
        className={touched[name] && errors ? "error" : ""}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Descripción"
        value={values}
      />
      {errors && touched[name] && <span className={errors ? "error" : ""}>{errors}</span>}
    </div>
  )
}

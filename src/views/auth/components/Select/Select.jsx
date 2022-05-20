const Select = ({ dataOption, txtDefaultOption, txtLabel, name, errors, touched, values, handleChange, handleBlur }) => {
    // console.log('error', {name, errors, touched, values})
  return (
    <>
      <label>{txtLabel}</label>
      <select
        className={touched[name] && errors ? "error" : ""}
        name={name}
        value={values}
        onChange={name === "continent" ? (e) => handleChange(e.currentTarget.value) : handleChange}
        onBlur={handleBlur}
      >
        <option value="">{txtDefaultOption}</option>
        {dataOption?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {(errors && touched[name]) && <span className={errors ? "error" : ""}>{errors}</span>}
    </>
  )
}

export default Select

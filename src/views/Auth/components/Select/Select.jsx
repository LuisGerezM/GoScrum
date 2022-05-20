import OptionsSelect from "./OptionsSelect"

const Select = ({ dataOption, txtDefaultOption, txtLabel, name, errors, touched, values, handleChange, handleBlur }) => {
  // console.log('error', {name, errors, touched, values})
  return (
    <div>
      <label>{txtLabel}</label>
      <select
        className={touched[name] && errors ? "error" : "select-items select-selected"}
        name={name}
        value={values}
        onChange={name === "continent" ? (e) => handleChange(e.currentTarget.value) : handleChange}
        onBlur={handleBlur}
      >
        <OptionsSelect txtDefaultOption={txtDefaultOption} dataOption={dataOption} />
      </select>
      {errors && touched[name] && <span className={errors ? "error" : ""}>{errors}</span>}
    </div>
  )
}

export default Select

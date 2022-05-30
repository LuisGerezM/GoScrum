import OptionsSelect from "./OptionsSelect"

const Select = ({
  nameClass = "",
  dataOption,
  txtDefaultOption,
  txtLabel = null,
  name,
  errors = null,
  touched = null,
  values,
  handleChange,
  handleBlur = null,
  disabled = false,
  ubication = null,
}) => {
  return (
    <div>
      {txtLabel && <label>{txtLabel}</label>}
      <select
        className={nameClass + (touched && touched[name] && errors ? " error" : " select-items select-selected")}
        name={name}
        value={values}
        onChange={name === "continent" ? (e) => handleChange(e.currentTarget.value) : handleChange}
        onBlur={handleBlur}
        disabled={disabled}
      >
        <OptionsSelect txtDefaultOption={txtDefaultOption} dataOption={dataOption} ubication={ubication} />
      </select>
      {errors && touched[name] && <span className={errors ? "error" : ""}>{errors}</span>}
    </div>
  )
}

export default Select

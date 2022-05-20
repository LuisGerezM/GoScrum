import { useUserForm } from "hooks/useAuthUser/useAuthUserForm"

const Input = ({ txtLabel, name, type, errors, touched, values, handleChange, handleBlur }) => {
  return (
    <>
      <label>{txtLabel}</label>
      <input
        className={touched[name] && errors[name] ? "error" : ""}
        type={type}
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors[name] && touched[name] && <span className={errors[name] ? "error" : ""}>{errors[name]}</span>}
    </>
  )
}

export default Input

import React from "react"

const OptionsSelect = ({ txtDefaultOption, dataOption }) => {
  return (
    <>
      <option value="">{txtDefaultOption}</option>
      {dataOption?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </>
  )
}

export default OptionsSelect

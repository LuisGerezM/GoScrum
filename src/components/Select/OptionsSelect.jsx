import React from "react"

const OptionsSelect = ({ txtDefaultOption, dataOption, ubication }) => {
  
  return (
    <>
      <option value="">{txtDefaultOption}</option>
      {ubication && <option value="ALL">ALL</option>}
      {dataOption?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </>
  )
}

export default OptionsSelect

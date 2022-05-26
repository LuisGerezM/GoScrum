import { useState } from "react"

export const useCard = (createdAt) => {
  const [showMoreDescription, setShowMoreDescription] = useState(false)

  const nameUser = localStorage.getItem("userName")

  // conver time -> local
  const dateTime = `${new Date(createdAt).toLocaleString()} hs.`

  // limit description
  const limitString = (str) => {
    if (str.length > 100) return { string: str.slice(0, 97).concat("..."), addButton: true }
    return { string: str, addButton: false }
  }

  const handleSeeMore = () => setShowMoreDescription((prevValue) => !prevValue)

  return { handleSeeMore, limitString, dateTime, nameUser, showMoreDescription }
}

import { useState } from "react"
import { useSelector } from "react-redux"

export const useCard = (createdAt) => {
  const [showMoreDescription, setShowMoreDescription] = useState(false)

  const { user } = useSelector((state) => {
    return state.userReducer
  })

  // conver time -> local
  const dateTime = `${new Date(createdAt).toLocaleString()} hs.`

  // limit description
  const limitString = (str) => {
    if (str.length > 100) return { string: str.slice(0, 97).concat("..."), addButton: true }
    return { string: str, addButton: false }
  }

  const handleSeeMore = () => setShowMoreDescription((prevValue) => !prevValue)

  const queryUserOnLine = () => {
    return user
  }
  return {
    handleSeeMore,
    limitString,
    dateTime,
    queryUserOnLine,
    showMoreDescription,
  }
}

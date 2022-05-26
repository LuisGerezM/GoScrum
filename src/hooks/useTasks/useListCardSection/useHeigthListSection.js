import { useEffect, useState } from "react"

export const useHeigthListSection = (renderListTasks, searchTitle) => {
  const [sizeHeigth, setSizeHeigth] = useState(false)

  useEffect(() => {
    const checkCardQuantity = () => {
      const newS = renderListTasks.filter((item) => item.status === "NEW")
      const finishS = renderListTasks.filter((item) => item.status === "FINISHED")
      const inProgressS = renderListTasks.filter((item) => item.status === "IN PROGRESS")

      const maxList = Math.max(newS.length, finishS.length, inProgressS.length)

      if (maxList < 4) setSizeHeigth(true)
    }

    if (renderListTasks?.length) checkCardQuantity()
    else if (searchTitle) setSizeHeigth(true)

    return () => {
      setSizeHeigth(false)
    }
  }, [renderListTasks, searchTitle])

  return { sizeHeigth }
}

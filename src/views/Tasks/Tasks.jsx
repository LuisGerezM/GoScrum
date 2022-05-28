import { CreateTasksSection } from "./components/CreateTasksSection/CreateTasksSection"
import { ListCardsSection } from "./components/ListCardsSection/ListCardsSection"

import "./Tasks.styles.css"

export const Tasks = () => {
  return (
    <>
      <main id="tasks">
        <CreateTasksSection />
        <ListCardsSection />
      </main>
    </>
  )
}

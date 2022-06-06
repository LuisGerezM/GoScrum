import { CreateTasksSection } from "./components/CreateTasksSection/CreateTasksSection"
import { ListCardsSection } from "./components/ListCardsSection/ListCardsSection"

import "./Tasks.styles.css"

export default function Tasks() {
  return (
    <main id="tasks">
      <CreateTasksSection />
      <ListCardsSection />
    </main>
  )
}

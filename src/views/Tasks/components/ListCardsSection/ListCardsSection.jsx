import { useListCardSection } from "hooks/useTasks/useListCardSection"
import { FilterCardsSection } from "./FilterCardsSection"
import { ShowCardsSection } from "./ShowCardsSection"

export const ListCardsSection = () => {
  const {
    handleChangeRadioBtn,
    handleSearchTitle,
    handleChangeImportance,
    renderListTasks,
    valueSelect,
    isPhone,
    loadingTasks,
    error,
    listTasks,
    tasksFromWho,
    searchTitle,
    msgTasks,
  } = useListCardSection()

  return (
    <section className={"wrapper_list" + (msgTasks || searchTitle ? " no-tasks" : "")}>
      <div className="list_header">
        <div>Mis tareas</div>
      </div>
      <FilterCardsSection
        handleChangeRadioBtn={handleChangeRadioBtn}
        tasksFromWho={tasksFromWho}
        listTasks={listTasks}
        renderListTasks={renderListTasks}
        handleSearchTitle={handleSearchTitle}
        handleChangeImportance={handleChangeImportance}
        valueSelect={valueSelect}
      />
      <ShowCardsSection
        error={error}
        isPhone={isPhone}
        loadingTasks={loadingTasks}
        renderListTasks={renderListTasks}
        searchTitle={searchTitle}
        msgTasks={msgTasks}
      />
    </section>
  )
}

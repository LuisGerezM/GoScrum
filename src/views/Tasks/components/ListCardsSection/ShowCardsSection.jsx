import { RenderListCards } from "./RenderListCards/RenderListCards"

export const ShowCardsSection = ({ error, isPhone, loadingTasks, renderListTasks, searchTitle, msgTasks }) => {
  return (
    <>
      {error && error.name !== "error create" ? (
        <div className="error">
          <div>{error.message + " - " + error.name}</div>
        </div>
      ) : (
        <RenderListCards
          renderListTasks={renderListTasks}
          isPhone={isPhone}
          loadingTasks={loadingTasks}
          searchTitle={searchTitle}
          msgTasks={msgTasks}
        />
      )}
    </>
  )
}

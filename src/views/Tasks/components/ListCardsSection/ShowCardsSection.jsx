import { RenderListCard } from "./RenderListCard"

export const ShowCardsSection = ({ error, isPhone, loadingTasks, renderListTasks, searchTitle, msgTasks }) => {
  return (
    <>
      {error && error !== "error create" ? (
        <div className="error">
          <div>{error}</div>
        </div>
      ) : (
        <RenderListCard
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

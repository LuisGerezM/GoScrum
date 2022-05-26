import { RenderListCards } from "./RenderListCards/RenderListCards"

export const ShowCardsSection = ({ error, isPhone, loadingTasks, renderListTasks, searchTitle, msgTasks, loadingInputSearch }) => {
  return (
    <>
      {error && error !== "error create" ? (
        <div className="error">
          <div>{error}</div>
        </div>
      ) : (
        <RenderListCards
          renderListTasks={renderListTasks}
          isPhone={isPhone}
          loadingTasks={loadingTasks}
          searchTitle={searchTitle}
          msgTasks={msgTasks}
          loadingInputSearch={loadingInputSearch}
        />
      )}
    </>
  )
}

import { useRenderCards } from "hooks/useTasks/useRenderCards"
import { SkeletonLoading } from "../SkeletonLoading/SkeletonLoading"

export const RenderListCard = ({ renderListTasks, isPhone, loadingTasks, searchTitle, msgTasks }) => {
  const { renderAllCards, renderSeparateCards } = useRenderCards(renderListTasks)
  return (
    <>
      {loadingTasks ? (
        <SkeletonLoading count={3} height={80} nameClass="list phone" />
      ) : !renderListTasks?.length ? (
        <>
          {searchTitle && <div> No encontramos lo que buscaste </div>}
          {msgTasks && <div> {msgTasks} </div>}
        </>
      ) : isPhone ? (
        <div className="list phone">{renderAllCards()}</div>
      ) : (
        <div className="list_group">
          {loadingTasks ? (
            <>
              <SkeletonLoading count={2} height={150} width={"100%"} nameClass="list" repeat={[1, 2, 3]} />
            </>
          ) : !renderListTasks?.length ? (
            <div>
              {searchTitle && "No encontramos lo que buscaste"}
              {msgTasks && msgTasks}
            </div>
          ) : (
            <>
              <div className="list">
                <div>Nuevas</div>
                {renderSeparateCards("NEW")}
              </div>
              <div className="list">
                <div>En proceso</div>
                {renderSeparateCards("IN PROGRESS")}
              </div>
              <div className="list">
                <div>Finalizadas</div>
                {renderSeparateCards("FINISHED")}
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

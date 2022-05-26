import { useRenderCards } from "hooks/useTasks/useRenderCards"

export const PaintingCardsList = ({ renderListTasks, isPhone }) => {
  const { renderAllCards, renderSeparateCards, threecolumnListCards } = useRenderCards(renderListTasks)
  return (
    <>
      {isPhone ? (
        <div className="list phone">{renderAllCards()}</div>
      ) : (
        <>
          {threecolumnListCards.map((columnList) => (
            <div className="list">
              <div>{columnList.txtDiv}</div>
              {renderSeparateCards(columnList.nameType)}
            </div>
          ))}
        </>
      )}
    </>
  )
}

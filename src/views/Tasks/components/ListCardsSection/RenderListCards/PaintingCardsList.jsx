import { useRenderCards } from "hooks/useTasks/useCard/useRenderCards"

export const PaintingCardsList = ({ renderListTasks, isPhone }) => {
  const { renderAllCards, renderSeparateCards, threecolumnListCards } = useRenderCards(renderListTasks)
  return (
    <>
      {isPhone ? (
        <div className="list phone">{renderAllCards()}</div>
      ) : (
        <>
          {threecolumnListCards.map((columnList) => (
            <div key={columnList.nameType} className="list">
              <div>{columnList.txtDiv}</div>
              {renderSeparateCards(columnList.nameType)}
            </div>
          ))}
        </>
      )}
    </>
  )
}

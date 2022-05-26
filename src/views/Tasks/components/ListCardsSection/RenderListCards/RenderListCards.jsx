import { LoadCardsList } from "./LoadCardsList"
import { MessageCardsList } from "./MessageCardsList"
import { PaintingCardsList } from "./PaintingCardsList"

export const RenderListCards = ({ renderListTasks, isPhone, loadingTasks, searchTitle, msgTasks, loadingInputSearch }) => {
  return (
    <div className={!isPhone ? "list_group" : ""}>
      {(loadingTasks || loadingInputSearch) && <LoadCardsList isPhone={isPhone} />}

      {!loadingTasks && !loadingInputSearch && !renderListTasks?.length && <MessageCardsList searchTitle={searchTitle} msgTasks={msgTasks} />}

      {!loadingTasks && !loadingInputSearch && renderListTasks?.length > 0 && (
        <PaintingCardsList renderListTasks={renderListTasks} isPhone={isPhone} />
      )}
    </div>
  )
}

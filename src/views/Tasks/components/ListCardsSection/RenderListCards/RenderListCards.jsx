import { LoadCardsList } from "./LoadCardsList"
import { MessageCardsList } from "./MessageCardsList"
import { PaintingCardsList } from "./PaintingCardsList"

export const RenderListCards = ({ renderListTasks, isPhone, loadingTasks, searchTitle, msgTasks }) => {
  return (
    <div className={!isPhone ? "list_group" : ""}>
      {loadingTasks && <LoadCardsList isPhone={isPhone} />}

      {!loadingTasks && !renderListTasks?.length && <MessageCardsList searchTitle={searchTitle} msgTasks={msgTasks} />}

      {!loadingTasks && renderListTasks?.length > 0 && <PaintingCardsList renderListTasks={renderListTasks} isPhone={isPhone} />}
    </div>
  )
}

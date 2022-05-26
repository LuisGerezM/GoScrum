export const MessageCardsList = ({ searchTitle, msgTasks }) => {
  return (
    <>
      {searchTitle && <div> No encontramos lo que buscaste</div>}
      {msgTasks && <div> {msgTasks} </div>}
    </>
  )
}

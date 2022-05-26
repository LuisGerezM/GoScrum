import { useDispatch } from "react-redux"
import { deleteTask, editCardStatus } from "redux/store/actions/tasksActions"
import { utilAlertConfirm } from "utilities/utilAlert/utilAlertConfirm"
import Card from "views/Tasks/components/Card/Card"

export const useRenderCards = (renderListTasks) => {
  const dispatch = useDispatch()

  const handleActionsCard = async (data, action) => {
    let takeResponse = await utilAlertConfirm({
      title: `Estás seguro de que deseas ${action} la tarea '${data.title}'?`,
      icon: "question",
      showCancelButton: true,
    })

    if (takeResponse) {
      dispatch(action === "eliminar" ? deleteTask(data._id) : editCardStatus(data))
    }
  }

  // phone
  const renderAllCards = () => renderListTasks?.map((data) => <Card key={data._id} data={data} actionsCard={handleActionsCard} />)

  // desk
  const renderSeparateCards = (status) =>
    renderListTasks?.filter((data) => data.status === `${status}`).map((data) => <Card key={data._id} data={data} actionsCard={handleActionsCard} />)

  const threecolumnListCards = [
    { nameType: "NEW", txtDiv: "Nuevas" },
    { nameType: "IN PROGRESS", txtDiv: "En proceso" },
    { nameType: "FINISHED", txtDiv: "Finalizadas" },
  ]

  return { renderAllCards, renderSeparateCards, threecolumnListCards }
}

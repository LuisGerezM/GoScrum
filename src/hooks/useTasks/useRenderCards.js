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
      // if (action === "eliminar") dispatch(deleteTask(data._id));
      // if (action === "cambiar") dispatch(editCardStatus(data));
    }
  }

  // phone
  const renderAllCards = () =>
    renderListTasks?.map((data) => (
      <Card
        key={data._id}
        data={data}
        // deleteCard={handleDeleteCart}
        // editCardStatus={handleEditCardStatus}
        actionsCard={handleActionsCard}
      />
    ))

  // desk
  const renderSeparateCards = (status) =>
    renderListTasks?.filter((data) => data.status === `${status}`).map((data) => <Card key={data._id} data={data} actionsCard={handleActionsCard} />)

  return { renderAllCards, renderSeparateCards }
}

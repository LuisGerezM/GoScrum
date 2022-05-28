import { AnimatePresence } from "framer-motion"
import { useDispatch } from "react-redux"
import { deleteTask, editCardStatus, taskFormFieldsForEditing, tasksRequest } from "redux/store/actions/tasksActions"
import { utilAlertConfirm } from "utilities/utilAlert/utilAlertConfirm"
import Card from "views/Tasks/components/Card/Card"

export const useRenderCards = (renderListTasks) => {
  const dispatch = useDispatch()

  const handleActionsCard = async (data, action) => {
    let takeResponse = await utilAlertConfirm({
      title: `Estás seguro de ${action}?`,
      text: `Tarea afectada: '${data.title}'`,
      icon: "question",
      showCancelButton: true,
    })

    if (takeResponse) {
      if (action === "editar") {
        dispatch(tasksRequest("EDIT_CARD"))
        dispatch(taskFormFieldsForEditing(data))
      } else dispatch(action === "eliminar" ? deleteTask(data._id) : editCardStatus(data))
    }
  }

  // phone
  const renderAllCards = () => (
    <AnimatePresence>
      {renderListTasks?.map((data, index) => (
        <Card key={data._id} data={data} actionsCard={handleActionsCard} index={index} />
      ))}
    </AnimatePresence>
  )

  // desk
  const renderSeparateCards = (status) => (
    <AnimatePresence>
      {renderListTasks
        ?.filter((data) => data.status === `${status}`)
        .map((data, index) => (
          <Card key={data._id} data={data} actionsCard={handleActionsCard} index={index} />
        ))}
    </AnimatePresence>
  )

  const threecolumnListCards = [
    { nameType: "NEW", txtDiv: "Nuevas" },
    { nameType: "IN PROGRESS", txtDiv: "En proceso" },
    { nameType: "FINISHED", txtDiv: "Finalizadas" },
  ]

  return { renderAllCards, renderSeparateCards, threecolumnListCards }
}

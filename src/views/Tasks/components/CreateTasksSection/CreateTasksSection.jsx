import { useCreateTaskForm } from "hooks/useTasks/useCreateTaskForm"
import { useTaskSelectData } from "hooks/useTasks/useTaskSelectData"
import { TaskForm } from "./Form/TaskForm"

import "react-toastify/dist/ReactToastify.css"
import { Toast } from "components/Loading/Toast/Toast"

import "./CreateTasksSection.styles.css"

export const CreateTasksSection = () => {
  const {
    formik: { handleSubmit, handleChange, handleBlur, errors, touched, values },
    error,
    loadingTasks,
  } = useCreateTaskForm()

  const { dataSelect, loadingTaskData } = useTaskSelectData()

  return (
    <section className="task-form">
      <div>Crear Tarea</div>
      <p>Crea tus tareas</p>
      <TaskForm
        loadingTaskData={loadingTaskData}
        handleSubmit={handleSubmit}
        touched={touched}
        errors={errors}
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        dataSelect={dataSelect}
        error={error}
        loadingTasks={loadingTasks}
      />

      <Toast error={error === "error create" ? "😥" : "😎"} />
    </section>
  )
}

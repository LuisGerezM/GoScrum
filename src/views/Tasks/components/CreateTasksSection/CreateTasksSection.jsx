import { useCreateTaskSection } from "hooks/useTasks/useCreateTaskSection/useCreateTaskSection"
import { useTaskSelectData } from "hooks/useTasks/useCreateTaskSection/useTaskSelectData"
import { TaskForm } from "./Form/TaskForm"

import { Toast } from "components/Loading/Toast/Toast"
import "react-toastify/dist/ReactToastify.css"

import "./CreateTasksSection.styles.css"

export const CreateTasksSection = () => {
  const {
    formik: { handleSubmit, handleChange, handleBlur, errors, touched, values },
    error,
    loadingTasks,
    initialValues,
    editFormFields,
  } = useCreateTaskSection()

  const { dataSelect, loadingTaskData } = useTaskSelectData()

  const title = Object.keys(editFormFields).length > 0 ? editFormFields.textForm.title : initialValues.textForm.title
  const subTitle = Object.keys(editFormFields).length > 0 ? editFormFields.textForm.subTitle : initialValues.textForm.subTitle

  return (
    <section className="task-form">
      <div>{title} Tarea</div>
      <p>{subTitle} tus tareas</p>
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
        title={title}
      />
      <Toast error={error} />
    </section>
  )
}

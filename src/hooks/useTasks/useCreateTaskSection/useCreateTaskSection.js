import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { createTask, editCard, resetTasksNotification } from "redux/store/actions/tasksActions"
import * as Yup from "yup"

export const useCreateTaskSection = () => {
  const { loadingTasks, error, success_request, status_code, task_edit } = useSelector((state) => {
    return state.tasksReducer
  })

  const [editFormFields, setEditFormFields] = useState({})

  const initialValues = {
    title: "",
    status: "",
    importance: "",
    description: "",
    textForm: { title: "Crear", subTitle: "Crea" },
  }

  const dispatch = useDispatch()

  const onSubmit = () => {
    if (Object.keys(editFormFields).length === 0) dispatch(createTask(formik.values))
    else {
      const { title, status, importance, description } = formik.values

      const valuesToEdit = {
        _id: editFormFields._id,
        title,
        status,
        importance,
        description,
      }

      resetForm()
      setEditFormFields({})
      dispatch(editCard(valuesToEdit))
    }
  }

  const required = "*Campo obligatorio"
  const validationSchema = Yup.object().shape({
    title: Yup.string().min(3, "La cantidad mímina de caracteres es 3").required(required),
    status: Yup.string().required(required),
    importance: Yup.string().required(required),
    description: Yup.string().required(required),
  })

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  const { setFieldValue, resetForm } = formik

  useEffect(() => {
    if (Object.keys(task_edit).length > 0) {
      task_edit.textForm = { title: "Editar", subtitle: "Edita" }
      setEditFormFields(task_edit)
      setFieldValue("title", task_edit.title)
      setFieldValue("importance", task_edit.importance)
      setFieldValue("status", task_edit.status)
      setFieldValue("description", task_edit.description)
      dispatch(resetTasksNotification())
      toast.info("Ahora puedes editar la tarea")
    }
  }, [task_edit, setFieldValue, dispatch])

  useEffect(() => {
    if (error) {
      toast.info(error)
      setTimeout(() => {
        dispatch(resetTasksNotification())
      }, 500)
    }
  }, [error, dispatch])

  useEffect(() => {
    if (success_request && success_request === "CREATE") {
      toast.info("Tu tarea se creó correctamente")
      dispatch(resetTasksNotification())
      resetForm()
    }
  }, [success_request, status_code, resetForm, dispatch])

  return {
    formik,
    error,
    loadingTasks,
    initialValues,
    editFormFields,
  }
}

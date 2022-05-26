import { useFormik } from "formik"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { createTask, resetTasksNotification } from "redux/store/actions/tasksActions"
import * as Yup from "yup"

export const useCreateTaskForm = () => {
  const { loadingTasks, error, success_request } = useSelector((state) => {
    return state.tasksReducer
  })

  const dispatch = useDispatch()

  const initialValues = {
    title: "",
    status: "",
    importance: "",
    description: "",
  }

  const onSubmit = () => {
    dispatch(createTask(formik.values))
  }

  const required = "*Campo obligatorio"
  const validationSchema = Yup.object().shape({
    title: Yup.string().min(3, "La cantidad mímina de caracteres es 3").required(required),
    status: Yup.string().required(required),
    importance: Yup.string().required(required),
    description: Yup.string().required(required),
  })

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  useEffect(() => {
    if (error) {
      toast.info("Ups, ocurrió un problema al crear la tarea...")
      setTimeout(() => {
        dispatch(resetTasksNotification())
      }, 500)
    }
  }, [error, dispatch])

  const { resetForm } = formik
  useEffect(() => {
    if (success_request) {
      // cambiar msj por status_code
      toast.info("Tu tarea se creó correctamente")
      dispatch(resetTasksNotification())
      resetForm()
    }
    return () => {
      console.log("desmontando efect en useTaskForm")
    }
  }, [success_request, resetForm, dispatch])

  return { formik, error, loadingTasks }
}

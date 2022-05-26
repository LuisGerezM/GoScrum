import { useFormik } from "formik"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { createTask, resetTasksNotification } from "redux/store/actions/tasksActions"
import * as Yup from "yup"

export const useCreateTaskSection = () => {
  const { loadingTasks, error, success_request, status_code } = useSelector((state) => {
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
      toast.info(error)
      setTimeout(() => {
        dispatch(resetTasksNotification())
      }, 500)
    }
  }, [error, dispatch])

  const { resetForm } = formik
  useEffect(() => {
    if (success_request && success_request === "CREATE") {
      toast.info("Tu tarea se creó correctamente")
      dispatch(resetTasksNotification())
      resetForm()
    }
    return () => {
      console.log("desmontando efect en useTaskForm")
    }
  }, [success_request, status_code, resetForm, dispatch])

  return { formik, error, loadingTasks }
}

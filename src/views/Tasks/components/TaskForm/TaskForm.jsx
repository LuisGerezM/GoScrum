import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useDispatch, useSelector } from "react-redux";

import "./TaskForm.styles.css";
import { createTask } from "redux/store/actions/tasksActions";

const { REACT_APP_BASEURL_GOSCRUMALKEMY: BASEURL } = process.env;

const TaskForm = () => {
  // -----  data to complete select
  const [dataSelect, setDataSelect] = useState(null);
  const [loadingTaskData, setLoadingTaskData] = useState(false);

  const { error } = useSelector((state) => {
    return state.tasksReducer;
  });
  const dispatch = useDispatch();

  // data para el select
  useEffect(() => {
    setLoadingTaskData(true);
    fetch(`${BASEURL}task/data`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token_user")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataSelect(data.result);
        setLoadingTaskData(false);
      });
  }, [dispatch]);

  useEffect(() => {
    if (error) toast("Ups, ocurrió un problema al crear la tarea...");
  }, [error]);

  const initialValues = {
    title: "",
    status: "",
    importance: "",
    description: "",
  };

  const onSubmit = () => {
    // console.log(values) // {title: 'titulo', status: 'NEW', importance: 'LOW', description: 'descripcionn'}

    // NEW con REDUX
    dispatch(createTask(values));
    resetForm();

    // ANTES
    // fetch(`${BASEURL}task`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token_user")}`,
    //   },
    //   body: JSON.stringify({
    //     task: values,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("data ->", data);
    //     resetForm();
    //     toast("Tu tarea se creó");
    //   });
  };

  const required = "*Campo obligatorio";
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(5, "La cantidad mímina de caracteres es 6")
      .required(required),
    status: Yup.string().required(required),
    importance: Yup.string().required(required),
    description: Yup.string().required(required),
  });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    resetForm,
  } = formik;

  return (
    <section className="task-form">
      <div>Crear Tarea</div>
      <p>Crea tus tareas</p>
      {loadingTaskData ? (
        <SkeletonTheme
          baseColor="#d6d2d2"
          highlightColor="#594a4a"
          borderRadius="0.5rem"
          duration={4}
        >
          <Skeleton count={4} height={50} />
        </SkeletonTheme>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                // className={errors.title ? "error" : ""}
                className={touched.title && errors.title ? "error" : "input-form"}
                name="title"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Titulo"
                value={values.title}
              />
              {errors.title && touched.title && (
                <span className={errors.title ? "error" : ""}>
                  {errors.title}
                </span>
              )}
            </div>
            <div>
              <select
                // className={errors.status ? "error" : ""}
                className={touched.status && errors.status ? "error" : ""}
                name="status"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
              >
                <option value="">Seleccionar un estado</option>
                {dataSelect?.status.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.status && touched.status && (
                <span className={errors.status ? "error" : ""}>
                  {errors.status}
                </span>
              )}
            </div>
            <div>
              <select
                // className={errors.importance ? "error" : ""}
                className={`importance ${
                  touched.importance && errors.importance ? "error" : ""
                }`}
                name="importance"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.importance}
              >
                <option value="">Seleccionar una prioridad</option>
                {dataSelect?.importance.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.importance && touched.importance && (
              <span className={errors.importance ? "error" : ""}>
                {errors.importance}
              </span>
            )}
            </div>
           
          </div>
          <div>
            <div>
              <textarea
                className={
                  touched.description && errors.description ? "error" : ""
                }
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Descripción"
                value={values.description}
              />
              {errors.description && touched.description && (
                <span className={errors.description ? "error" : ""}>
                  {errors.description}
                </span>
              )}
            </div>
          </div>
          <div className="footer-form">
            <button type="submit">Crear</button>
            {error === "error create" && <div>No pudimos crear la tarea</div>}
          </div>
        </form>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        icon={error === "error create" ? "😥" : "😎"}
        theme={"dark"}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default TaskForm;

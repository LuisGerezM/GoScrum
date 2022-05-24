import { useState, useEffect } from "react"
import { useResize } from "hooks/useResize"
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import Card from "./components/Card/Card"
import TaskForm from "./components/TaskForm/TaskForm"
import { utilAlertConfirm } from "utilities/utilAlert/utilAlertConfirm"

import debounce from "lodash.debounce"

import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

import { useDispatch, useSelector } from "react-redux"
import { getTasks, deleteTask, editCardStatus } from "redux/store/actions/tasksActions"

import "./Tasks.styles.css"
export const Tasks = () => {
  const [listTasks, setListTasks] = useState(null)
  const [renderListTasks, setRenderListTasks] = useState(null)
  // const [loadingCards, setLoadingCards] = useState(false);

  // radio button
  const [tasksFromWho, setTasksFromWho] = useState("ALL")

  // input search
  const [searchTitle, setSearchTitle] = useState(null)

  // select
  const [valueSelect, setValueSelect] = useState("")

  const { isPhone } = useResize()

  // redux
  // traemos elementos que van a ir variando
  const { loadingTasks, tasks, error } = useSelector((state) => {
    return state.tasksReducer
  })
  const dispatch = useDispatch() // para poder dispachar acciones a redux

  useEffect(() => {
    if (tasks?.length) {
      setListTasks(tasks)
      setRenderListTasks(tasks)
    }
  }, [tasks])

  // ---- traemos tareas 1ra vez
  useEffect(() => {
    // Lo que antes haciamos con el fetch (mas el loading), ahora lo hacemos con redux usando el dispatch
    // NEW
    // console.log('tasksFromWho', tasksFromWho)
    setRenderListTasks(null)
    dispatch(getTasks(tasksFromWho === "MY" ? "/me" : ""))

    // ANTES
    // setLoadingCards(true);
    // fetch(`${BASEURL}task${tasksFromWho === "MY" ? "/me" : ""}`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("token_user")}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log("data ->", data);
    //     setListTasks(data.result); // esta lista NO se va a modificar para no perder valores originales
    //     setRenderListTasks(data.result); // esta lista se va a ir modificando ..
    //     // resetForm();
    //     // toast("Tu tarea se creó");
    //     setLoadingCards(false);
    //   });
  }, [tasksFromWho, dispatch]) // si cambia tasksFromWho --> se ejecuta el efecto secundario

  // ---- fin traer tarea

  // buscando por titulo ;; En este efecto deberíamos usarlo llamando a una API, asi lo q vamos escribiendo en el input de busqueda se vaya buscando, pero en esta ocasión vamos a filtrarlo....
  useEffect(() => {
    const filterTasksByTitle = (query) => {
      return listTasks?.filter((task) => task.title.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }
    // console.log("searchTitle -->", searchTitle);
    if (searchTitle) setRenderListTasks(filterTasksByTitle(searchTitle))
    else setRenderListTasks(listTasks)
  }, [searchTitle, listTasks])

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

  // const handleDeleteCart = async (id, title) => {
  //   let takeResponse = await confirmAlert({
  //     title: `Estás seguro de que deseas eliminar la tarea '${title}'?`,
  //     icon: "question",
  //     showCancelButton: true,
  //   });

  //   if (takeResponse) dispatch(deleteTask(id));
  // };

  // const handleEditCardStatus = async (data) => {
  //   let takeResponse = await confirmAlert({
  //     title: `Estás seguro de que deseas cambiar el estado de la tarea '${data.title}'?`,
  //     icon: "question",
  //     showCancelButton: true,
  //   });

  //   if (takeResponse) dispatch(editCardStatus(data));
  // };

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
  const renderCards = (status) =>
    renderListTasks
      ?.filter((data) => data.status === `${status}`)
      .map((data) => (
        <Card
          key={data._id}
          data={data}
          actionsCard={handleActionsCard}
          // deleteCard={handleDeleteCart}
          // editCardStatus={handleEditCardStatus}
        />
      ))

  // const renderInProgressCards = () =>
  //   listTasks
  //     ?.filterProps((data) => data.status === "IN PROGRESS")
  //     .map((data) => <Card key={data.id} data={data} />);

  // const renderFinishedCards = () =>
  //   listTasks
  //     ?.filterProps((data) => data.status === "FINISHED")
  //     .map((data) => <Card key={data.id} data={data} />);

  const handleChangeRadioBtn = (e) => {
    setValueSelect("")
    setTasksFromWho(e.currentTarget.value)
  }

  // const handleSearchTitle = (e) => setSearchTitle(e.currentTarget.value);

  // Con debounce damos como un delay (retraso), para que cada vez que cmbiemos una letra del input no se llame al toque al sv, sino que despues de 1 seg se hará la llamada, asi damos tiempo de escribir mas en el input
  const handleSearchTitle = debounce((e) => {
    // console.log("e.target.value", e.target.value);
    setSearchTitle(e.target.value)
  }, 1000)

  const handleChangeImportance = (e) => {
    // console.log("e.currentTarget.value", e.currentTarget.value);
    if (e.currentTarget.value === "ALL") {
      setValueSelect(e.currentTarget.value)
      setRenderListTasks(listTasks)
    } else {
      setValueSelect(e.currentTarget.value)
      setRenderListTasks(listTasks.filter((data) => data.importance === e.currentTarget.value))
    }
  }

  // if (error) return <div>{error}</div>;

  // console.log("tasksFromWho", tasksFromWho);
  // console.log("renderListTasks", renderListTasks);
  // console.log("loadingTasks", loadingTasks);

  return (
    <>
      {/* <Header /> */}
      <main id="tasks">
        <TaskForm />
        <section className="wrapper_list">
          <div className="list_header">
            <div>Mis tareas</div>
          </div>
          <div className="filters">
            <FormControl>
              <RadioGroup row onChange={handleChangeRadioBtn} color="default" value={tasksFromWho}>
                <FormControlLabel value="ALL" control={<Radio />} label="Todas" disabled={listTasks?.length ? false : true} />
                <FormControlLabel value="MY" control={<Radio />} label="Mis tareas" disabled={renderListTasks?.length ? false : true} />
              </RadioGroup>
            </FormControl>
            <div>
              <div className="search">
                <input type="text" placeholder="Seleccionar por titulo..." onChange={handleSearchTitle} disabled={listTasks?.length ? false : true} />
              </div>

              {/* AÑADIR CONTROL A ESTE SELECT.. PARA QUE NO SE PUEDA SELECCIONAR "" */}
              <div className="select">
                <select
                  className="importance"
                  name="importance"
                  onChange={handleChangeImportance}
                  value={valueSelect}
                  disabled={renderListTasks?.length ? false : true}
                >
                  <option value="" disabled>
                    Seleccionar una prioridad
                  </option>
                  <option value="ALL">Todas</option>
                  <option value="LOW">Baja</option>
                  <option value="MEDIUM">Media</option>
                  <option value="HIGH">Alta</option>
                </select>
              </div>
            </div>
          </div>
          {error && error !== "error create" ? (
            <div className="error">
              <div>{error}</div>
            </div>
          ) : isPhone ? (
            loadingTasks ? (
              <SkeletonTheme baseColor="#d6d2d2" highlightColor="#594a4a" borderRadius="0.5rem" duration={4}>
                <div className="list phone">
                  <Skeleton count={3} height={80} />
                </div>
              </SkeletonTheme>
            ) : !renderListTasks?.length ? (
              <div>{searchTitle ? "No encontramos lo que buscaste" : "Aún no tienes tareas"}</div>
            ) : (
              <div className="list phone">{renderAllCards()}</div>
            )
          ) : (
            <div className="list_group">
              {loadingTasks ? (
                <SkeletonTheme baseColor="#d6d2d2" highlightColor="#594a4a" borderRadius="0.5rem" duration={4}>
                  <div className="list">
                    <Skeleton className="" count={1} height={150} width={"100%"} />
                  </div>
                  <div className="list">
                    <Skeleton className="" count={1} height={150} width={"100%"} />
                  </div>
                  <div className="list">
                    <Skeleton className="" count={1} height={150} width={"100%"} />
                  </div>
                </SkeletonTheme>
              ) : !renderListTasks?.length ? (
                <div>{searchTitle ? "No encontramos lo que buscaste" : "Aún no tienes tareas"}</div>
              ) : (
                <>
                  <div className="list">
                    <div>Nuevas</div>
                    {renderCards("NEW")}
                  </div>

                  <div className="list">
                    <div>En proceso</div>
                    {renderCards("IN PROGRESS")}
                  </div>

                  <div className="list">
                    <div>Finalizadas</div>
                    {renderCards("FINISHED")}
                  </div>
                </>
              )}
            </div>
          )}
        </section>
      </main>
    </>
  )
}

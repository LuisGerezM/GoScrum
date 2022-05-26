import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import Select from "components/Select/Select"
import { useTaskSelectData } from "hooks/useTasks/useTaskSelectData"

export const FilterCardsSection = ({
  handleChangeRadioBtn,
  tasksFromWho,
  listTasks,
  renderListTasks,
  handleSearchTitle,
  handleChangeImportance,
  valueSelect,
}) => {

    
    const { dataSelect } = useTaskSelectData()

  return (
    <div className="filters">
      <FormControl>
        <RadioGroup row onChange={handleChangeRadioBtn} color="default" value={tasksFromWho}>
          <FormControlLabel value="ALL" control={<Radio />} label="Todas" disabled={listTasks?.length ? false : true} />
          <FormControlLabel value="MY" control={<Radio />} label="Mis tareas" disabled={renderListTasks?.length ? false : true} />
        </RadioGroup>
      </FormControl>
      <div>
        <div className="search">
          <input
            className="input-form"
            type="text"
            placeholder="Seleccionar por titulo..."
            onChange={handleSearchTitle}
            disabled={listTasks?.length ? false : true}
          />
        </div>

        {/* AÑADIR CONTROL A ESTE SELECT.. PARA QUE NO SE PUEDA SELECCIONAR "" */}
        <Select
              nameClass="importance"
              dataOption={dataSelect?.importance}
              name="importance"
              values={valueSelect}
              txtDefaultOption="Seleccionar un estado"
              handleChange={handleChangeImportance}
              disabled={!renderListTasks?.length && true}
              ubication = 'filter'
            />
        {/* <div className="select">
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
        </div> */}
      </div>
    </div>
  )
}

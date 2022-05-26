import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import Input from "components/Input/Input"
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
        <Input
          nameClassDiv="search"
          nameClass="input-form"
          type="text"
          placeholder="Seleccionar por titulo..."
          handleChange={handleSearchTitle}
          disabled={listTasks?.length ? false : true}
        />
        <Select
          nameClass="importance"
          dataOption={dataSelect?.importance}
          name="importance"
          values={valueSelect}
          txtDefaultOption="Seleccionar un estado"
          handleChange={handleChangeImportance}
          disabled={!renderListTasks?.length && true}
          ubication="filter"
        />
      </div>
    </div>
  )
}

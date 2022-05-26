import Input from "components/Input/Input"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"
import Select from "components/Select/Select"
import { SkeletonLoading } from "../../SkeletonLoading/SkeletonLoading"
import { FooterForm } from "./FooterForm/FooterForm"
import { TextArea } from "./TextArea/TextArea"

export const TaskForm = ({ loadingTaskData, handleSubmit, touched, errors, handleChange, handleBlur, values, dataSelect, error, loadingTasks }) => {
  return (
    <>
      {loadingTasks === "CREATE" && <SpinnerLoad nameClass="tasks-create" />}
      <form onSubmit={handleSubmit}>
        {loadingTaskData ? (
          <SkeletonLoading width={559} />
        ) : (
          <>
            <div>
              <Input
                nameClass="input-form"
                name="title"
                type="text"
                placeholder="Titulo"
                values={values.title}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors.title}
              />
              <Select
                dataOption={dataSelect?.status}
                name="status"
                values={values.status}
                txtDefaultOption="Seleccionar un estado"
                touched={touched}
                errors={errors.status}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <Select
                nameClass="importance"
                dataOption={dataSelect?.importance}
                name="importance"
                values={values.importance}
                txtDefaultOption="Seleccionar un estado"
                touched={touched}
                errors={errors.importance}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <div>
              <TextArea
                name="description"
                values={values.description}
                touched={touched}
                errors={errors.description}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </div>
            <FooterForm error={error} loadingTasks={loadingTasks} />
          </>
        )}
      </form>
    </>
  )
}

// import { useEffect, useState } from "react"

// export const useEditTask = () => {
//   // console.log("initialValues useEditTask -->> ", initialValues)
//   // useEffect(() => {
//   //   if (initialValues?.status) {
//   //     console.log("initialValues tiene algo", initialValues)
//   //   } else console.log("initialValues.status es vacio")

//   //   return () => {
//   //     console.log("DESMONTANDO efecto useEditTask")
//   //   }
//   // }, [initialValues])

//   // const [editFormFields, setEditFormFields] = useState(false)
//   const [initialValues, setInitialValues] = useState({
//      _id: "",
//      title: "",
//      status: "",
//      importance: "",
//      description: "",
//      textForm: { title: "Crear", subtitle: "Crea" },
//    })
 


//   const handleEditValues = (dataEdit = null) => {
//     console.log("dataEdit en useCreateTaskSection -->> handleEditValues -->>", { dataEdit })
//     // console.log("dataEdit._id en useCreateTaskSection -->> handleEditValues -->>", dataEdit._id)

//     // formik.values.title = dataEdit.title
//     // formik.values.title = formik.setFieldValue("title", dataEdit.title)
//     // formik.setFieldValue("title", dataEdit.title)

//     // formik.setFieldValue("importance", "LOW")
//     // setLoadingEditForm(true)
//     // setEditFormFields(true)

//     // console.log("formik", formik)
//     // console.log("formik setFieldValue", formik.setFieldValue)
//     // console.log("formik values", formik.values)
//     // const e = { currentTarget: { value: "pruebita" } }
//     // handleChangeInput(e)

//     // ref.current.setFieldValue("title", 'probanding');
//     // console.log('input --->>', input)
//     // input.target.title.value = "probanding"
//     // console.log("formik.values ANTES en useCreateTaskSection -->> handleEditValues -->>", formik.values)
//     // formik.values._id = dataEdit._id
//     // formik.values.title = dataEdit.title
//     // formik.values.status = dataEdit.status
//     // formik.values.importance = dataEdit.importance
//     // formik.values.description = dataEdit.description

//     // formik.setFieldValue("_id", dataEdit._id)

//     // console.log('setFieldValue -->>', formik.setFieldValue)
//     // formik.setFieldValue("title", 'nuevo titulo')

//     // formik.setFieldValue("status", "NEW")

//     // formik.setFieldValue("title", dataEdit.title)
//     // formik.setFieldValue("status", dataEdit.status)
//     // formik.setFieldValue("importance", dataEdit.importance)
//     // formik.setFieldValue("description", dataEdit.description)

//     // setEditFieldValues({
//     //   _id: dataEdit._id,
//     //   title: dataEdit.title,
//     //   status: dataEdit.status,
//     //   importance: dataEdit.importance,
//     //   description: dataEdit.description,
//     //   textForm: { title: "Editar", subtitle: "edita" },
//     // })

//     // console.log("formik.values DESPUÉS en useCreateTaskSection -->> handleEditValues -->>", formik.values)
//     // setEditFormFields(true)

//     // setInitialValues({
//     //   _id: dataEdit._id,
//     //   title: dataEdit.title,
//     //   status: dataEdit.status,
//     //   importance: dataEdit.importance,
//     //   description: dataEdit.description,
//     //   textForm: { title: "Editar", subtitle: "Edita" },
//     // })
//   }
//  useEffect(() => {
//     if (editFormFields) {
//       console.log("editFormFields is true")
//       // const fields = ['title'];

//       // fields.forEach(field => formik.setFieldValue(field, 'prueba', false))
//       // // setUser(user);
//       // setInitialValues({...initialValues, title: 'pruebita'})
//       // setEditFormFields(false)
//       setTimeout(() => {
//         // setLoadingEditForm(false)
//       }, 500)
//     }

//     return () => {
//       console.log("DESMONTANDO Efect -->> editFormFields")
//     }
//   }, [editFormFields])

//   return {editFormFields, handleEditValues}
// }

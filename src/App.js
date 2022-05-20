import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Tasks } from "views/Tasks/Tasks"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"

import "./App.css"
import { Auth } from "views/Auth/Auth"

const Error404 = lazy(() => import("views/Error404/Error404"))

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token_user")) return <Navigate to="/login" replace={true} />
  return children
}

const pageTransition = {
  in: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
}

export const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/login"
          element={
            // <motion.div className="page" initial="out" animate="in" exit="out" transition={{ duration: 5 }} variants={pageTransition}>
            // <Login pageTransition={pageTransition} />
            <Auth pageTransition={pageTransition} />
            // </motion.div>
          }
        />
        <Route
          path="/register"
          element={
            <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
              {/* <Register pageTransition={pageTransition} /> */}
              <Auth pageTransition={pageTransition} />
            </motion.div>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              {/* <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}> */}
              <Tasks pageTransition={pageTransition} />
              {/* </motion.div> */}
            </RequireAuth>
          }
        />
        <Route
          path="*"
          element={
            <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
              <Suspense fallback={<SpinnerLoad />}>
                <Error404 pageTransition={pageTransition} />
              </Suspense>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

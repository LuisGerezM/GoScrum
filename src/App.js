import { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import { Login } from "components/views/auth/Login/Login"
import { Register } from "components/views/auth/Register/Register"
import { Tasks } from "components/views/Tasks/Tasks"
import SpinnerLoad from "components/Loading/SpinnerLoad/SpinnerLoad"

import "./App.css"

const Error404 = lazy(() => import("components/views/Error404/Error404"))

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token_user")) return <Navigate to="/login" replace={true} />
  return children
}

const pageTransition = { in: { opacity: 1 }, out: { opacity: 0 } }

export const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/login"
          element={
            <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
              <Login />
            </motion.div>
          }
        />
        <Route
          path="/register"
          element={
            <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
              <Register />
            </motion.div>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
                <Tasks />{" "}
              </motion.div>
            </RequireAuth>
          }
        />
        <Route
          path="*"
          element={
            <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
              <Suspense fallback={<SpinnerLoad />}>
                <Error404 />
              </Suspense>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

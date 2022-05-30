import { lazy, Suspense } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"

import { Tasks } from "views/Tasks/Tasks"
import { Auth } from "views/Auth/Auth"
import { Header } from "components/Header/Header"
import Donate from "views/Donate/Donate"
import { Registered } from "views/Registered/Registered"
import { utilTransition } from "utilities/utilTransition"

const Error404 = lazy(() => import("views/Error404/Error404"))

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token_user")) return <Navigate to="/login" replace={true} />
  return children
}

export const App = () => {
  const location = useLocation()
  const pageTransition = utilTransition("pageTransition")

  return (
    <AnimatePresence initial={false}>
      {localStorage.getItem("token_user") && (
        <motion.div className="page-header" initial="out" animate="in" exit="out" variants={pageTransition}>
          <Header />
        </motion.div>
      )}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
                <Tasks pageTransition={pageTransition} />
              </motion.div>
            </RequireAuth>
          }
        />
        <Route
          path="/donate"
          element={
            <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
              <Donate />
            </motion.div>
          }
        />

        <Route path="/login" element={<Auth pageTransition={pageTransition} />} />
        <Route path="/register" element={<Auth pageTransition={pageTransition} />} />

        <Route
          path="/registered/:teamID"
          element={
            <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
              <Registered />
            </motion.div>
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

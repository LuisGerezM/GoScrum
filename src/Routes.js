import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { motion } from "framer-motion"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"

import { Tasks } from "views/Tasks/Tasks"
import { Auth } from "views/Auth/Auth"
import Donate from "views/Donate/Donate"
import { Registered } from "views/Registered/Registered"

const Error404 = lazy(() => import("views/Error404/Error404"))

const MainRoutes = ({ RequireAuth, location, pageTransition }) => {
  return (
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
  )
}

export default MainRoutes

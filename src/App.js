import { lazy, Suspense } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"

import { Tasks } from "views/Tasks/Tasks"
import { Auth } from "views/Auth/Auth"
import { Header } from "components/Header/Header"
import Donate from "views/Donate/Donate"

const Error404 = lazy(() => import("views/Error404/Error404"))

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token_user")) return <Navigate to="/login" replace={true} />
  return children
}

const pageTransition = {
  in: { opacity: 1, transition: { duration: 0.7 } },
  out: { opacity: 0, transition: { duration: 0.7 } },
}

export const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      {localStorage.getItem("token_user") && (
        <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
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

        <Route
          path="/login"
          element={
            // <motion.div className="page" initial="out" animate="in" exit="out" transition={{ duration: 5 }} variants={pageTransition}>
            <Auth pageTransition={pageTransition} />
            // </motion.div> */}
          }
        />
        <Route
          path="/register"
          element={
            <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
              <Auth pageTransition={pageTransition} />
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

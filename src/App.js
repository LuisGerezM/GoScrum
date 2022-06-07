import { Suspense } from "react"
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"

import { Auth } from "views/Auth/Auth"
import { Header } from "components/Header/Header"
import { utilTransition } from "utilities/utilTransition"
import { routes } from "Routes"

const RequireAuth = ({ children }) => {
  const { teamID } = useParams()

  if (!teamID && !localStorage.getItem("token_user")) return <Navigate to="/login" replace={true} />
  return children
}

const pageTransition = utilTransition("pageTransition")

export const App = () => {
  const location = useLocation()
  console.log("location", { location })
  return (
    <AnimatePresence initial={false}>
      {localStorage.getItem("token_user") && (
        <motion.div className="page-header" initial="out" animate="in" exit="out" variants={pageTransition}>
          <Header />
        </motion.div>
      )}
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <RequireAuth>
                <motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}>
                  <Suspense fallback={<SpinnerLoad />}>{element}</Suspense>
                </motion.div>
              </RequireAuth>
            }
          />
        ))}

        <Route path="/login" element={<Auth pageTransition={pageTransition} />} />
        <Route path="/register" element={<Auth pageTransition={pageTransition} />} />
      </Routes>
    </AnimatePresence>
  )
}

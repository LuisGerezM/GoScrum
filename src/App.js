import { Navigate, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import { Header } from "components/Header/Header"

import { utilTransition } from "utilities/utilTransition"
import MainRoutes from "Routes"

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
      <MainRoutes RequireAuth={RequireAuth} location={location} pageTransition={pageTransition} />
    </AnimatePresence>
  )
}

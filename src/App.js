import { Navigate, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import { Header } from "components/Header/Header"

import { utilTransition } from "utilities/utilTransition"
import MainRoutes from "Routes"
import { MotionView } from "components/MotionView/MotionView"

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
        <MotionView>
          <Header />
        </MotionView>
      )}
      <MainRoutes RequireAuth={RequireAuth} location={location} pageTransition={pageTransition} />
    </AnimatePresence>
  )
}

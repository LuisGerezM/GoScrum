import { lazy, Suspense } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"

// import { Tasks } from "views/Tasks/Tasks"
import { Auth } from "views/Auth/Auth"
import { Header } from "components/Header/Header"
// import Donate from "views/Donate/Donate"
// import { Registered } from "views/Registered/Registered"
import { utilTransition } from "utilities/utilTransition"
import { routes } from "Routes"

// const Registered = lazy(() => import("views/Registered/Registered"))
// const Donate = lazy(() => import("views/Donate/Donate"))
// const Tasks = lazy(() => import("views/Tasks/Tasks"))
// const Error404 = lazy(() => import("views/Error404/Error404"))

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("token_user")) return <Navigate to="/login" replace={true} />
  return children
}

const pageTransition = utilTransition("pageTransition")
// const routes = [
//   {
//     path: "/",
//     element: <Tasks pageTransition={pageTransition} />,
//   },
//   {
//     path: "/donate",
//     element: <Donate pageTransition={pageTransition} />,
//   },
//   {
//     path: "/registered/:teamID",
//     element: <Registered pageTransition={pageTransition} />,
//   },
//   {
//     path: "*",
//     element: <Error404 pageTransition={pageTransition} />,
//   },
// ]

export const App = () => {
  const location = useLocation()

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

import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { SpinnerLoad } from "components/Loading/SpinnerLoad/SpinnerLoad"

import { Tasks } from "views/Tasks/Tasks"
import { Auth } from "views/Auth/Auth"
import Donate from "views/Donate/Donate"
import { Registered } from "views/Registered/Registered"
import { MotionView } from "components/MotionView/MotionView"

const Error404 = lazy(() => import("views/Error404/Error404"))

const MainRoutes = ({ RequireAuth, location, pageTransition }) => {
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <RequireAuth>
            <MotionView>
              <Tasks pageTransition={pageTransition} />
            </MotionView>
          </RequireAuth>
        }
      />
      <Route
        path="/donate"
        element={
          <MotionView>
            <Donate />
          </MotionView>
        }
      />

      <Route path="/login" element={<Auth pageTransition={pageTransition} />} />
      <Route path="/register" element={<Auth pageTransition={pageTransition} />} />

      <Route
        path="/registered/:teamID"
        element={
          <MotionView>
            <Registered />
          </MotionView>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<SpinnerLoad />}>
            <MotionView>
              <Error404 pageTransition={pageTransition} />
            </MotionView>
          </Suspense>
        }
      />
    </Routes>
  )
}

export default MainRoutes

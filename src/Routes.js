import { lazy } from "react"
import { utilTransition } from "utilities/utilTransition"

const Registered = lazy(() => import("views/Registered/Registered"))
const Donate = lazy(() => import("views/Donate/Donate"))
const Tasks = lazy(() => import("views/Tasks/Tasks"))
const Error404 = lazy(() => import("views/Error404/Error404"))

const pageTransition = utilTransition("pageTransition")
export const routes = [
  {
    path: "/",
    element: <Tasks pageTransition={pageTransition} />,
  },
  {
    path: "/donate",
    element: <Donate pageTransition={pageTransition} />,
  },
  {
    path: "/registered/:teamID",
    element: <Registered pageTransition={pageTransition} />,
  },
  {
    path: "*",
    element: <Error404 pageTransition={pageTransition} />,
  },
]

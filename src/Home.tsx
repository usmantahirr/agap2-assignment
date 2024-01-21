import { lazy, ReactNode } from "react"
import { Outlet } from "react-router-dom"
import withSuspense from "./utils/withSuspense"
import Template from "./shared/Template"

const ShowDetails = lazy(() => import("./containers/ShowDetails"))

const Home = (): ReactNode => {
  return (
    <Template>
      {withSuspense(ShowDetails)}
      <Outlet />
    </Template>
  )
}

export default Home

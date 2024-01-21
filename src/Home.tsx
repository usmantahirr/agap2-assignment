import { lazy, ReactNode } from "react"
import { Outlet } from "react-router-dom"
import withSuspense from "./utils/withSuspense.tsx"
import Template from "./shared/Template.tsx"

const ShowDetails = lazy(() => import("./containers/ShowDetails.tsx"))

const Home = (): ReactNode => {
  return (
    <Template>
      {withSuspense(ShowDetails)}
      <Outlet />
    </Template>
  )
}

export default Home

import { lazy } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import withSuspense from "./utils/withSuspense"

const Home = lazy(() => import("./Home"))
const EpisodeListContainer = lazy(() => import("./containers/EpisodeList"))
const EpisodeDetailsContainer = lazy(() => import("./containers/EpisodeDetails"))
const ErrorPage = lazy(() => import("./shared/ErrorPage"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={withSuspense(Home)}>
          <Route index element={withSuspense(EpisodeListContainer)} />
          <Route path="/episode/:id" element={withSuspense(EpisodeDetailsContainer)} />
        </Route>
        <Route path="*" element={<ErrorPage message="Path not found" />} />
      </Routes>
    </Router>
  )
}

export default App

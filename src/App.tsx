import { lazy } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import withSuspense from "./utils/withSuspense.tsx"

const Home = lazy(() => import("./Home.tsx"))
const EpisodeListContainer = lazy(() => import("./containers/EpisodeList.tsx"))
const EpisodeDetailsContainer = lazy(() => import("./containers/EpisodeDetails.tsx"))
const ErrorPage = lazy(() => import("./shared/ErrorPage.tsx"))

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

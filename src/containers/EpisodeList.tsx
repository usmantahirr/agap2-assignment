import type { ReactNode } from "react"
import { Link } from "react-router-dom"

const EpisodeListContainer = (): ReactNode => {
  return (
    <div>
      Episode List goes here <Link to="/episode/123">123</Link>{" "}
    </div>
  )
}

export default EpisodeListContainer

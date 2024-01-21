import type { ReactNode } from "react"
import { Link, useParams } from "react-router-dom"

const EpisodeDetailsContainer = (): ReactNode => {
  const { id } = useParams()

  return (
    <div>
      <Link to="/">Home</Link>
      Episode {id}
    </div>
  )
}

export default EpisodeDetailsContainer

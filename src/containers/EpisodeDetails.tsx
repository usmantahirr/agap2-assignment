import { ReactNode, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector.ts"
import { fetchEpisodeDetails } from "../state/episode.ts"
import Loading from "../shared/Loading.tsx"
import ErrorPage from "../shared/ErrorPage.tsx"
import EpisodeDetails from "../shared/EpisodeDetails"

const EpisodeDetailsContainer = (): ReactNode => {
  const { id } = useParams()
  const { data, loading, error } = useAppSelector((state) => state.episode)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchEpisodeDetails(id))
    }
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorPage local message={error} />
  }

  if (!id) {
    return <ErrorPage local message="Episode Id Undefined" />
  }

  if (!data) {
    return <ErrorPage local message="Episode not found" />
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <EpisodeDetails episode={data} />
    </div>
  )
}

export default EpisodeDetailsContainer

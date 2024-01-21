import { ReactNode, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector.ts"
import { fetchEpisodeDetails } from "../state/episode.ts"
import Loading from "../shared/Loading"
import ErrorPage from "../shared/ErrorPage"
import EpisodeDetails from "../shared/EpisodeDetails"

const EpisodeDetailsContainer = (): ReactNode => {
  const { id } = useParams()
  const { data, loading, error } = useAppSelector((state) => state.episode)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchEpisodeDetails(id))
    }
  }, [dispatch, id])

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

  return <EpisodeDetails episode={data} />
}

export default EpisodeDetailsContainer

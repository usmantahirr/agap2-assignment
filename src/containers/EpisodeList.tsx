import { ReactNode, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector"
import { fetchEpisodeList } from "../state/show/actions"
import Loading from "../shared/Loading"
import ErrorPage from "../shared/ErrorPage"
import EpisodeList from "../shared/EpisodeList"

const EpisodeListContainer = (): ReactNode => {
  const { episodeList, loading, error } = useAppSelector((state) => state.show)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchEpisodeList())
  }, [dispatch])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorPage local message={error} />
  }

  if (!episodeList) {
    return <ErrorPage local message="Episode List not found" />
  }

  return <EpisodeList episodes={episodeList} />
}

export default EpisodeListContainer

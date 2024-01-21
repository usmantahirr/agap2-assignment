import { ReactNode, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector.ts"
import { fetchEpisodeList } from "../state/show/actions.ts"
import Loading from "../shared/Loading.tsx"
import ErrorPage from "../shared/ErrorPage.tsx"
import EpisodeList from "../shared/EpisodeList"

const EpisodeListContainer = (): ReactNode => {
  const { episodeList, loading, error } = useAppSelector((state) => state.show)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchEpisodeList())
  }, [])

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

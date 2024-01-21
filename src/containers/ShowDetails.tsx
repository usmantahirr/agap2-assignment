import { ReactNode, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector"
import { fetchShowDetails } from "../state/show/actions.ts"
import ShowDetails from "../shared/ShowDetails"
import ErrorPage from "../shared/ErrorPage"
import Loading from "../shared/Loading"

const ShowDetailsContainer = (): ReactNode => {
  const { data, loading, error } = useAppSelector((state) => state.show)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchShowDetails())
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorPage local message={error} />
  }

  if (!data) {
    return <ErrorPage local message="Data not found" />
  }

  return <ShowDetails show={data} />
}

export default ShowDetailsContainer

import { ReactNode } from "react"
import { PartialShow } from "../../types/Show.ts"

const ShowDetails = ({ show }: { show: PartialShow }): ReactNode => {
  return <div>{show.name}</div>
}

export default ShowDetails

import { ReactNode } from "react"
import { PartialShow } from "../../types/Show"
import ImageCard from "../ImageCard"
import textToHtml from "../../utils/textToHtml"

const ShowDetails = ({ show }: { show: PartialShow }): ReactNode => {
  return <ImageCard data={show}>{show.summary && textToHtml(show.summary)}</ImageCard>
}

export default ShowDetails

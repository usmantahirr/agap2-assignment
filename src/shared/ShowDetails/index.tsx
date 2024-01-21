import { ReactNode } from "react"
import { PartialShow } from "../../types/Show.ts"
import ImageCard from "../ImageCard.tsx"
import textToHtml from "../../utils/textToHtml.tsx"

const ShowDetails = ({ show }: { show: PartialShow }): ReactNode => {
  return <ImageCard data={show}>{show.summary && textToHtml(show.summary)}</ImageCard>
}

export default ShowDetails

import { ReactNode } from "react"
import { EpisodeBySeason } from "../../types/Episode.ts"

const EpisodeDetails = ({ episode }: { episode: EpisodeBySeason }): ReactNode => {
  console.log(episode)
  return <div>Episode Details comes here</div>
}

export default EpisodeDetails

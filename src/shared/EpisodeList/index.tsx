import { ReactNode } from "react"
import { EpisodeBySeason } from "../../types/Episode.ts"

const EpisodeList = ({ episodes }: { episodes: EpisodeBySeason }): ReactNode => {
  console.log(episodes)
  return <div>Episode List</div>
}

export default EpisodeList

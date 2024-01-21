import type { PartialShow } from "../types/Show.ts"
import { EpisodeBySeason, PartialEpisode } from "../types/Episode.ts"

export interface State {
  loading: boolean
  data: PartialShow | PartialEpisode | null
  episodeList?: EpisodeBySeason
  error?: string
}

export const initialState: State = {
  loading: false,
  data: null,
}

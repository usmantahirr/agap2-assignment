import type { PartialShow } from "../types/Show"
import { EpisodeBySeason, PartialEpisode } from "../types/Episode"

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

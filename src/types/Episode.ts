import { Image, Links } from "./index.ts"

export type Episode = {
  id: number
  url: string
  name: string
  season: number
  number: number
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  image: Image
  summary: string
  _links: Links
}

export type PartialEpisode = Pick<Episode, "name" | "image" | "summary">

export type EpisodeBySeason = {
  [key: number]: Episode[]
}

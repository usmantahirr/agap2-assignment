import type { Externals, Image, Links, Network, Rating, Schedule } from "./"

export type Show = {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  premiered: string
  officialSite: string
  schedule: Schedule
  rating: Rating
  weight: number
  network: Network
  webChannel: string | null
  externals: Externals
  image: Image
  summary: string
  updated: number
  _links: Links
}

export type PartialShow = Pick<Show, "name" | "image" | "summary">

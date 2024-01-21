import { AxiosError } from "axios"

export type Schedule = {
  time: string
  days: string[]
}

export type Rating = {
  average: number
}

export type Country = {
  name: string
  code: string
  timezone: string
}

export type Network = {
  id: number
  names: string
  country: Country
}

export type Externals = {
  tvrage: number
  thetvdb: number
  imdb: string
}

export type Image = {
  medium: string
  original: string
}

type Link = {
  href: string
}

export type Links = {
  self?: Link
  previousepisode?: Link
  show?: Link
  character?: Link
}

export function isAxiosError(error: unknown): error is AxiosError {
  return error instanceof AxiosError
}

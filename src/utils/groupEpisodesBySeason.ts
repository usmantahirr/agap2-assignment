import type { Episode, EpisodeBySeason } from "../types/Episode"

export default function groupEpisodesBySeason(episodes: Episode[]): EpisodeBySeason {
  return episodes.reduce((acc: EpisodeBySeason, episode) => {
    const { season } = episode

    // Check if the season key exists in the accumulator object
    if (!acc[season - 1]) {
      // If not, create an array for the season key
      acc[season - 1] = []
    }

    // Push the current episode to the array of the corresponding season
    acc[season - 1].push(episode)

    return acc
  }, [])
}

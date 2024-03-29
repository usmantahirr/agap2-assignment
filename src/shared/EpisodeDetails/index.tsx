import { Fragment, ReactNode } from "react"
import { Link } from "react-router-dom"
import { Breadcrumbs, Typography } from "@mui/material"
import styled from "@emotion/styled"
import ImageCard from "../ImageCard"
import textToHtml from "../../utils/textToHtml"
import type { PartialEpisode } from "../../types/Episode"

const StyledBreadcrumbs = styled(Breadcrumbs)`
  background: white;
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`
const EpisodeDetails = ({ episode }: { episode: PartialEpisode }): ReactNode => (
  <Fragment>
    <StyledBreadcrumbs>
      <Link color="inherit" to="/">
        <Typography>Episode List</Typography>
      </Link>
      <Typography>{episode.name}</Typography>
    </StyledBreadcrumbs>
    <ImageCard data={episode}>{episode.summary && textToHtml(episode.summary)}</ImageCard>
  </Fragment>
)

export default EpisodeDetails

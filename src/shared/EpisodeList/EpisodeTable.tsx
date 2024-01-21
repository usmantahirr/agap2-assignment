import type { MouseEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Avatar, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import styled from "@emotion/styled"
import Face3Icon from "@mui/icons-material/Face3"
import VisibilityIcon from "@mui/icons-material/Visibility"
import type { Episode } from "../../types/Episode"

const CellNoBorder = styled(TableCell)`
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
`

const EpisodeTable = ({ data }: { data: Episode[] }) => {
  const navigate = useNavigate()

  return (
    <Table aria-label="Episode List" size="small">
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Banner</TableCell>
          <TableCell align="right">CTA</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((episode) => (
          <TableRow key={episode.id}>
            <CellNoBorder>{episode.number}</CellNoBorder>
            <CellNoBorder>{new Date(episode.airstamp).toDateString()}</CellNoBorder>
            <CellNoBorder>{episode.name}</CellNoBorder>
            <CellNoBorder>
              {episode.image && episode.image.medium ? (
                <Avatar variant="rounded" src={episode.image.medium} />
              ) : (
                <Avatar variant="rounded">
                  <Face3Icon />
                </Avatar>
              )}
            </CellNoBorder>
            <CellNoBorder align="right">
              <IconButton
                size="small"
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault()
                  navigate(`/episode/${episode.id}`)
                }}
              >
                <VisibilityIcon />
              </IconButton>
            </CellNoBorder>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default EpisodeTable

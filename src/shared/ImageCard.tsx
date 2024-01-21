import type { ReactNode } from "react"
import styled from "@emotion/styled"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import type { PartialEpisode } from "../types/Episode"
import type { PartialShow } from "../types/Show"

type PropTypes = {
  data: PartialShow | PartialEpisode
  children: ReactNode
}

const StyledCard = styled(Card)`
  display: flex;
  margin-top: 20px;
`

const ContentContainer = styled(Box)`
  flex-direction: "column";
`

const Content = styled(CardContent)`
  flex: "1 0 auto";
`

const ImageCard = ({ data, children }: PropTypes) => {
  return (
    <StyledCard>
      {data.image && data.image.medium && (
        <CardMedia component="img" sx={{ width: 151 }} image={data.image.medium} alt="Live from space album cover" />
      )}

      <ContentContainer>
        <Content>
          <Typography component="div" variant="h5">
            {data.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {children}
          </Typography>
        </Content>
      </ContentContainer>
    </StyledCard>
  )
}

export default ImageCard

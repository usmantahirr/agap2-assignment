import { ReactNode, useState } from "react"
import { Tab, Tabs, Box } from "@mui/material"
import styled from "@emotion/styled"
import TabPanel from "../TabPanel"
import type { EpisodeBySeason } from "../../types/Episode"
import EpisodeTable from "./EpisodeTable"

const StyledTabs = styled(Tabs)`
  margin: 20px 0 0 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`

const ContentContainer = styled(Box)`
  background: white;
  margin-bottom: 20px;
`

const EpisodeList = ({ episodes }: { episodes: EpisodeBySeason }): ReactNode => {
  const [activeSeason, setActiveSeason] = useState<number>(1)

  function handleTabChange(event: React.SyntheticEvent, s: number) {
    event.preventDefault()
    setActiveSeason(s)
  }

  return (
    <ContentContainer>
      <StyledTabs value={activeSeason} onChange={handleTabChange} aria-label="Episodes by Seasons">
        {Object.keys(episodes).map((seasonNumber: string) => (
          <Tab key={seasonNumber} label={`Season ${parseInt(seasonNumber) + 1}`} />
        ))}
      </StyledTabs>
      {Object.entries(episodes).map(([season, episodes]) => (
        <TabPanel key={season} value={activeSeason} index={parseInt(season)}>
          <EpisodeTable key={season} data={episodes} />
        </TabPanel>
      ))}
    </ContentContainer>
  )
}

export default EpisodeList

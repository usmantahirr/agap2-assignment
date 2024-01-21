import type { ReactNode } from "react"
import { CircularProgress } from "@mui/material"
import { CenteredBox } from "./"
import Template from "./Template"

const Loading = ({ local = false }: { local?: boolean }): ReactNode => {
  const spinner = (
    <CenteredBox>
      <CircularProgress />
    </CenteredBox>
  )

  if (local) return spinner
  return <Template>{spinner}</Template>
}

export default Loading

import type { ReactNode } from "react"
import { CircularProgress } from "@mui/material"
import { CenteredBox } from "./index.ts"
import Template from "./Template.tsx"

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

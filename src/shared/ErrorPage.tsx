import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Alert, Button } from "@mui/material"
import styled from "@emotion/styled"
import Template from "./Template.tsx"

interface ErrorPageProps {
  message?: string
  local?: boolean
}

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

const ErrorContainer = styled.div`
  margin: 20px 0;
`

const ErrorPage = ({ message = "Not Found", local = false }: ErrorPageProps): ReactNode => {
  const errorMessage = (
    <ErrorContainer>
      <Alert severity="error">{message}</Alert>
    </ErrorContainer>
  )

  if (local) {
    return errorMessage
  }
  return (
    <Template>
      {errorMessage}
      <NavLink to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
    </Template>
  )
}

export default ErrorPage

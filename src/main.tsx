import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { Provider } from "react-redux"
import { store } from "./state/store"

import App from "./App.tsx"
import theme from "./theme"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)

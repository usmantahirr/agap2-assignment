import { configureStore } from "@reduxjs/toolkit"
import showReducer from "./show/slice.ts"
import episodeReducer from "./episode.ts"

export const store = configureStore({
  reducer: {
    show: showReducer,
    episode: episodeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

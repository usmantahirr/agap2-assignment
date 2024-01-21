import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState, State } from "../state"
import { fetchShowDetails, fetchEpisodeList } from "./actions"
import type { PartialShow } from "../../types/Show"
import type { EpisodeBySeason } from "../../types/Episode"

const slice = createSlice({
  name: "show",
  initialState,
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<State>) {
    builder
      .addCase(fetchShowDetails.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchShowDetails.fulfilled, (state, action: PayloadAction<PartialShow>) => {
        state.loading = false
        state.data = action.payload
        state.error = undefined
      })
    builder.addCase(fetchShowDetails.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })

    builder
      .addCase(fetchEpisodeList.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchEpisodeList.fulfilled, (state, action: PayloadAction<EpisodeBySeason>) => {
        state.loading = false
        state.episodeList = action.payload
        state.error = undefined
      })
    builder.addCase(fetchEpisodeList.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })
  },
})

export default slice.reducer

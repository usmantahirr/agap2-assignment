import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "../utils/axios"
import { isAxiosError } from "../types"
import type { PartialEpisode } from "../types/Episode"
import { initialState, State } from "./state"

const episode = createSlice({
  name: "episodeList",
  initialState,
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<Omit<State, "episodeList">>) {
    builder
      .addCase(fetchEpisodeDetails.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchEpisodeDetails.fulfilled, (state, action: PayloadAction<PartialEpisode>) => {
        state.loading = false
        state.data = action.payload
        state.error = undefined
      })
    builder.addCase(fetchEpisodeDetails.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload as string
    })
  },
})

export const fetchEpisodeDetails = createAsyncThunk<PartialEpisode, string>(
  "show/fetchEpisodeList",
  async (episodeId, thunkAPI) => {
    try {
      const response = await axios.get<PartialEpisode>(`episodes/${episodeId}`)
      return response.data
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.message)
      } else {
        return thunkAPI.rejectWithValue(error)
      }
    }
  },
)

export default episode.reducer

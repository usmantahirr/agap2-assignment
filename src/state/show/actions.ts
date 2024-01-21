import { createAsyncThunk } from "@reduxjs/toolkit"
import type { PartialShow } from "../../types/Show"
import { isAxiosError } from "../../types"
import type { Episode, EpisodeBySeason } from "../../types/Episode"
import axios, { SHOW_ID } from "../../utils/axios"
import groupEpisodesBySeason from "../../utils/groupEpisodesBySeason"

export const fetchShowDetails = createAsyncThunk<PartialShow>("show/fetchShowDetails", async (_data, thunkAPI) => {
  try {
    const response = await axios.get<PartialShow>(`shows/${SHOW_ID}`)
    return response.data
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message)
    } else {
      return thunkAPI.rejectWithValue(error)
    }
  }
})

export const fetchEpisodeList = createAsyncThunk<EpisodeBySeason>("show/fetchEpisodeList", async (_data, thunkAPI) => {
  try {
    const response = await axios.get<Episode[]>(`shows/${SHOW_ID}/episodes`)
    return groupEpisodesBySeason(response.data)
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.message)
    } else {
      return thunkAPI.rejectWithValue(error)
    }
  }
})

import Axios from "axios"

// our global Axios instance including the base URL
const axios = Axios.create({
  baseURL: "https://api.tvmaze.com/",
})

export const SHOW_ID = 6771

export default axios

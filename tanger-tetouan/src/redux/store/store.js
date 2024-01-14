import {configureStore} from "@reduxjs/toolkit"
import stagiareSlice from "../StagiareSlice.js";


export const store = configureStore({
  reducer : {
    stagiares : stagiareSlice
  }
})

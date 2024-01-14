import {createSlice} from "@reduxjs/toolkit";


const stagiareSlice = createSlice({
  name: "stagiares",
  initialState : [],
  reducers :{
    addStagiare : (state , action) =>
    {
      state.push(action.payload);
    }
  }
})

export default stagiareSlice.reducer
export const {addStagiare} = stagiareSlice.actions

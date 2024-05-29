import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    currentUser:null,
    loading: false,
    error: null,
  },
  reducers: {
    signInStart: (state) => {
      state.loading = true
      state.error=null;
    },
    signInSuccess: (state, action) => {
      state.loading = false
      state.currentUser = action.payload
      state.error=null;
    },
    signInFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions

export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import {setItem} from '../helpers/persisteance-storage'
const initialState = { 
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
}
export const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers: {
    signUserStart: state => {
			state.isLoading = true
		},
		signUserSuccess: (state, action) => {
			state.loggedIn = true
			state.isLoading = false
			state.user = action.payload
	    setItem('token', action.payload.token)
		},
		signUserFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		logoutUSer: state => {
			state.user = null
			state.loggedIn = false
		}
  } 
})
export const {signUserFailure, signUserStart, signUserSuccess , logoutUSer} = authSlice.actions
export default authSlice.reducer
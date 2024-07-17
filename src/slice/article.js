import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error: null,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getArticlesStart: state => {
      state.isLoading = true
    },
    getArticlesSucces: (state, action) =>{
      state.articles = action.payload
      state.isLoading = false
    },
    getArticlesFailure: (state, action) => {
      state.error = action.payload
    }
  },
})

export const {getArticlesStart, getArticlesSucces} = articleSlice.actions
export default articleSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
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
      state.isLoading = false
    },
    getArticleDetailStart: state => {
      state.isLoading = true
    },
    getArticleDetailSucces: (state, action) => {
      state.isLoading = false
      state.articleDetail = action.payload
    },
    getArticleDetailFailure: (state, action) => {
      state.isLoading = false
    },
    postArticleStart: state => {
			state.isLoading = true
		},
		postArticleSuccess: state => {
			state.isLoading = false
		},
		postArticleFailure: state => {
			state.isLoading = false
			state.error = 'Error'
		},
  },
})

export const {getArticlesStart, getArticlesSucces,getArticlesFailure,getArticleDetailStart,getArticleDetailSucces,getArticleDetailFailure,postArticleFailure,postArticleStart,postArticleSuccess} = articleSlice.actions
export default articleSlice.reducer
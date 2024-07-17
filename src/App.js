
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register, Login, Main, Navbar } from './components'
import { useDispatch } from 'react-redux'
import { getItem } from './helpers/persisteance-storage'
import AuthService from './service/auth'
import { signUserSuccess } from './slice/auth'
import articleService from './service/article'
import { getArticlesStart, getArticlesSucces } from './slice/article'
const App = () => {
  const dispatch = useDispatch()

  const getArticles = async() =>{
    dispatch(getArticlesStart())
    try {
      const response = await articleService.getArticles()
      dispatch(getArticlesSucces(response.articles))
    } catch (error) {
      console.log(error);
    }
  }
  const getUser = async() => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))

    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(() => {
    const token = getItem('token')
		if (token) {
			getUser()}
    getArticles()
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Main/>} />
        <Route path = '/login' element={<Login/>}/>
        <Route path='/register' element = {<Register/>} />
      </Routes>
    </div>
  )
}

export default App

import  { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Register, Login, Main, Navbar, ArticleDetail, CreateArticle , EditArticle} from './components'
import { useDispatch } from 'react-redux'
import { getItem } from './helpers/persisteance-storage'
import AuthService from './service/auth'
import { signUserSuccess } from './slice/auth'

const App = () => {
  const dispatch = useDispatch()


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
    
  }, [])
  return (
    <div>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path = '/' element={<Main/>} />
        <Route path = '/login' element={<Login/>}/>
        <Route path='/register' element = {<Register/>} />
        <Route path='/article/:slug' element = {<ArticleDetail />} />
        <Route path='/create-article' element = {<CreateArticle />} />
        <Route path='/edit-article/:slug' element={<EditArticle />} />
      </Routes>
      </div>
    
    </div>
  )
}

export default App
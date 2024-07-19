import { useDispatch, useSelector } from "react-redux"
import { Loader } from "../ui/index"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import ArticleService from '../../service/article'
import { getArticlesStart, getArticlesSucces } from '../../slice/article'
import articleService from "../../service/article"

const Main = () => {
  const navigate = useNavigate()
  const {articles,isLoading} = useSelector(state => state.article)
  const {loggedIn, user} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const getArticles = async() =>{
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticlesSucces(response.articles))
    } catch (error) {
      console.log(error);
    }
  }
  const deleteArticle = async(slug) => {
    try {
      await articleService.deleteArticle(slug)
      getArticles()
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getArticles()
  }, [])
  return (
    <>
      {isLoading && <Loader />}
      <div class="album py-5 bg-body-tertiary">
    <div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {articles.map(item => (
            <div class="col" key={item.id}>
            <div class="card h-100 shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect> </svg>
              <div class="card-body">
                <p class="card-text fw-bold">{item.title}</p>
                <p class="card-text  m-0">{item.description}</p>
            
              </div>
              <div class="d-flex card-footer justify-content-between align-items-center">
                  <div class="btn-group">
                    <button onClick={() => navigate(`/article/${item.slug}`)} type="button" class="btn btn-sm btn-outline-success">View</button>
                    {loggedIn && user.username === item.author.username && (
                      <>
                           <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => navigate(`/edit-article/${item.slug}`)}>Edit</button>
                           <button type="button" class="btn btn-sm btn-outline-danger" onClick={() => deleteArticle(item.slug)}>Delete</button>
                      </>
                    
                    )}
                   
                  </div>
                  <small class="text-body-secondary fw-bold">{item.author.username}</small>
                </div>
            </div>
          </div>
      ))}
      
      </div>
    </div>
  </div></>
  )
}

export default Main
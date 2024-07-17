import axios from "./api"
const articleService = {
  async getArticles(){
    const {data} = await axios.get('/articles')
    return data
  }
}

export default articleService
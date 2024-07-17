import axios from "axios";
import { getItem} from "../helpers/persisteance-storage";

axios.defaults.baseURL ='https://api.realworld.io/api'

axios.interceptors.request.use(config => {

  const token = getItem('token')
  console.log(token);
  const authorization = token ? `Token ${token}` : ''
  config.headers.Authorization = authorization
  return config
})

export default axios
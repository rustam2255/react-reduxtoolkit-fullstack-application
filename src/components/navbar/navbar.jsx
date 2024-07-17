import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {removeItem} from "../../helpers/persisteance-storage"
import { useDispatch } from "react-redux"
import { logoutUSer } from "../../slice/auth"
const Navbar = () => {
  const {loggedIn, user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const logoutHandler = () => {
    removeItem('token')
    navigate('/login')
    dispatch(logoutUSer())
  }
  
  return (
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to = {'/'}>
        <img src="https://i.pinimg.com/originals/f0/d7/02/f0d7020a05d8739a33329948b6ba7886.png" width={100} height={50} alt="Logo" />
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className="me-3 py-2 m-0 text-dark text-decoration-none">{user.username}</p>
            <button className="btn btn-outline-danger" onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link className="me-3 py-2 text-dark text-decoration-none" to={'/login'}>Login</Link>
            <Link className="me-3 py-2 text-dark text-decoration-none" to={'/register'}>Register</Link>
          </>
        )}
       
      </nav>
    </div>
  )
}

export default Navbar
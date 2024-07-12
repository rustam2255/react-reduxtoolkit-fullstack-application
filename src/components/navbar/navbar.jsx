import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const Navbar = () => {
  const {loggedIn, user} = useSelector(state => state.auth)
  return (
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to = {'/'}>
        <img src="https://i.pinimg.com/originals/f0/d7/02/f0d7020a05d8739a33329948b6ba7886.png" width={100} height={50} alt="Logo" />
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className="me-3 py-2 m-0 text-dark text-decoration-none">{user.username}</p>
            <button className="btn btn-outline-danger">Logout</button>
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
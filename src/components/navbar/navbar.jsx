import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to = {'/'}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/533/663/small/r-paint-brush-letter-logo-design-with-artistic-brush-stroke-in-black-and-purple-colors-vector.jpg" width={100} height={50} alt="Logo" />
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link className="me-3 py-2 text-dark text-decoration-none" to={'/login'}>Login</Link>
        <Link className="me-3 py-2 text-dark text-decoration-none" to={'/register'}>Register</Link>
      </nav>
    </div>
  )
}

export default Navbar
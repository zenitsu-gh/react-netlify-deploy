import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/features'>Features</Link>
      <Link to='/skills'>Skills</Link>
    </div>
  )
}

export default Navbar

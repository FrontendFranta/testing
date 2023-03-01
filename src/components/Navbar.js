import {NavLink} from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
        <a class="navbar-brand" href="#">Frantik</a>
        <div class="navbar-nav">
        <a class="nav-link"><NavLink to="/testing" className={({isActive})=>
    isActive ? "activeLink": "nonactiveLink"
    }>Domů</NavLink></a>
        <a class="nav-link"><NavLink to="/Skills" className={({isActive})=>
    isActive ? "activeLink": "nonactiveLink"
    }>Dovednosti</NavLink></a>

<a class="nav-link"><NavLink to="/Contact" className={({isActive})=>
    isActive ? "activeLink": "nonactiveLink"
    }>Kontakt</NavLink></a>
    </div>
    </div>
  </nav>
  )
}

export default Navbar


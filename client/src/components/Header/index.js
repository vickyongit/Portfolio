import { Link } from 'react-scroll'
import { useLocation } from 'react-router-dom'

import './index.css'

const navLinkItems = ['Home', 'About', 'My Portfolio','Skills', 'My Service','Contact']

const Header = () => {
  const location = useLocation()

  const isHomePage = location.hash === '/' || location.hash === ''
  return (
    <div className={`header ${isHomePage ? '' : 'fixed-header'}`}>
      <nav className="navbar">
        <ul className="nav-link-ul">
          {navLinkItems.map((each, index) => (
            <Link
              key={index}
              spy={true}
              to={each.toLowerCase()}
              smooth={true}
              duration={400}
              offset={-60}
              isDynamic={true}
              className="link-element"
            >
              <li className="nav-link-item">{each}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
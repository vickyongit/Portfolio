import { Link } from 'react-scroll'
import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from 'react';

import './index.css'

const navLinkItems = ['Home', 'About', 'My Portfolio','Skills', 'My Service','Contact']

const Header = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [viewOptions, setOptionBtn] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.4, // Adjust based on when you want the header to fix
      }
    )

    const heroSection = document.getElementById('home')
    if (heroSection) {
      observer.observe(heroSection)
    }

    return () => {
      if (heroSection) observer.unobserve(heroSection)
    }
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOptionBtn(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [])

  const toggleOptions = () => {
    setOptionBtn(prevVal => !prevVal)
  }

  return (
    <>
    <div className={`header ${isHeroVisible ? '' : 'fixed-header'}`}>
      <nav className="navbar">
      <h1 className='logo'>BK.</h1>
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
        <div className='nav-mobile-option-btn-container'>
          <RxHamburgerMenu className='nav-options-btn-mobile' onClick={toggleOptions}/>
        </div>
      </nav>
    </div>
    <div ref={menuRef}  className={`mobile-view-options-container ${viewOptions ? 'view-option-mobile': ''}`}>
    <ul className='mobile-nav-options-ul'>
    {navLinkItems.map((each, index) => (
      <>
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
              <li className="nav-mobile-link-item" onClick={toggleOptions}>{each} </li>
            </Link> 

            </>
          ))}

        </ul>
        </div>

    </>
  )
}

export default Header
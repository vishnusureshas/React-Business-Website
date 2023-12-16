import React,{useState,useEffect} from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'
import Logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  // Mobile menu state
  const [sidenav, setSidenav] = useState(false)

  // Desktop fixed menu
  const [sticky, setSticky] = useState(false)
  
  // Mobile Icon
  const menuIcon = <FontAwesomeIcon icon={faBars}/>

  // SideNav
  const sidenavShow = () => {
    setSidenav(!sidenav)
  }

  // Scroll fixed Navbar
  useEffect(() => {
   const handleScroll = () => {
    setSticky(window.screenY > 20)
   }
   window.addEventListener('scroll',handleScroll)
   return () => window.removeEventListener('scroll',handleScroll)
  }, [])
  


  return (
    <>
   <header id='site_header' className={`${sticky? 'sticky':''}`}>
    <div className="container">
      <nav className="navbar" id='Navbar'>
        <div className="navbar_brand">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar_toggler" onClick={sidenavShow}> 
          {menuIcon}
        </div>
        <div className={`menu_items ${sidenav === true ? 'active':''}`}>
          <ul>
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true} >
                Home
              </Link>
            </li>
            <li>
              <Link  to="about" spy={true} smooth={true} >
                About Us
              </Link>
            </li>
            <li>
              <Link  to="services" spy={true} smooth={true} >
                Services
              </Link>
            </li>
            <li>
              <Link  to="blog" spy={true} smooth={true} >
                Blog
              </Link>
            </li>
            <li>
              <Link  to="contact" spy={true} smooth={true} >
               Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

   </header>
   {/* <div style={{height:'1000px'}}>
    
   </div> */}
   </>
  )
}

export default Navbar
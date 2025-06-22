import {Link, withRouter} from 'react-router-dom'
import {useState} from 'react'
import './index.css'

const Header = () => {
  const [show, setShow] = useState(false)
  const onClick3Line = () => {
    setShow(preState => ({show: !preState.show}))
  }
  const toggleNav = show ? (
    <div className="home-3line-card">
      <Link to="/" className="link small">
        About us
      </Link>
      <Link to="/service" className="link small">
        Services
      </Link>
      <Link to="/project" className="link small">
        Projects
      </Link>
      <Link to="/career" className="link small">
        Careers
      </Link>
      <Link to="/contact" className="link small">
        Contact
      </Link>
    </div>
  ) : null
  return (
    <nav className="header-navbar">
      <div className="logo-card">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750401069/2fdcf92ce27321079a9002edc684fad273c7e610_uo29gr.png"
            alt="logo"
            className="header-logo-img"
          />
        </Link>
      </div>
      <ul className="header-navbar-list">
        <li className="header-navbar-list-item">
          <Link to="/" className="link">
            About us
          </Link>
        </li>
        <li className="header-navbar-list-item">
          <Link to="/service" className="link">
            Services
          </Link>
        </li>
        <li className="header-navbar-list-item">
          <Link to="/project" className="link">
            Projects
          </Link>
        </li>
        <li className="header-navbar-list-item">
          <Link to="/career" className="link">
            Careers
          </Link>
        </li>
      </ul>
      <div className="header-navbar-contact-btn-card">
        <Link to="/contact">
          <button type="button" className="header-navbar-contact-btn">
            Contact us
          </button>
        </Link>
      </div>
      <button type="button" onClick={onClick3Line} className="header-3Line-btn">
        <img
          src="https://res.cloudinary.com/doyw7v77k/image/upload/v1750568654/Vector_kb5vyv.png"
          alt="header 3line"
          className="header-3line-image"
        />
      </button>
      {toggleNav}
    </nav>
  )
}

export default withRouter(Header)

import React from 'react'
import './Header.css'
const Header = () => {
  return (
     <header className="header">
        <div className="logo">SHAPEVOICE</div>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Product</a>
          <a href="#" className="nav-link">Template</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Pricing</a>
        </nav>
        <div className="auth-buttons">
          <button className="btn-secondary">Sign in</button>
          <button className="btn-primary">Start Free</button>
        </div>
      </header>
  )
}

export default Header
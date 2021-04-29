import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" href="#">Sneaker<span className="color">Lib</span></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">

      <li className="nav-item">
            <Link to="/brands" className="nav-link">Brands</Link>
        </li>
     
        <li className="nav-item">
            <Link to="/SOTD" className="nav-link">SOTD</Link>
        </li>
        
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}


export default Navbar;
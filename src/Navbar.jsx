import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li class="nav-item">
        {/* <a class="nav-link" href="/movies">movies</a> */}
        <Link to="/movies" className="nav-link">movies</Link>
      </li>
      <li class="nav-item">
        <Link to="/shows" className="nav-link">shows</Link>
      </li>
      
      <li class="nav-item">
        <Link to="/formdemo1" className="nav-link">formdemo1</Link>
      </li>
      
      
    </ul>
    
  </div>
</nav>        
    </div>
  )
}

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
      <li class="nav-item">
        <Link to="/formdemo2" className="nav-link">formdemo2</Link>
      </li>
      <li class="nav-item">
        <Link to="/formdemo3" className="nav-link">formdemo3</Link>
      </li>
      <li class="nav-item">
        <Link to="/formdemo4" className="nav-link">formdemo4</Link>
      </li>
      
      <li class="nav-item">
        <Link to="/depde" className="nav-link">depde</Link>
      </li>
      <li class="nav-item">
        <Link to="/useeffect" className="nav-link">useeffect</Link>
      </li>
      <li class="nav-item">
        <Link to="/apidemo1" className="nav-link">API DEMO 1</Link>
      </li>
      <li class="nav-item">
        <Link to="/apidemo2" className="nav-link">API DEMO 2</Link>
      </li>
      
      
    </ul>
    
  </div>
</nav>        
    </div>
  )
}

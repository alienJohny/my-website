import React from 'react'
import {NavLink, Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" style={{ fontFamily: 'Patua One, cursive' }}>Artur Yumaev</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/resume">Resume</NavLink>
          <NavLink className="nav-link" to="/music">Music</NavLink>
        </div>
      </div>
    </nav>
  )
}

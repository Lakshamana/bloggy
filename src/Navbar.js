import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-wrapper indigo darken-4'>
      <Link to='/' className='brand-logo center'>
        Bloggy
      </Link>
    </nav>
  )
}

export default Navbar

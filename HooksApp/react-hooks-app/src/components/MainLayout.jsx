import React from 'react'
import { Link } from 'react-router-dom'
import "./MainLayout.css"

function MainLayout() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
         <ul className='aa'>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/registration">Registeration</Link>
            </li>
         </ul>
      </nav>
    </div>
  )
}

export default MainLayout
import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../styles/Nav.css'

const NavBar = () => {
    return (

        <div className='nav'>
            <nav>
                    <Link to="/">Home</Link>
                    <Link to="/recipes">Recipes</Link>
                    <Link to="/favorites">Favorites</Link>
            </nav>
        </div>

    )
}

export default NavBar
import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'

interface Props {
    setShowLandingPage: React.Dispatch<React.SetStateAction<boolean>>
}



const NavBar: React.FC<Props> = ({ setShowLandingPage }) => {
    return (
        <div className='nav'>
            <nav>
                    <Link to="/" onClick={() => {
                        setShowLandingPage(false)
                    }}>Home</Link>
                    <Link to="/recipes">Recipes</Link>
                    <Link to="/favorites">Favorites</Link>
            </nav>
        </div>
    )
}

export default NavBar
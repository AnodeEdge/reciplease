import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../shared-components/header/NavBar'

interface Props {
  setShowLandingPage: React.Dispatch<React.SetStateAction<boolean>>
}

const Layout:React.FC<Props> = ({ setShowLandingPage }) => {
  return (
    <>
    <NavBar 
      setShowLandingPage={setShowLandingPage}
    />
    <Outlet/>
    </>
  )
}

export default Layout
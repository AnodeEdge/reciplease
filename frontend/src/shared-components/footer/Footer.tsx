import React from 'react'
import "./Footer.css"


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> Recip!ease</span> This website was developed as a personal project using the Edamam API and React, Node, Express, and PostgreSQL.
            <span></span>
            <span> © 2023 by Scott Curtis</span>
          </p>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2> Recip<span>!</span>ease</h2>
          <div className="menu">
            <div>
              <a href="https://www.scott-curtis.com"> Personal Website</a>
            </div>
            <div>
              {/* <a href="">LinkedIn</a> */}
            </div>
            <div>
              {/* <a href="">GitHub</a> */}
            </div>
          </div>
          <p className="name"> Scott Curtis &copy; 2023</p>
        </div>
      </footer>
    </>
  )
}

export default Footer


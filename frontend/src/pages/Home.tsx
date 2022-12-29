import React from 'react'
import InfoCard from '../components/body/InfoCard'
import '../pages/styles/Home.css'
import { faUtensils, faBurger, faPizzaSlice, } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/footer/Footer'
import { url } from 'inspector'


const Home = () => {
  return (
    <>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Lets get cooking</h1>
          <p>Find your next culinary creation with our comprehensive recipe search</p>
          <button>Test</button>
        </div>
      </div>
      <div className="home-container">
        <h1 className="home-header">
          How it works
        </h1>
        <p style={{ margin: '2% 0 4%', textAlign: 'center', color: "#898989" }}>
          It only takes a few simple steps to find the <br/> recipe you're looking for...
        </p>
        <div className='card-container'>
          <InfoCard
            title="Search by recipe"
            paragraph="Already know what you're looking for? Just type the recipe name in search and choose a recipe."
            icon={faUtensils}
          />
          <InfoCard
            title="Search by ingredients"
            paragraph="Looking for recipe ideas? Just input ingredients in the Ingredients filter and see what comes up."
            icon={faBurger}
          />
          <InfoCard
            title="Filter recipes"
            paragraph="Want to keep only certain recipes? We have both diet and health filters to help you find the perfect recipe for you."
            icon={faPizzaSlice}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
import React, { useState } from 'react'
import CardWrapper from '../components/body/CardWrapper'
import SearchBar from '../components/body/SearchBar'
import { mealsOfTheDay, healthyMeals, dietMeals, internationalMeals } from './content/Meals'


const Recipes = () => {


  const [searchQuery, setSearchQuery] = useState({})

  return (
    <>
      <SearchBar
        setSearchQuery={setSearchQuery}
      />
      <CardWrapper
        cardData={mealsOfTheDay}
      />
      <CardWrapper
        cardData={healthyMeals}
      />
      <CardWrapper
        cardData={dietMeals}
      />
      <CardWrapper
        cardData={internationalMeals}
      />
    </>
  )
}

export default Recipes
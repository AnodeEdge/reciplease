import React, { useState } from 'react'
import CardWrapper from '../components/body/CardWrapper'
import SearchBar from '../components/body/SearchBar'
import { mealsOfTheDay, healthyMeals, dietMeals, internationalMeals } from './content/Meals'
import { Filters } from '../models'

// type SearchType = 'quick' | 'short'
const Recipes = () => {


  const [searchText, setSearchText] = useState({})
  const [searchFilters, setSearchFilters] = useState<Filters>({})
  
  const handleSearch = () => {

  }

  const handleFilters = () => {

  }

  
  return (
    <>

      {/* {handleFilter('ds')} */}
      <SearchBar
        setSearchQuery={setSearchText}
      />
      <h1>Meals of the Day</h1>
      <CardWrapper
        cardData={mealsOfTheDay}
      />
      <h1>Healthy</h1>
      <CardWrapper
        cardData={healthyMeals}
      />
      <h1>Diet</h1>
      <CardWrapper
        cardData={dietMeals}
      />
      <h1>International</h1>
      <CardWrapper
        cardData={internationalMeals}
      />
    </>
  )
}

export default Recipes
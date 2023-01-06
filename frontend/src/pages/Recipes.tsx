import React, { useState } from 'react'
import FilterCardWrapper from '../components/body/FilterCardWrapper'
import SearchBar from '../components/body/SearchBar'
import { mealsOfTheDay, healthyMeals, dietMeals, internationalMeals } from './content/Meals'
import { RecipeParams } from '../models'
import { recipeRequest } from '../helpers/requests'
import { mapKeys } from 'lodash'

// type SearchType = 'quick' | 'short'
const Recipes = () => {

  const [searchFilters, setSearchFilters] = useState<RecipeParams>({})
  const [recipeData, setRecipeData] = useState({})
  const [hasRecipeData, setHasRecipeData] = useState(false)

  const handleSearch = (evt: React.FormEvent) => {
    evt.preventDefault()
    setRecipeData(recipeRequest(searchFilters))
    //flip page state
    console.log(recipeData)
  }

  const updateSearchFilters = (data: RecipeParams) => {
    const prevData = searchFilters
    mapKeys(data, (value: any, key: any) => {
      prevData[key as keyof RecipeParams] = value
    })
    setSearchFilters(prevData)
  }

  //Create handleFilterClick function
  //updateSearchFilters
  //fetch recipe data and store it in recipeData
  //flip page state

  return (
    <>
      <SearchBar
        setSearchQuery={updateSearchFilters}
        handleSearch={handleSearch}
      />
      <h1>Meals of the Day</h1>
      <FilterCardWrapper
        cardData={mealsOfTheDay}
        cardType={'meal'}
        updateSearchFilters={updateSearchFilters}
      />
      <h1>Healthy</h1>
      <FilterCardWrapper
        cardData={healthyMeals}
        cardType={'health'}
        updateSearchFilters={updateSearchFilters}
      />
      <h1>Diet</h1>
      <FilterCardWrapper
        cardData={dietMeals}
        cardType={'diet'}
        updateSearchFilters={updateSearchFilters}
      />
      <h1>International</h1>
      <FilterCardWrapper
        cardData={internationalMeals}
        cardType={'international'}
        updateSearchFilters={updateSearchFilters}
      />
    </>
  )
}

export default Recipes
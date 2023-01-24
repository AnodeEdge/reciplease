import React, { useState } from 'react'
import FilterCardWrapper from './components/FilterCardWrapper'
import SearchBar from './components/SearchBar'
import FilterForm from './components/FilterForm'
import { mealsOfTheDay, healthyMeals, dietMeals, internationalMeals } from './content/Meals'
import { RecipeParams } from '../../types'
import { recipeRequest } from '../../helpers/requests'
import { mapKeys } from 'lodash'
import { RecipeData } from '../../types'
import DisplayResults from './components/DisplayResults'

// TO DO: Revise 2nd Page to Placeholder Search on selection

interface Props {
  showLandingPage: boolean;
  setShowLandingPage: React.Dispatch<React.SetStateAction<boolean>>;
  setRecipeData: React.Dispatch<React.SetStateAction<{}>>
  setSelectedRecipe: React.Dispatch<React.SetStateAction<number | undefined>>,
  recipeData: RecipeData
}

const Recipes: React.FC<Props> = ({ showLandingPage, setShowLandingPage , setRecipeData, recipeData, setSelectedRecipe}) => {
  const hasNext = recipeData._links?.next ? true : false
  const [searchFilters, setSearchFilters] = useState<RecipeParams>({})

  const updateSearchFilters = (data: RecipeParams) => {
    const prevData = searchFilters
    mapKeys(data, (value: any, key: any) => {
      if (data[key as keyof RecipeParams]) {
        prevData[key as keyof RecipeParams] = value
      } else {
        delete prevData[key as keyof RecipeParams]
      }
    })
    setSearchFilters(prevData)
    return prevData
  }

  const handleSearch = async (evt: React.FormEvent) => {
    evt.preventDefault()
    const recipeData = await recipeRequest(searchFilters)
    setRecipeData(recipeData)
    setShowLandingPage(true)
  }

  const handleFilterClick = async (data: RecipeParams) => {
    const searchFilters = updateSearchFilters(data)
    const recipeData = await recipeRequest(searchFilters)
    setRecipeData(recipeData)
    // Reassigns cuisineType and mealType to query parameter after first fetch
    mapKeys(data, (value: any, key: any) => {
      if (String(key) === 'cuisineType' || String(key) === 'mealType') 
      {
        data.q = String(data[key as keyof RecipeParams])
        data[key as keyof RecipeParams] = undefined
      }
    })
    updateSearchFilters(data)
    setShowLandingPage(true)
  }

  if (!showLandingPage) {
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
          handleFilterClick={handleFilterClick}
        />
        <h1>Healthy</h1>
        <FilterCardWrapper
          cardData={healthyMeals}
          cardType={'health'}
          handleFilterClick={handleFilterClick}
        />
        <h1>Diet</h1>
        <FilterCardWrapper
          cardData={dietMeals}
          cardType={'diet'}
          handleFilterClick={handleFilterClick}
        />
        <h1>International</h1>
        <FilterCardWrapper
          cardData={internationalMeals}
          cardType={'international'}
          handleFilterClick={handleFilterClick}
        />
      </>
    )
  } else {
    return (
      <>
        <FilterForm
          setSearchQuery={updateSearchFilters}
          handleSearch={handleSearch}
          updateSearchFilters={updateSearchFilters}
          searchFilters = {searchFilters}
        />
        <DisplayResults
          recipeData={recipeData}
          setSelectedRecipe={setSelectedRecipe}
        />
        {/* {props.hasPrevResults ? <button onClick={handlePrev}>Prev</button> : null } */}
        {/* {hasNext ? <button onClick={handleNext}>Next</button> : null} */}
      </>
    )
  }
  
}

export default Recipes
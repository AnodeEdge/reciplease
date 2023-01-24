import React from 'react'
import { RecipeData } from '../../../types'
import DisplayTile from './DisplayTile'


interface Props {
  recipeData: RecipeData
  setSelectedRecipe: React.Dispatch<React.SetStateAction<number | undefined>>
}

const DisplayResults: React.FC<Props> = ({ recipeData, setSelectedRecipe }) => {
  
  const renderResultsGrid = () => {
    // console.log(recipeData)
    if (recipeData) {
      return recipeData?.hits?.map((element, index) => {
        // console.log(element, index)
        return (
          <DisplayTile
            keyData={element['recipe']['uri']}
            image={element['recipe']['image']}
            title={element['recipe']['label']}
            id={index}
            setSelectedRecipe={setSelectedRecipe}
          />
        )
      })
    }
    return ''
  }

  return (
    <>
      <div>
        {renderResultsGrid()}
      </div>
    </>
  )
}

export default DisplayResults
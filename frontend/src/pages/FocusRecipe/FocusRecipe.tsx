import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { RecipeData } from '../../types'
import './FocusRecipe.css'
import { tabulateNutrition } from '../../helpers/manipulation'

interface Props {
  recipeData: RecipeData
  // selectedRecipe: number | undefined
}

const FocusRecipe: React.FC<Props> = ({ recipeData }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const selectedRecipe =  Number(queryParams.get('id'))

  const determineRecipeData = () => {
    console.log({selectedRecipe: selectedRecipe})
    console.log(recipeData)
    return ( recipeData.hits?.[selectedRecipe].recipe )
  }
  const focusRecipeData = determineRecipeData()
  { console.log(focusRecipeData) }
  // { console.log(recipeData) }
  if (!focusRecipeData) return null
  return (
    <>
      {console.log(focusRecipeData)}
      {/* {console.log(recipeData)} */}
      {/* <div></div> */}
      <div>
        <div className="recipe-header">
          <img className="recipe-header-img" src={focusRecipeData.image}></img>
          <div className="recipe-header-data">
            <button className="" onClick={()=>navigate(-1)} >Back to recipes</button>
            <h1 className="">{focusRecipeData.label}</h1>
            <h4 className="">By {focusRecipeData.source}</h4>
            <h6>Preparation Instructions for this Recipe can be found through the link below.</h6>
            <button onClick={()=>window.open(focusRecipeData.url, '_blank')}>Preparation</button>
          </div>
        </div>
        <div className="recipe-info">
          <div className="recipe-digest left">Calories: {Math.round(Number(focusRecipeData.calories))}</div>
          <div className="recipe-digest middle">Serving(s): {focusRecipeData.yield}</div>
          <div className="recipe-digest right">Prep Time: {focusRecipeData.totalTime} Minutes</div>
        </div>
        <div>
          <div className="ingredients-container">
            <h1>Ingredients</h1>
            <ul className='list-container'>
              {focusRecipeData.ingredients.map((element) => {
              return (
                <li>{element.text}</li>
              )
            })}
            </ul>
          </div>
          <div className="nutrition-container">
            <h1>Nutrition</h1>
            <div className="nutrition-grid-container">
              <div className='nutrition-item'></div>
              <div className='nutrition-item'>Daily</div>
              <div className='nutrition-item'>Total</div>
              {tabulateNutrition(focusRecipeData)?.map((element)=>{
                return (
                <>
                  <div className='nutrition-item'>{element.label}</div>
                  <div className='nutrition-item'>{Number(element.daily.quantity).toFixed(1)}{element.daily.unit}</div>
                  <div className='nutrition-item'>{Number(element.total.quantity).toFixed(1)}{element.total.unit}</div>
                </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FocusRecipe
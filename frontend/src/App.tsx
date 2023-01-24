import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import FocusRecipe from './pages/FocusRecipe/FocusRecipe';
import Layout from './pages/Layout/Layout';
import Recipes from './pages/Recipes/Recipes';
import { RecipeData } from './types'

const App = () => {
  const initialRecipeData = () => {
    const initialData = sessionStorage.getItem('recipeData')
    if (initialData != null) {
      return JSON.parse(initialData)
    } else {
      return {}
    }
  }

  const [showLandingPage, setShowLandingPage] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState<number | undefined>()
  const [recipeData, setRecipeData] = useState<RecipeData>(initialRecipeData())

  useEffect(() => {
    sessionStorage.setItem('recipeData', JSON.stringify(recipeData))
  }, [recipeData])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout setShowLandingPage={setShowLandingPage} />}>
            <Route index element={<Home />} />
            <Route
              path="recipes"
              element={<Recipes
                showLandingPage={showLandingPage}
                setShowLandingPage={setShowLandingPage}
                setRecipeData={setRecipeData}
                setSelectedRecipe={setSelectedRecipe}
                recipeData={recipeData}
              />}
            />
            <Route
              path="recipe"
              element={<FocusRecipe
                recipeData={recipeData}
                // selectedRecipe={selectedRecipe}
              />}  
            />
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

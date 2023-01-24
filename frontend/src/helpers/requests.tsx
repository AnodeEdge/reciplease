import queryString from "query-string"
import { RecipeParams } from '../types'

const recipeAccessPoint: string = 'http://localhost:5000/recipes?'

const recipeRequest = async (params: RecipeParams) => {
    try{
        let queryParams = queryString.stringify(params)
        let responsePromise = await fetch(recipeAccessPoint + '&' + queryParams)
        let responseData = await responsePromise.json()
        // console.log(responseData)
        return responseData
    } catch (error) {
        console.log('error', error)
    }
}

export {recipeRequest} 
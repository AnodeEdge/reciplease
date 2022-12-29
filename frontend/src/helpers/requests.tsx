import queryString from "query-string"

const recipeAccessPoint: string = 'https://localhost:5000/recipes?'

interface recipe_params {
    q: string,

}

const recipeRequest = async (params :recipe_params) => {
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
const querystring = require("node:querystring")
const fetch = require("node-fetch")
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

edamamAccess = {
    app_id: String(process.env.EDAMAM_API_ID),
    app_key: String(process.env.EDAMAM_API_KEY),
    type: 'public'
}

const accessPointURI = 'https://api.edamam.com/api/recipes/v2?' + querystring.stringify(edamamAccess)

const getRecipes = async (params) => {
    try{
        queryParams = querystring.stringify(params)
        fetchURI = accessPointURI + '&' + queryParams
        console.log("Fetch attempt on: " + fetchURI)
        responsePromise = await fetch(fetchURI)
        console.log('EdamamAPI Request Status: ' + responsePromise.status)
        responseData = await responsePromise.json()
        if (responseData.count) console.log("EdamamAPI Recipe Count: " + String(responseData.count)) 
        return responseData
    } catch (error) {
        console.log('error', error)
    }
}

module.exports = {getRecipes}
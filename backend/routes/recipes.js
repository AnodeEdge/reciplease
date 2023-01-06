const express = require('express')
const recipeRouter = express.Router()
const querystring = require("node:querystring")
const edamamAPI = require('../helpers/edamamAPI')


recipeRouter
    .route('/')
    .get( async (req, res) => {
        recipeData = await edamamAPI.getRecipes(req.query)
        res.json(recipeData)
    })



module.exports = recipeRouter
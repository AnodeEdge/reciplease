const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

//Routes
const recipeRouter = require('./routes/recipes')


app.get("/", (req, res) => {
    res.json( {message: "Error"})
})

app.use('/recipes', recipeRouter)

app.listen(5000, () => {
    console.log('Reciplease server listening on port 5000')
})

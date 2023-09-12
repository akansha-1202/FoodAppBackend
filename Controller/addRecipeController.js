const { addRecipeModel } = require("../Schema/addRecipe")

const addRecipe = async (req, res) => {
    const addRecipeInfo = req.body
    const data = await addRecipeModel.create(addRecipeInfo)
    res.send({ message: "Your Recipe Added Successfully", result:data })
}


const getRecipe = async (req, res) => {
    const data = await addRecipeModel.find({})
    res.send(data)
}

module.exports = { addRecipe, getRecipe }

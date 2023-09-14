const { addRecipeModel } = require("../Schema/addRecipe")

const addRecipe = async (req, res) => {
    const addRecipeInfo = req.body
    console.log(addRecipeInfo);
    const data = await addRecipeModel.create(addRecipeInfo)
    res.send({ message: "Your Recipe Added Successfully", result:data })
}


const getRecipe = async (req, res) => {

    const user_id = req.params.user_id;
    // console.log(user_id);
    //check user
    const data = await addRecipeModel.find({user_id: user_id})
    res.send(data)

    // const data = await addRecipeModel.find({})
    // res.send(data)
}

module.exports = { addRecipe, getRecipe }

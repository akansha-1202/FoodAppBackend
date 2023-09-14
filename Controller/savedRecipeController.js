const savedRecipeModel = require("../Schema/savedRecipeModel");

const savedRecipe = async (req, res) => {
    const savedRecipeInfo = req.body;
    // console.log(savedRecipeInfo);
    try {

       const user = await savedRecipeModel.findOne({user_id: savedRecipeInfo.user_id})
        
       // new User
       if (!user) {
        const newUser = new savedRecipeModel({
            user_id: savedRecipeInfo.user_id,
            savedRecipe: [{
                recipe: savedRecipeInfo.element.recipe
            }]
          });

            const result = await newUser.save();   
            return res.send({ message: "Your Recipe Added Successfully", result: result });

            }


    // Checking for existance of recipeName
    const existingRecipe = user.savedRecipe.find(item => item.recipe.label === savedRecipeInfo.element.recipe.label);
    if (existingRecipe) {
        // console.log("Recipe already exists");
        return res.send({
                        success: true,
                        message: "Recipe is already saved...!!!",
                        user: user,    
                    });   
                
                }


    // Push the new recipe to the saves array
    user.savedRecipe.push({
        recipe: savedRecipeInfo.element.recipe
    });

    // Save the updated user document
    const result = await user.save();
        res.send({ message: "Your Recipe Added Successfully", result: result });
    }
     catch (error) {
        console.error("Error saving recipe:", error);
        res.status(500).send({ message: "Internal server error" });
    }
}




const getSavedRecipe = async (req, res) => {
    const user_id = req.params.user_id;
    // console.log(user_id);
    //check user
    const data = await savedRecipeModel.find({user_id: user_id})
    res.send(data)
}


module.exports = {savedRecipe, getSavedRecipe}
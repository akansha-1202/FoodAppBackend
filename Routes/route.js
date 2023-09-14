const Router = require("express").Router()
const { addRecipe, getRecipe } = require("../Controller/addRecipeController");
const { savedRecipe, getSavedRecipe } = require("../Controller/savedRecipeController");
const { register, login } = require("../Controller/userController");
const authorization = require("../Middleware/authorization");


Router.post('/register',register)
Router.post('/login',login);
Router.post('/addRecipe',addRecipe);
Router.get('/getRecipe/:user_id', getRecipe);
Router.post('/savedRecipe',authorization, savedRecipe);
Router.get('/getSavedRecipe/:user_id', getSavedRecipe);


module.exports = Router
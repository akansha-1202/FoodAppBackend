const Router = require("express").Router()
const { addRecipe, getRecipe } = require("../Controller/addRecipeController");
const { register, login } = require("../Controller/userController")


Router.post('/register',register)
Router.post('/login',login);
Router.post('/addRecipe',addRecipe);
Router.get('/getRecipe', getRecipe);



module.exports = Router
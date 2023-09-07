const Router = require("express").Router()
const { register, login } = require("../Controller/userController")


Router.post('/register',register)
Router.post('/login',login);



module.exports = Router
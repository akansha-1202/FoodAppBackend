const mongoose = require('mongoose')

const savedRecipeSchema = new mongoose.Schema({
    user_id : String,
    savedRecipe : [{
        recipe : Object
     }]
},{timestamps : true})

const savedRecipeModel = mongoose.model('savedItem', savedRecipeSchema)

module.exports =  savedRecipeModel



// user_id: {
//     type: String,
//     require: true,
//   },
//   data: {
//     type: Object,
//     required: true,
//   },
// },{timestamps : true}//for timing in which user added the cart
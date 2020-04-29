const express = require('express');
const router = express.Router();
const controller = require('./recipeController');

router
  .route('/recipes')
  .get(controller.getRecipe)
  .post(controller.postRecipe);

router
  .route('/recipes/:id')
  .put(controller.putRecipe)
  .delete(controller.deleteRecipe);

module.exports = router;

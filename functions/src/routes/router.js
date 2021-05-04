const express = require('express');
const router = express.Router();
const recipeController = require('./recipeController');
const authController = require('./authController');

router
  .route('/recipes')
  .get(recipeController.getRecipe)
  .post(recipeController.postRecipe);

router
  .route('/recipes/:id')
  .put(recipeController.putRecipe)
  .delete(recipeController.deleteRecipe);

// 会員登録
router
  .route('/signup')
  .post(authController.userRegit);

module.exports = router;

const Recipe = require('../models/Recipe.js');

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.json(recipes);
  } catch (err) {
    console.log('err', err);
    res.json({ "error": err });
  }
};

const getRecipe = async () => {

};

const createRecipe = async () => {

};

const deleteAllRecipes = async () => {

};

module.exports = {
  getAllRecipes,
  getRecipe,
  createRecipe,
  deleteAllRecipes,
};
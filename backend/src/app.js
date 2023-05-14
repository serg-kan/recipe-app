const express = require('express')
const app = express()

const Recipe = require('./models/Recipe.js');

app.get('/', async (req, res) => {
  const recipe = new Recipe({ "name": "Лазанья"});

  await recipe.save();
  const recipes = await Recipe.find();

  console.log(recipes)

  res.send('Hello World!');
});

module.exports = app;
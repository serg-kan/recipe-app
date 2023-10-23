import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import RecipeCard from './components/RecipeCard/RecipeCard';
import RecipeForm from './components/RecipeForm/RecipeForm';

import './App.css'

const testData = [
  {
    id: 0,
    name: "Курица с рисом",
    ingredients: ["курица", "рис"],
    fats: 10,
    carbs: 5,
    proteins: 20,
  },
  {
    id: 1,
    name: "Макароны с фаршем",
    ingredients: ["курица", "рис"],
    fats: 10,
    carbs: 5,
    proteins: 20,
  },
  {
    id: 2,
    name: "Салат с тунцом",
    ingredients: ["курица", "рис"],
    fats: 10,
    carbs: 5,
    proteins: 20,
  },
  {
    id: 3,
    name: "Гречка с котлетой",
    ingredients: ["курица", "рис"],
    fats: 10,
    carbs: 5,
    proteins: 20,
  },
  {
    id: 4,
    name: "Шавуха",
    ingredients: ["курица", "рис"],
    fats: 10,
    carbs: 5,
    proteins: 20,
  }
]

function App() {
  const [recipes, setRecipes] = useState(testData);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  }
  return (
    <Container className="App">
      <RecipeForm addRecipe={addRecipe} />

      { 
        recipes.map(({ id, name, ingredients, fats, carbs, proteins }) => (
          <RecipeCard 
            key={id}
            name={name}
            ingredients={ingredients}
            fats={fats}
            carbs={carbs}
            proteins={proteins}
          />
        ))
      }
      
    </Container>
  );
}

export default App;

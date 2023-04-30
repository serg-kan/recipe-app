import Container from 'react-bootstrap/Container';
import RecipeCard from './components/RecipeCard/RecipeCard';
import RecipeForm from './components/RecipeForm/RecipeForm';

import './App.css'

function App() {
  return (
    <Container className="App">
      <RecipeForm />
      <RecipeCard />
    </Container>
  );
}

export default App;

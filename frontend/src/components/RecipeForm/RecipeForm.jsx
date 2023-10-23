import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { getAllRecipes } from '../../api/RecipeApi';

const RecipeForm = ({ addRecipe }) => {
  const [recipeName, setRecipeName] = useState('');

  useEffect(() => {
    console.log('useeffect')
    const result = getAllRecipes();
  }, [])

  const onSubmit = (e) => { 
    e.preventDefault();

    addRecipe({
      name: recipeName,
      ingredients: [],
      fats: 0,
      carbs: 10,
      proteins: 10,
    });

    setRecipeName('');
  }

  const onChange = (e) => {
    setRecipeName(e.target.value);
  }

  return (
    <Row className="mb-3">
      <Form>
      <Row>
        <Col xs={7} className="ps-0">
          <Form.Control value={recipeName} onChange={onChange} placeholder="Название рецепта" />
        </Col>
        <Col>
          <Button type="submit" onClick={onSubmit}>Добавить рецепт</Button>
        </Col>
      </Row>
    </Form>
    </Row>
    
  )
}

export default RecipeForm
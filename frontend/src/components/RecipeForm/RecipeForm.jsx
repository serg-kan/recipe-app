import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const RecipeForm = () => {
  return (
    <Row className="mb-3">

      <Form>
      <Row>
        <Col xs={7} className="ps-0">
          <Form.Control placeholder="Название рецепта" />
        </Col>
        <Col>
          <Button>Добавить рецепт</Button>
        </Col>
      </Row>
    </Form>
    </Row>
    
  )
}

export default RecipeForm
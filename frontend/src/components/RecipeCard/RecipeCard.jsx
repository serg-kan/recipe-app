import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const RecipeCard = ({ name, description, ingredients }) => {
  return (
    <Row >
        <Card className="mx-auto m-1">
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            {
              ingredients.map((ingredient) => (
                <Badge className="me-2">{ingredient}</Badge>
              ))
            }
          </Card.Body>
        </Card>       
    </Row>
     
  )
}

export default RecipeCard;
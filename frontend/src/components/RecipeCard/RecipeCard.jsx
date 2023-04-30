import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const RecipeCard = ({ name, description, ingredients }) => {
  return (
    <Row >
        <Card className="mx-auto">
          <Card.Body>
            <Card.Title>Курица в кисло-сладком соусе</Card.Title>
            <Badge className="me-2">Курица</Badge>
            <Badge className="me-2">Рис</Badge>
            <Badge className="me-2">Овощи</Badge>
            <Badge className="me-2">Зелень</Badge>
          </Card.Body>
        </Card>       
    </Row>
     
  )
}

export default RecipeCard;
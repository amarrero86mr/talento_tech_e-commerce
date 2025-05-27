import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";

const ProductoCard = ({item}) => {

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} height="200" style={{ objectFit: "contain" }}  />
            <Card.Body className="">
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            </Card.Body>
        </Card>      
    )
};

export default ProductoCard;
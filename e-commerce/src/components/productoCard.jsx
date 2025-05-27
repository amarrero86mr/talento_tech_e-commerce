import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";

const ProductoCard = ({item}) => {

    return(
        <Card style={{ width: '18rem', height: '20rem' }}>
            <Card.Img variant="top" src={item.image} height="200" width="200" style={{ objectFit: "contain" }}  />
            <Card.Body className="">
            <Card.Title style={{height:'4rem', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{item.title}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            </Card.Body>
        </Card>      
    )
};

export default ProductoCard;
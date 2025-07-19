import Card from "react-bootstrap/esm/Card";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "./context/cart_context";



const ProductoCard = ({item}) => {

    const navigate = useNavigate();
    const verproducto = (id) => {
        return(
            navigate(`/detail/${item.id}`)
        )
    }

    return(
        <Card style={{ width: '18rem', height: '22rem' }}>
            <Card.Img variant="top" src={item.image} height="200" width="200" style={{ objectFit: "contain" }}  />
            <Card.Body className="">
            <Card.Title style={{height:'4rem', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{item.title}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            </Card.Body>
            
            <Button className="rounded-top-0" onClick={verproducto}>Ver Mas</Button>
        </Card>      
    )
};

export default ProductoCard;
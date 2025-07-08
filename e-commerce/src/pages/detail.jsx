import { useParams } from 'react-router-dom';
import { useProductContext } from '../components/context/produc_context';
import { Button } from 'react-bootstrap';

const Detail = () => {

    const { id } = useParams();
    const { productos } = useProductContext();
    const item = productos.find(item => item.id == id)
    
    return (
        <>
            <h2>{item.title}</h2>
            <p>⭐{item.rating.rate}</p>
            <p>Categoria: {item.category}</p>
            <img width={250} src={item.image} alt={item.title} />
            <p>Detalle: {item.description}</p>
            <p>{item.price}</p>

            <Button>Al Carrito</Button>
        </>
    )
}

export default Detail;
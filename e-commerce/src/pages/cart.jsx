import { Container } from "react-bootstrap"
import { useCartContext } from "../components/context/cart_context";
import ItemCart from "../components/item_cart";


const Carrito = () => {
    const { carrito } = useCartContext

    return(
        <Container>
            <h3>Carrito de Compras</h3>
            <p> este es su carrito </p>

            <div>
                {carrito 
                ? carrito.map(item => <ItemCart item ></ItemCart>)
                : <p>Y esta vacío...</p>
                }

            </div>
        </Container>
    )
}

export default Carrito;
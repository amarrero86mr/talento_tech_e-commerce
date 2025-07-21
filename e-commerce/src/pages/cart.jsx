import { Container } from "react-bootstrap"
import { useCartContext } from "../components/context/cart_context";
import ItemCart from "../components/item_cart";
import { useState } from "react";
import { useEffect } from "react";
import { useProductContext } from "../components/context/produc_context";


const Carrito = () => {
    const { carrito, addCart, removeIdCart, deleteCart } = useCartContext();
    const { productos } = useProductContext();
    const [ itemsCart, setItemsCart ] = useState()

    
    return(
        <Container>
            <h3>Carrito de Compras</h3>
            <p> este es su carrito </p>

            <div>
                {carrito 
                ? Object.entries(carrito).map((tupla) => <ItemCart id={tupla[0]} cant={tupla[1]} key={tupla[0]}></ItemCart>)
                : <p>Y esta vacío...</p>
                }

            </div>
        </Container>
    )
}

export default Carrito;
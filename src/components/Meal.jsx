import { useContext } from "react";
import { CartContext } from "../store/cartContext"; 

export default function Meal({ name, price, description, image }) {
    const { addToCart } = useContext(CartContext);

    return (
        <article className="meal-item">
            <img src={`http://localhost:3000/${image}`} alt={name} className="meal-item img" />
            <h1>{name}</h1>
            <p className="meal-item-price"> {price}</p>
            <p className="meal-item-description">{description} </p>
            <div className="meal-item-actions"><button className="cart-item-actions button " onClick={addToCart}>Add to Cart</button></div>
        </article>
    )
}
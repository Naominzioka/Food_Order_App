import { useContext } from "react";
import { CartContext } from "../store/cartContext";
import { currencyFormatter } from "../util/formating";
import Button from "./UI/Button";

export default function MealItem({ name, price, description, image }) {
    const { addToCart } = useContext(CartContext);

    return (
        <article className="meal-item">
            <img src={`http://localhost:3000/${image}`} alt={name} className="meal-item img" />
            <div>
                <h3>{name}</h3>
                <p className="meal-item-price"> {currencyFormatter.format(price)}</p>
                <p className="meal-item-description">{description} </p>
            </div>
            <p className="meal-item-actions"><Button onClick={addToCart}>Add to Cart</Button></p>
        </article>
    )
}
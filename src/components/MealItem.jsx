import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../util/formating";
import Button from "./UI/Button";

export default function MealItem({ meal }) {
    const cartCtx = useContext(CartContext);
    const { name, price, description, image } = meal;

    function addMealToCart() {
        cartCtx.addToCart(meal);
    }

    return (
        <article className="meal-item">
            <img src={`http://localhost:3000/${image}`} alt={name} className="meal-item img" />
            <div>
                <h3>{name}</h3>
                <p className="meal-item-price"> {currencyFormatter.format(price)}</p>
                <p className="meal-item-description">{description} </p>
            </div>
            <p className="meal-item-actions"><Button onClick={addMealToCart}>Add to Cart</Button></p>
        </article>
    )
}
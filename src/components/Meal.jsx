export default function Meal({name, price, description }) {
    
    return (
        <div>
            <img />
            <h1>{name}</h1>
            <p> { price}</p>
            <p> {description} </p>
            <button>Add to Cart</button>
        </div>
    )
}
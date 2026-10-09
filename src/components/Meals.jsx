import MealItem from './MealItem'
import { MealsContext } from '../store/meals_context'
import { useContext } from 'react'

export default function Meals() {
    const { meals } = useContext(MealsContext)

    return (
            <ul id="meals">
                {meals?.map((meal) => (
                    <li key={meal.id}>
                        <MealItem {...meal} />
                    </li>
                ))}

            </ul>
    )
}
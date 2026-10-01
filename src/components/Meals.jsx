import Meal from './Meal'
import { MealsContext } from '../store/meals_context'
import { useContext } from 'react'

export default function Meals() {
    const { meals } = useContext(MealsContext)

    return (
        <div id="meals">
            <ul>
                {meals?.map((meal) => (
                    <li key={meal.id}>
                        <Meal {...meal} />
                    </li>
                ))}

            </ul>
        </div>
    )
}
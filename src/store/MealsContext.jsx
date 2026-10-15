import { createContext, useEffect, useState } from "react";

export const MealsContext = createContext({
    meals: [],

})

export function MealsContextProvider({ children }) {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadMeals() {
            try {
                const response = await fetch('http://localhost:3000/meals');

                if (!response.ok) {
                    throw new Error("Could not fetch meals.Check network.")
                }
                const meals = await response.json();
                setMeals(meals)
            }  
            catch (error) {
                return setError(error.message || 'Could not fetch meals.')
            }
        }
        loadMeals();
    }, []);

    const contextValue = {
        meals: meals,
    }

    return <MealsContext value={contextValue} >{children}</MealsContext>
}

export default MealsContext;
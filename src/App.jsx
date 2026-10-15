
import Header from "./components/Header";
import Meals from "./components/Meals";
import { MealsContextProvider } from "./store/MealsContext";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from "./components/Cart.jsx";

function App() {

  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <MealsContextProvider>
            <Header />
            <Meals />
            <Cart />
          </MealsContextProvider>
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;

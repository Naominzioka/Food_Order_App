import logo from '../assets/logo.jpg';
import { useContext } from "react";
import { CartContext } from "../store/cartContext";
import Button from './UI/Button';

export default function Header() {
    const { cartCount } = useContext(CartContext);
    return (
        <header id="main-header">
            <div id='title'>
                <img src={logo} alt="logo" />
                <p  >REACTFOOD</p>
            </div>
            <nav>
                <Button textOnly>Cart ({cartCount})</Button>
            </nav>
        </header>
    )
}
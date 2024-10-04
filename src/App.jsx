import './App.css'
import {Form} from "./components/Form.jsx";
import {Order} from "./components/Order.jsx";
import {useState} from "react";

function App() {
    const [pedido, setPedido] = useState([]);

    const handlePedido = (pedido) => {
        setPedido(pedido);
    }

    return (
        <>
            <header>
                <h1>SuperPizza.com</h1>
                <h3>Las Mejores Pizzas por internet</h3>
            </header>
            <Form handlePedido={handlePedido}/>
            <Order pedido={pedido}/>
        </>
    )
}

export default App

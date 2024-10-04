import {useState} from "react";


// eslint-disable-next-line react/prop-types
export const Form = ({handlePedido}) => {
    const [selectedPizza, setSelectedPizza] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [selectedPago, setSelectedPago] = useState(1);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [pago, setPago] = useState("");
    const [total, setTotal] = useState(0)

    const handlePizzaChange = (pizza, cantidad, pago, nombre, telefono, direccion) => {
        setSelectedPizza(pizza);
        setCantidad(cantidad);
        setNombre(nombre);
        setTelefono(telefono);
        setDireccion(direccion);
        setSelectedPago(pago);

        console.log(selectedPago);
        console.log(cantidad);

        if (selectedPago !== 0 && selectedPago == 1) {
            console.log(selectedPago);
            setPago("Tarjeta de Crédito")

            switch (selectedPizza) {
                case "Hawaiana":
                    setTotal((100 * cantidad) + ((100 * cantidad) * .10));
                    break;
                case "Especial":
                    setTotal((120 * cantidad) + ((120 * cantidad) * .10));
                    break;
                case "Vegetariana":
                    setTotal((150 * cantidad) + ((150 * cantidad) * .10));
                    break;
            }
        } else if (selectedPago !== 0 && selectedPago == 2) {
            setPago("PayPal");

            switch (selectedPizza) {
                case "Hawaiana":
                    setTotal((100 * cantidad) + ((100 * cantidad) * .20));
                    break;
                case "Especial":
                    setTotal((120 * cantidad) + ((120 * cantidad) * .20));
                    break;
                case "Vegetariana":
                    setTotal((150 * cantidad) + ((150 * cantidad) * .20));
                    break;
            }
        }
    }


    const enviarpedido = () => {
        handlePedido([selectedPizza, cantidad, pago, nombre, telefono, direccion, total]);
    }


    return (<>
        <form>
            {/* Pizza */}
            <label htmlFor="pizza">Elige tu pizza</label>
            <select
                name="pizza"
                id="pizza"
                value={selectedPizza}
                onChange={(e) => handlePizzaChange(e.target.value, cantidad, selectedPago, nombre, telefono, direccion)}>
                <option value="Hawaiana">Hawaiana $100</option>
                <option value="Especial">Especial $120</option>
                <option value="Vegetariana">Vegetariana $150</option>
            </select>

            {/* Cantidad */}
            <label htmlFor="cantidad">Numero de pizzas</label>
            <input
                type="text"
                name="cantidad"
                id="cantidad"
                onChange={(e) => handlePizzaChange(selectedPizza, e.target.value, selectedPago, nombre, telefono, direccion)}
                value={cantidad}
            />

            {/* Forma de pago */}
            <label htmlFor="pago">Forma de pago</label>
            <select
                name="pizza"
                id="pizza"
                value={selectedPago}
                onChange={(e) => handlePizzaChange(selectedPizza, cantidad, e.target.value, nombre, telefono, direccion)}>
                <option value="1">Tarjeta de crédito</option>
                <option value="2">Paypal</option>
            </select>

            {/* Nombre */}
            <label htmlFor="nombre">Nombre</label>
            <input
                type="text"
                name="nombre"
                id="nombre"
                onChange={(e) => handlePizzaChange(selectedPizza, cantidad, selectedPago, e.target.value, telefono, direccion)}
                value={nombre}
            />

            {/* Teléfono */}
            <label htmlFor="telefono">Teléfono</label>
            <input
                type="phone"
                name="telefono"
                id="telefono"
                onChange={(e) => handlePizzaChange(selectedPizza, cantidad, selectedPago, nombre, e.target.value, direccion)}
                value={telefono}
            />

            {/* Dirección */}
            <label htmlFor="direccion">Dirección</label>
            <input
                type="text"
                name="direccion"
                id="direccion"
                onChange={(e) => handlePizzaChange(selectedPizza, cantidad, selectedPago, nombre, telefono, e.target.value)}
                value={direccion}
            />

            <hr/>

            <button type="button" onClick={enviarpedido}>Enviar pedido</button>
        </form>
    </>)
}
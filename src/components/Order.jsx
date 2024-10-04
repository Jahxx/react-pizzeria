// eslint-disable-next-line react/prop-types
export const Order = ({pedido}) => {
    return (
        <>
            <h3>Pedido recibido</h3>
            <p>Cliente: {pedido[3]}</p>
            <p>Dirección: {pedido[5]}</p>
            <p>Teléfono: {pedido[4]}</p>
            <p>Pizza: {pedido[0]}</p>
            <p>Núm pizzas: {pedido[1]}</p>
            <p>Forma de pago: {pedido[2]}</p>
            <p>Total: {pedido[6]}</p>
        </>
    )
}
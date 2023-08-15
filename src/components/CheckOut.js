import { useContext } from "react";

const CheckOut = ({order}) => {
    const {clearCart} = useContext()
    return (
        <div>
            <h2>Resumen de Compra</h2>
            <h3>Información del Comprador:</h3>
            <p><strong>Nombre:</strong> {order.Item.name}</p>
            <p><strong>Email:</strong> {order.Item.email}</p>
            <p><strong>Teléfono:</strong> {order.Item.phone}</p>

            <h3>Productos:</h3>
            <ul>
                {order.items.map(item => (
                    <li key={item.id}>
                        <strong>{item.name}</strong> - ${item.price} x {item.quantity} = ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            
            <h3>Total: ${order.total}</h3>
            {clearCart()}
        </div>
    );
}

export default CheckOut
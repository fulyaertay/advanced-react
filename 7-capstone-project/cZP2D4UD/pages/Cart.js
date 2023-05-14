import React, {useState, useContext} from "react"
import {CartContext} from "../CartContext"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, removeFromCart, emptyCart} = useContext(CartContext)    
    const cartItemElements = cartItems.map(item => (
        <CartItem item={item} key={item.id} />
    ))
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder} disabled={!cartItems.length}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart
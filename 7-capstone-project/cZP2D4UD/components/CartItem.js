import React, {useContext} from "react"
import PropTypes from "prop-types"
import {CartContext} from "../CartContext"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const {removeFromCart} = useContext(CartContext)
    const [hovered, ref] = useHover()
    
    return (
        <div className="cart-item">
            <i 
                ref={ref} 
                className={`ri-delete-bin${hovered ? "-fill" : "-line"}`} 
                onClick={() => removeFromCart(item)}
            ></i>
            <img src={item.url} width="100px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem

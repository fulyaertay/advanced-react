import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {CartContext} from "../CartContext"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    const [hovered, ref] = useHover()
    const {toggleFavorite, cartItems, addToCart, removeFromCart} = useContext(CartContext)
    
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
    function cartIcon() {
        const itemInCart = cartItems.find(item => item.id === img.id)
        if(itemInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
    
    return (
        <div 
            className={`${className} image-container`} 
            ref={ref}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image

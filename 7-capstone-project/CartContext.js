import React, {useState, useEffect} from "react"
import images from "./images"

const CartContext = React.createContext()

function CartContextProvider({children}) {
    const [cartItems, setCartItems] = useState([])
    const [allPhotos, setAllPhotos] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(images))
    }, [])
    
    function toggleFavorite(id) {
        const updatedPhotos = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedPhotos)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(itemToRemove) {
        setCartItems(prevItems => {
            const filteredItems = prevItems.filter(item => item.id !== itemToRemove.id)
            return filteredItems
        })
    }
    
    function emptyCart() {
        setCartItems([])
    }
    
    return (
        <CartContext.Provider value={{
            allPhotos, 
            cartItems, 
            toggleFavorite, 
            addToCart, 
            removeFromCart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}
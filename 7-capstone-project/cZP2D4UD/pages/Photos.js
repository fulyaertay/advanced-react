import React, {useState, useContext} from "react"

import Image from "../components/Image"
import {CartContext} from "../CartContext"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(CartContext)
    
    const images = allPhotos.map(
        (img,i) => (
            <Image key={img.id} img={img} className={getClass(i)} />
        )
    )
    
    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos
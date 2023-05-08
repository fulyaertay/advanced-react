import React from "react"
import InfoCallout from "./InfoCallout"
import ImageCallout from "./ImageCallout"
import EmailCallout from "./EmailCallout"

function App() {
    return (
        <main>
            <h1>Welcome!</h1>
            <InfoCallout 
                header="Don't miss out!"
                body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below!" 
            />
            
            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
            
            <ImageCallout 
                img={"https://picsum.photos/id/102/4320/3240"} 
                caption="Just look at those sparkling raspberries!"
            />
            
            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
            
            <EmailCallout 
                header="Give us your email. We definitely won't sell it to anyone." 
                btnText="Sign me up!" 
            />
            
        </main>
    )
}

export default App
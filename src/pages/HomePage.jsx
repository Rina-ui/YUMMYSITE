import React from "react";
import "../styles/HomePage.css";

function HomePage() {

    const image = [
        "src/assets/steak.jpg",
    ]

    return (
        
        <div className="home">
            <h2>Welcome to Yummy</h2>
            <p>Discover our delicious recipes right here!🍽️</p>
            <div className = "img">
                <img src={image} alt="steak" height={800} width={1200}/>
            </div>
        </div>
    )
}
export default HomePage;
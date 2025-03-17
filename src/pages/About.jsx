import React from "react";
import "../styles/About.css";

function About() {
    return (
        <div className="about">
            <h1>About YummySite</h1>
            <p>Yummy is a website that provides you with the best recipes</p>

            <h2>Our Story</h2>
            <p>YummySite was created out of a love for food and a passion for making cooking accessible to everyone. We believe that great meals bring people together, and our mission is to help you create unforgettable dining experiences with simple, tasty, and diverse recipes.</p>

            <h2>Our Team</h2>
            <p>We are a team of food enthusiasts and developers dedicated to curating the best recipes for you. Each recipe is carefully selected to ensure quality, authenticity, and ease of preparation.</p>

            <h2>What You’ll Find on YummySite</h2>
            <ul>
                <li>A wide variety of recipes from different cuisines</li>
                <li>Step-by-step cooking guides and tips</li>
                <li>Recipe recommendations based on your preferences</li>
            </ul>
        
        </div>
    )
}
export default About;
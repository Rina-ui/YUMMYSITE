import React, { use } from "react";
import { useState, useEffect } from "react";
import "../styles/Yummy.css";

function Yummy(){
    
    const images = [
      "src/assets/apple pie.jpg",
      "src/assets/avocado.jpg",
      "src/assets/bolognese.jpg",
      "src/assets/carbonara.jpg", 
      "src/assets/peperoni.jpg",
      "src/assets/poulet.jpg",
      "src/assets/Red.jpg",
      "src/assets/risotto.jpg",
      "src/assets/soupe.jpg",
      "src/assets/steak.jpg",
      "src/assets/sushi.jpg",
      "src/assets/tacos.jpg",
    ]

    const text = [
      "Apple Pie is a classic American dessert made with a buttery, flaky crust and a sweet, spiced apple filling. The filling typically consists of sliced apples, sugar, cinnamon, and sometimes nutmeg or lemon juice to enhance the flavor. The pie is baked until golden brown, creating a warm, comforting treat.",
      "Avocado Toast is a simple yet nutritious dish made by spreading mashed or sliced avocado over toasted bread. It is often seasoned with salt, pepper, and lemon juice for extra flavor. Many variations include toppings such as poached eggs, cherry tomatoes, feta cheese, chili flakes, or microgreens to enhance taste and texture.",
      "Spaghetti Bolognese is a classic Italian-inspired dish featuring spaghetti pasta served with a rich and hearty meat-based sauce. The Bolognese sauce, also known as ragù alla bolognese, is traditionally made with ground beef or a mix of beef and pork, slowly cooked with tomatoes, onions, garlic, carrots, celery, and herbs. Some variations include red wine and milk for added depth of flavor.",
      "Spaghetti Carbonara is a traditional Italian pasta dish from Rome, known for its rich, creamy texture and simple yet flavorful ingredients. It is made with spaghetti, eggs, Pecorino Romano cheese, guanciale (cured pork cheek), and black pepper—without using cream. The sauce is created by mixing eggs and cheese, which coat the hot pasta to form a smooth, velvety consistency.",
      "Pepperoni Pizza is a classic and widely loved pizza variety, featuring a crispy, golden crust topped with tangy tomato sauce, melted mozzarella cheese, and spicy, slightly smoky pepperoni slices. The pepperoni, a cured pork and beef sausage, crisps up during baking, releasing flavorful oils that enhance the pizza’s taste.",
      "Fried Chicken is a popular dish made by coating chicken pieces in seasoned flour or batter and deep-frying them until golden brown and crispy. The cooking process creates a crunchy, flavorful crust while keeping the inside juicy and tender. It is often seasoned with a blend of spices such as salt, pepper, paprika, and garlic powder for extra taste.",
      "Red Velvet Cake is a visually striking and decadent dessert known for its deep red color, soft texture, and subtle cocoa flavor. The cake is typically made with cocoa powder, buttermilk, and a hint of vinegar, which help create its signature moist and tender crumb. The red hue traditionally came from a chemical reaction between cocoa and acidic ingredients, but today, red food coloring is commonly added for a more vibrant appearance. It is usually paired with a smooth, tangy cream cheese frosting, enhancing its rich flavor.",
      "Risotto is a traditional Italian rice dish known for its creamy texture and rich flavor. It is made by slowly cooking short-grain rice (such as Arborio, Carnaroli, or Vialone Nano) in broth while stirring continuously. The starch released from the rice creates the signature smooth and velvety consistency.",
      "Clam Chowder is a rich and hearty soup made with clams, potatoes, onions, and celery, typically cooked in a creamy or tomato-based broth. The most famous versions are New England Clam Chowder, which is thick and creamy with milk or cream, and Manhattan Clam Chowder, which has a thinner, tomato-based broth.",
      "A grilled steak is a flavorful and tender cut of beef that is cooked over an open flame or on a grill. The exterior is typically seared to a rich, golden-brown color with charred grill marks, while the inside remains juicy and cooked to the desired level of doneness, ranging from rare to well-done. The steak is often seasoned with salt, pepper, and other spices or marinades, enhancing its natural beefy flavor. The grilling process imparts a smoky, slightly crispy texture on the outside, while the inside remains succulent and full of rich, savory juices. The combination of crispy edges and a tender, juicy center makes grilled steak a popular and satisfying dish.",
      "Sushi is a Japanese dish made with vinegared rice, often combined with raw or cooked seafood, vegetables, and seaweed (nori). Popular types include Nigiri (hand-pressed rice with fish on top), Maki (rolled sushi with seaweed), and Sashimi (sliced raw fish, served without rice).",
      "Tacos are a traditional Mexican dish consisting of a soft or crispy tortilla filled with a variety of ingredients. Common fillings include grilled meats (like beef, chicken, or pork), seafood, beans, cheese, lettuce, and salsa",
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
//useEffect permet de déclencher un effet de bord dans un composant fonctionnel et de changer l'etat du composant chaue 5 secondes
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        //nettoyer l'effet
        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [text.length]);
    
    return (
        <div className="carousel">
          <div className="carousel-inner">
            <img src={images[currentIndex]}  alt={`Image ${currentIndex + 1}`} height={90} width={100}/>
          </div>

          <div className="carousel-text">
            <p>{text[currentIndex]}</p>
          </div>

        </div>
    );


}

export default Yummy;
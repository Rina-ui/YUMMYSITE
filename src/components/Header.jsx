import react from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
    return (
        <div>
            <header>
                <h1>YUMMY😋 </h1>
                    <nav>
                        <ul>
                            <li><Link to="/main">Main</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/recipes">Recipes</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
            </header>
        </div>
        
    )


}

export default Header;
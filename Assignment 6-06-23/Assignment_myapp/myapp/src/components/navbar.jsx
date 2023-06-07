import React from "react";
import "./navbar.css";

function Navbar() {
    return(
        // <div className="navbar">
            
        //     <a href="#">Home</a>
        //     <a href="#">Home</a>
        //     <a href="#">Home</a>
        //     <a href="#">Home</a>
    
           
        // </div>

        <div class="navbar">
            <a class="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#notification">Notification</a>
        </div>
    );
}

export default Navbar;
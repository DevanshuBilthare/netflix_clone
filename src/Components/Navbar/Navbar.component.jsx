import React, { useState } from "react";
import "./Navbar.styles.css";
import { useEffect } from "react";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => { 
         window.addEventListener('scroll', () => {
             if(window.scrollY > 100){
                handleShow(true)
             } else handleShow(false)
         })
         return () => {
             window.removeEventListener('scroll')
         }
    }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className="nav_logo"
        src="https://lh3.googleusercontent.com/proxy/dNftQgvJsFM6JPzibCwXRecCqUXnxcjQhYpJf7d9b7-WnWty3L-TqlHHEeIw_jfbNR28r2wDvVdVfkjFKKHpCCH6ZtZurVzomQaDBYfn-BHd9M1_-_o"
        // src="https://upload.wikipedia.org/wikipedia/commons/0/0f"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src='https://www.pngitem.com/pimgs/m/317-3175297_netflix-and-chill-png-transparent-png.png'
        // src="https://pbs.twing.com/profikle_images/124011999041155 "
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;


import { LOGO_URL } from '../Util/Constants.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {

 
  const[btnNameReact,setbtnNameReact]=useState("Login")

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src= {LOGO_URL} alt="img" />
        </div>
        <div className="name">
          {/* <h1 className="Brand-name">FOOD VILLAGE</h1> */}
        </div>
        <div className="nav-items">
          <ul>
            <li>
               <Link to ='/'>HOME</Link>
            </li>
            <li>
            <Link to ='/about'>ABOUT</Link>
            </li>
            <li>
            <Link to ='/contact'>CONTACT US</Link>
            </li>
            <li>Cart</li>
            <button  className='login-button' onClick={()=>{
                btnNameReact==="Login"
                ?setbtnNameReact("Logout")
                :setbtnNameReact("Login")
                
            }}
              >{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  }

  export default Header;
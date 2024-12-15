
import { LOGO_URL } from '../Util/Constants.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import "./Header.css";
import useOnlineStatus from '../Util/useOnlineStatus.js';

function Header() {

 
  const[btnNameReact,setbtnNameReact]=useState("Login👆")

  const online_status = useOnlineStatus();

    return (
      <div className="header flex items-center justify-between bg-white shadow-md p-4 h-24 fixed w-full top-0 z-50">
      <div className="logo-container">
        <img className="logo h-17 w-16 object-contain" src={LOGO_URL} alt="img" />
      </div>
      <div className="nav-items flex items-center space-x-6">
        <ul className="flex items-center space-x-6 text-gray-600">
          <li className="flex items-center font-bold">
            Online-Status: {online_status ? "🟢(Online)" : "🔴(Offline)"}
          </li>
          <li>
            <Link to="/" className="hover:text-black font-bold">HOME🏠</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-black font-bold">ABOUT💁</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black font-bold">CONTACT-US📩</Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-black font-bold">GROCERY</Link>
          </li>
          <li className="hover:text-black font-bold">CART🛒</li>
        </ul>
        <button className="login-button bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700" onClick={() => {
            setbtnNameReact(btnNameReact === "Login👆" ? "Logout👆" : "Login👆")
        }}>
          {btnNameReact}
        </button>
      </div>
    </div>
    

    );
  }

  export default Header;

import { LOGO_URL } from '../Util/Constants.js';
import { useState , useContext } from 'react';
import { Link } from 'react-router-dom';
// import "./Header.css";
import useOnlineStatus from '../Util/useOnlineStatus.js';
import UserContext from '../Util/UserContext.js';
import { useSelector } from 'react-redux';

function Header() {

 
  const[btnNameReact,setbtnNameReact]=useState("Login👆")

  const online_status = useOnlineStatus();
  
  const data = useContext(UserContext);
  // console.log(data);

  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems);

    return (
      <div className="header flex items-center justify-between bg-white shadow-md p-4 fixed w-full top-0 z-50">
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
          <li>
    <Link to="Cart" className="hover:text-black font-bold">
        CART🛒({cartItems.length})
    </Link>
</li>


        
        <button className="login-button bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700" onClick={() => {
            setbtnNameReact(btnNameReact === "Login👆" ? "Logout👆" : "Login👆")
        }}>
          {btnNameReact}
        </button>
      <li className='text-black font-bold'>{data.loggedInUser}👤</li>
      </ul>
      </div>
    </div>
    );
  }

  export default Header;
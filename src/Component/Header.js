
import { LOGO_URL } from '../Util/Constants.js';

function Header() {
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  }

  export default Header;
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  console.log("Logo", LOGO_URL);
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL}></img>
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
};

export default Header;

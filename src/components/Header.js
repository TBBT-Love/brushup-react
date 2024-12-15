import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnLoginText, setbtnLogin] = useState("Login");

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
          <button
            className="loginbtn"
            onClick={() => {
              btnLoginText === "Login"
                ? setbtnLogin("Logout")
                : setbtnLogin("Login");
            }}
          >
            {btnLoginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

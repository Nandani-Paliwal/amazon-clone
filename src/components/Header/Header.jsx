import React from "react";
import { IoBasketOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <div className="header h-16 flex items-center sticky inset-0 z-100 bg-headerbg">
      <Link to="/">
        <img
          className="header_logo w-24 object-contain my-0 mx-3.5 mt-5"
          src="https://cdn.discordapp.com/attachments/1012814107994509353/1040922413455654952/unknown.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="header_search flex flex-1 items-center rounded-3xl w-6">
        <input
          className="header_searchInput p-3 h-6 w-full border-none"
          type="text"
        />
        <IoSearch className="header_searchIcon p-1 w-6 h-7 bg-searchicon rounded-tl-none rounded-br" />
      </div>

      <div className="header_nav flex justify-evenly ">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header_option flex flex-col mx-3 my-3 text-white">
            <span className="header_optionLineOne text-xs">Hello, {user ? user.email : 'Guest'}</span>
            <span className="header_optionLineTwo text-sm font-extrabold">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <div className="header_option flex flex-col mx-3 my-3 text-white">
          <span className="header_optionLineOne text-xs">Returns</span>
          <span className="header_optionLineTwo text-sm font-extrabold">
            & Orders
          </span>
        </div>

        <div className="header_option flex flex-col mx-3 my-3 text-white">
          <span className="header_optionLineOne text-xs">Your</span>
          <span className="header_optionLineTwo text-sm font-extrabold">
            Prime
          </span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header_optionBasket flex items-center text-white">
          <IoBasketOutline />
          <span className="header_optionLineTwo header_basketCount mx-3 my-3">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
 
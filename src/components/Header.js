import React from "react";

function Header() {
  return (
    <div className="bg-black text-white">
      <div className="container w-5/5 mx-auto flex items-center justify-around py-2">
        <div className="logo w-1/6">
          <img
            className="h-12"
            src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
          />
        </div>

        <div className="flex-grow mr-7">
          <div className="inputBox flex">
            <input
              type="text"
              className="text-black focus:outline-none w-11/12 py-1 px-2"
            />
            <button
              type="button"
              className="bg-yellow-300 p-1 px-3  outline-0 border-0 bg-none"
            >
              <img
                className="w-7"
                src="https://cdn.iconscout.com/icon/free/png-256/search-2347939-1966221.png"
              />
            </button>
          </div>
        </div>

        <div>
          <p className="m-0 leading-none">Hello Guest</p>
          <p className="m-0 leading-none font-bold">Sign In</p>
        </div>

        <div className="mx-10">
          <p className="m-0 leading-none">Returns</p>
          <p className="m-0 leading-none font-bold">& Orders</p>
        </div>

        <div>
          <p className="m-0 leading-none">Your</p>
          <p className="m-0 leading-none font-bold">Prime</p>
        </div>

        <div className="relative ml-10">
          <img
            className="w-7"
            src="https://www.pngkey.com/png/full/307-3071593_accessories-shopping-cart-icon-white.png"
            alt="basket"
          />
          <div className="absolute left-4 -top-1 w-5 text-sm rounded-full bg-white text-black text-center">
            1
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

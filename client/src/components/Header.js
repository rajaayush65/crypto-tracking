import React, { useEffect, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [timer, setTimer] = useState(60);

  const tick = () => {
    setTimer((prevState) => (prevState > 0 ? prevState - 1 : 60));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => clearInterval(timer);
  });
  
  function onClickHandleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="p-8 flex items-center">
      {/* Left */}
      <div className="md:flex-start cursor-pointer">
        <h1 className="text-green-300 text-5xl">HODLINFO</h1>
        <h2 className="flex text-gray-400 my-2">
          Powered By <p className="text-green-300 ml-1">Finstreet</p>
        </h2>
      </div>

      {/* Centre */}
      <div className="flex mx-auto">
        <div className="text-sm text-white m-5">
          <select
            className="bg-gray-600 rounded-2xl p-2 px-4 cursor-pointer"
            name="inr"
            id=""
          >
            <option value="inr">INR</option>
          </select>
        </div>
        <div className="text-sm text-white m-5">
          <select
            className="bg-gray-600 rounded-2xl p-2 px-4 cursor-pointer"
            name="crypto"
            id=""
          >
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
          </select>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center">
        <div className="rounded-full text-sm text-green-300 border-2 border-green-300 p-2 m-2">
          {timer}
        </div>
        <div className="flex text-white mx-2 items-center bg-green-400 p-2 rounded-2xl cursor-pointer hover:bg-green-500">
          <FaTelegramPlane className="h-6 text-lg" />
          <p className="text-sm">Connect Telegram</p>
        </div>
        <div
          className="w-16 h-10 flex items-center bg-gray-300 rounded-full"
          onClick={onClickHandleToggle}
        >
          <div
            className={`bg-white w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out ${
              toggle && `translate-x-6 bg-green-500`
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Header;

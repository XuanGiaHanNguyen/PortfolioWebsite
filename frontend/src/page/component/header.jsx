import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../index.css";
import { MenuIcon } from '../../assets/icon';
import HeaderPG from '../../assets/Header.png';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-full" style={{ margin: 0, padding: 0 }}> 
      {/* Navigation Bar */}
      <div
        className="w-screen pt-3 pb-4 flex flex-row-reverse gap-8 pr-5 lex"
        style={{ backgroundColor: '#728099' }}
      >
        <button onClick={() => navigate("/")}>{MenuIcon}</button>
        <a className="font-bold text-gray-100 group" onClick={() => navigate("/")}>Contact <div class="bg-gray-200 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div></a>
        <a className="font-bold text-gray-100 group" onClick={() => navigate("/")}>Projects <div class="bg-gray-200 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div></a>
        <a className="font-bold text-gray-100 group" onClick={() => navigate("/")}>Experience <div class="bg-gray-200 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div></a>
        <a className="font-bold text-gray-100 group" onClick={() => navigate("/")}>Home <div class="bg-gray-200 h-[3px] w-0 group-hover:w-full transition-all duration-500"></div></a>
      </div>

      {/* Header Image */}
      <div
        className="w-full"
        style={{
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <img
                src={HeaderPG}
                alt="Header"
                style={{
                width: "100%",
                }}
            />
    </div>
    </div>
  );
}

export default Header;

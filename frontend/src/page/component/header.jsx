import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../index.css";
import { MenuIcon } from '../../assets/icon';
import HeaderPG from '../../assets/Header.png';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen" style={{ margin: 0, padding: 0 }}> 
      {/* Navigation Bar */}
      <div
        className="w-screen py-3 flex flex-row-reverse gap-5 pr-5"
        style={{ backgroundColor: '#728099' }}
      >
        <button onClick={() => navigate("/")}>{MenuIcon}</button>
        <button className="font-bold text-gray-100" onClick={() => navigate("/")}>Contact</button>
        <button className="font-bold text-gray-100" onClick={() => navigate("/")}>Projects</button>
        <button className="font-bold text-gray-100" onClick={() => navigate("/")}>Experience</button>
        <button className="font-bold text-gray-100" onClick={() => navigate("/")}>Home</button>
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
                height: "auto", // Maintains aspect ratio
                }}
            />
    </div>
    </div>
  );
}

export default Header;

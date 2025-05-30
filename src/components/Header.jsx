import React from 'react';
import blogo from '../assets/Ellipse.png';
import notification from '../assets/notification.png';
import logout from '../assets/logout.png';
import homelogo from '../assets/homelogo.png';
import impaaslogo from "../assets/impaaslogo.png";
import hamburger from "../assets/icons/hamburger.png";

export default function Header({ toggleSidebar, sidebarOpen }) {
  return (
    <header>
      {/* Large screens header */}
      <div className="hidden lg:flex w-full justify-between bg-white p-4 mb-3 h-[65px]">
        {/* Left: Logo & Profile Info */}
        <div className="flex items-start gap-3">
          <img src={blogo} alt="logo" className="w-10 h-10 rounded-full" />
          <div className="leading-tight">
            <h1 className="font-bold font-proxima text-black text-sm">Achyutam motors</h1>
            <p className="text-xs mt-1 text-gray-500">
              OEM <span className="text-red-500">•</span> Last logged in: DD/MM/YYYY at HH:MM
            </p>
          </div>
        </div>

        {/* Right: Navigation Buttons */}
        <div className="flex items-end gap-5 text-red-700 text-sm mr-2 self-end">
          <button className="flex items-center gap-1 cursor-pointer hover:text-red-900 transition">
            <img src={homelogo} alt="dashboard" className="w-4 h-4" />
            Dashboard
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-red-900 transition">
            <img src={notification} alt="notifications" className="w-4 h-4" />
            Notifications
          </button>
          <button className="flex items-center gap-1 cursor-pointer hover:text-red-900 transition">
            <img src={logout} alt="logout" className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Small and Medium screens header (mobile version) */}
      <div
        className={`lg:hidden w-full p-4 mb-3 h-[65px] justify-between flex items-center ${sidebarOpen ? 'bg-white' : 'bg-[#962210]'}`}
      >
        <img src={impaaslogo} alt="" className="w-[132px] h-[32px]" />

        <button onClick={toggleSidebar}>
          <img src={hamburger} alt="" className="w-[20px] h-[14px]" />
        </button>
      </div>
    </header>
  );
}

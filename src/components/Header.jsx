import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-600 px-3 py-1 rounded"
      : "text-blue-600 px-3 py-1 rounded hover:bg-blue-100";

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 text-white font-bold rounded flex items-center justify-center">
            JC
          </div>
          <div>
            <div className="text-lg font-semibold">Jarurat Care</div>
            <div className="text-sm text-gray-500">Patient Records Dashboard</div>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/patients" className={linkClass}>Patients</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

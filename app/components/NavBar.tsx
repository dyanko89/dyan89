import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 py-4 px-6 flex items-center justify-between z-50 shadow-md">
      <h1 className="text-2xl font-bold text-[#E06033]">LOGO</h1>
      
      {/* Navigation Links */}
      <ul className="hidden md:flex flex-1 justify-center space-x-6 text-gray-300 uppercase text-sm">
        <li className="hover:text-white transition">Home</li>
        <li className="hover:text-white transition">About</li>
        <li className="hover:text-white transition">Projects</li>
        <li className="hover:text-white transition">Contact</li>
      </ul>
      
      {/* Search Box */}
      <div className="bg-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-400 hover:bg-gray-700 transition hidden md:flex">
        <span className="text-sm">Search</span>
        🔍
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 py-4 px-6 flex flex-col space-y-4 text-white shadow-lg md:hidden">
          <a href="#" className="hover:text-[#E06033]">Home</a>
          <a href="#" className="hover:text-[#E06033]">About</a>
          <a href="#" className="hover:text-[#E06033]">Projects</a>
          <a href="#" className="hover:text-[#E06033]">Contact</a>
        </div>
      )}
    </nav>
  );
}

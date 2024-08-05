import React, { useState } from "react";
import Link from "next/link";

const NavItem = ({ href, text, active }) => {
  return (
    <Link href={href}>
      <a className={`nav__item ${active ? "active" : ""}`}>{text}</a>
    </Link>
  );
};

export default function NavBar() {
  const [activeIdx, setActiveIdx] = useState(0);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Projects", href: "/projects" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Your Logo</div>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
              {navItems.map((item, idx) => (
                <NavItem
                  key={idx}
                  href={item.href}
                  text={item.text}
                  active={idx === activeIdx}
                  onClick={() => setActiveIdx(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

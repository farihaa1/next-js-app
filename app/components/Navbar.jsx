import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-center items-center gap-4 text-lg">
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
          <li><Link href='/about'>About us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

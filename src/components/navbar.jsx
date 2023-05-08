import React from "react";
import profile from "../img/profile.webp";
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-transparant sticky-top mb-10'>
      <div className='container-fluid'>
        <div className='title'>
          <img className='profile' src={profile} alt='Profile' loading='lazy' />
          <a className='navbar-brand text-white' href='#'>
            Arif
          </a>
        </div>
        <div className='navbar-nav ms-auto'>
          <a className='nav-link ' href='#about'>
            About
          </a>
          <a className='nav-link ' href='#Projects'>
            Projects
          </a>
          <a className='nav-link ' href='#Contact'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

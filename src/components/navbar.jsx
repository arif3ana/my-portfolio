import React from "react";
export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-transparant sticky-top mb-10'>
      <div className='container-fluid'>
        <div className='title'>
          {/* <img className='profile' src='...' alt='Profile' /> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='bi bi-person-circle profile'
            viewBox='0 0 16 16'>
            <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
            <path
              fillRule='evenodd'
              d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
            />
          </svg>
          <h1 className='navbar-brand text-white' href='#'>
            Arif
          </h1>
        </div>

        <div className='navbar-nav ms-auto'>
          <a className='nav-link text-white' href='#'>
            About
          </a>
          <a className='nav-link text-white' href='#'>
            Project
          </a>
          <a className='nav-link text-white' href='#'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

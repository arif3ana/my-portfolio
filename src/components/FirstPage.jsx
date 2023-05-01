import React from "react";
export default function FirstPage() {
  return (
    <div className='firstPage'>
      <div className='photo-profile'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='bi bi-person-circle main-profile'
          viewBox='0 0 16 16'>
          <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
          <path
            fillRule='evenodd'
            d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
          />
        </svg>
      </div>
      <h1 className='main-text'>
        <span className='hi'>Hi, i am</span>
        <br />
        <span className='name'>Arif triana</span>
      </h1>
      <p className='tag'>Web Developer</p>
      <p className='article'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>

      <div className='icons'>
        <a href='#'>
          <i className='bi bi-instagram'></i>
        </a>
        <a href='#'>
          <i className='bi bi-linkedin'></i>
        </a>
        <a href='#'>
          <i className='bi bi-github'></i>
        </a>
      </div>
    </div>
  );
}

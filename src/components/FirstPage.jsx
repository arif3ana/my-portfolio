import React from "react";
import profile from "../img/profile.webp";
export default function FirstPage() {
  return (
    <div className='firstPage'>
      <img src={profile} alt='profile picture' className='main-profile' />
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

import React from "react";
import profile from "../img/profile.webp";
export default function FirstPage() {
  return (
    <div className='firstPage'>
      <img
        src={profile}
        alt='profile vector'
        className='main-profile'
        loading='lazy'
      />
      <h1 className='main-text' data-aos='fade-up' data-aos-duration='3000'>
        <span className='hi'>Hi, i am</span>
        <br />
        <span className='name'>Arif triana</span>
      </h1>
      <p className='tag' data-aos='fade-up' data-aos-duration='2000'>
        Web Developer
      </p>
      <p className='article' data-aos='fade-up' data-aos-duration='1000'>
        As a web developer, i create and maintain websites, i use programming
        languages such as html, css, and javascript to build the structure,
        design, and functionality of a website.
      </p>
      <div className='icons'>
        <a
          href='https://www.instagram.com/arif.3ana/'
          data-aos='fade-left'
          data-aos-duration='1000'
          target='_blank'>
          <i className='bi bi-instagram'></i>
        </a>
        <a
          href='https://linkedin.com/in/arif-triana-48bb74254'
          data-aos='fade-left'
          data-aos-duration='2000'
          target='_blank'>
          <i className='bi bi-linkedin'></i>
        </a>
        <a
          href='https://github.com/arif3ana'
          data-aos='fade-left'
          data-aos-duration='3000'
          target='_blank'>
          <i className='bi bi-github'></i>
        </a>
      </div>
    </div>
  );
}

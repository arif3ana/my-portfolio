import React, { useEffect, useState } from "react";
import html from "../img/html.png";
import css from "../img/CSS.png";
import js from "../img/js.png";
import php from "../img/php.png";
import react from "../img/React.png";
import laravel from "../img/laravel.png";
import { Link } from "react-router-dom";
export default function About() {
  const who = (
    <p className='about-article'>
      <span className='hello'>Hello, I'm Arif Triana</span>, the top software
      engineering graduate from high school. I am an active member of several
      organizations and have completed an internship at DKIS (Agency of
      Communication, Informatics, and Statistics), where I gained valuable
      insights into technology. I specialize in full-stack development with a
      focus on both frontend and backend website development. I am committed to
      continuous learning and innovation in this field.{" "}
      <Link to='/show-about' className='show'>
        .....Read More
      </Link>
    </p>
  );

  const what = (
    <p className='about-article'>
      I am an end-to-end website development. My responsibilities include
      website planning, design and development, both front-end (user interface)
      and back-end (logic and database). I work closely with clients to realize
      their vision, ensuring that the site is fit for purpose, performs
      optimally, and is secure. My goal is to deliver responsive and optimized
      web solutions to my clients.
    </p>
  );

  const [isParagraf, setParagraf] = useState(who);

  useEffect(() => {
    document.querySelector("#btn-who").classList.add("aktip");
  }, []);

  const introduceHandle = () => {
    setParagraf(who);
    document.querySelector("#btn-what").classList.remove("aktip");
    document.querySelector("#btn-who").classList.add("aktip");
  };

  const myWorkHandle = () => {
    setParagraf(what);
    document.querySelector("#btn-what").classList.add("aktip");
    document.querySelector("#btn-who").classList.remove("aktip");
  };

  return (
    <div
      className='about container'
      data-aos='fade-up'
      data-aos-duration='1300'
      data-aos-anchor-placement='top-center'>
      <h3 className='article-title'>ABOUT ME</h3>
      <div className='about-content'>
        <ul className='nav nav-about'>
          <li className='nav-item'>
            <button
              className=' about-list'
              id='btn-who'
              onClick={introduceHandle}>
              Who i am
            </button>
          </li>
          <li className='nav-item'>
            <button
              className=' about-list'
              id='btn-what'
              onClick={myWorkHandle}>
              What i do
            </button>
          </li>
        </ul>
        <div className='nav-content'>{isParagraf}</div>
      </div>

      <div className='section-button'>
        <a className='btn-hire' href='#contact'>
          HIRE ME
        </a>
        <a href='file' download className='btn-resume'>
          RESUME
        </a>
      </div>

      <p className='title-skill' data-aos='fade-up' data-aos-duration='500'>
        My Skills
      </p>
      <ul className='skills'>
        <li data-aos='zoom-in-up'>
          <img src={html} alt='logo html' className='logo-img' />
          <p>HTML</p>
        </li>
        <li data-aos='zoom-in-up'>
          <img src={css} alt='logo html' className='logo-img' />
          <p>CSS</p>
        </li>
        <li data-aos='zoom-in-up'>
          <img src={js} alt='logo html' className='logo-img' />
          <p>JAVASCRIPT</p>
        </li>
        <li data-aos='zoom-in-up'>
          <img src={php} alt='logo html' className='logo-img' />
          <p>PHP</p>
        </li>
        <li data-aos='zoom-in-up'>
          <img src={react} alt='logo html' className='logo-img' />
          <p>React.js</p>
        </li>
        <li data-aos='zoom-in-up'>
          <img src={laravel} alt='logo html' className='logo-img' />
          <p>Laravel</p>
        </li>
      </ul>
    </div>
  );
}

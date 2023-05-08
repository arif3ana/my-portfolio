import React from "react";
export default function About() {
  return (
    <div className='about' data-aos='fade-up' data-aos-duration='1200'>
      <h3 className='article-title'>About</h3>
      <p className='about-article'>
        Hello, i'm Arif Triana from Indonesia and i'm passionate about
        developing websites. My interest in web development began when i was in
        high school, where i started learning various things about it. My hope
        in the future is to be able to create a website that can solve problems
        and be useful for everyone.
        <br />
        To do this, i use programming languages such as html, css, and
        javascript to build a website's structure, design, and functionality. My
        job is to ensure that the website run smoothly, load quickly, looks
        great on all devices. I also work with database, APIs, amd other
        technologies to ensure that the website can interact with other systems
        and services.
        <br />
        Ultimately, my goal is to create a website that provides visitor with
        user-freandly and engaging experience. i'm always looking to learn new
        things and explore new tools, like PHP and Laravel, to enhance my skills
        and create even better websites.
      </p>

      <p className='title-skill'>My Skills</p>
      <ul className='skills'>
        <li>
          <p>HTML</p>
        </li>
        <li>
          <p>CSS</p>
        </li>
        <li>
          <p>JAVASCRIPT</p>
        </li>
        <li>
          <p>PHP</p>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
export default function About() {
  return (
    <div className='about' data-aos='fade-up' data-aos-duration='1200'>
      <h3 className='article-title'>About</h3>
      <div className='about-article'>
        <p>
          Hello, I'm Arif Triana from Indonesia and I'm passionate about website
          development. My interest in web development started when I was in high
          school, where I started to learn different things about it. I had an
          internship experience at DKIS (Dinas komunikasi, informatika dan
          statistik) together with two of my friends when I was in high school
          and I've attended a bootcamp event at Dicoding. Although I have
          limited experience in the world of web development, I am constantly
          striving to learn and improve my skills, so I would like to explore
          further.
        </p>
        <p>
          I use programming languages such as html, css, and javascript to
          create the structure, design, and functionality of websites. My job is
          to make sure that the websites I create run smoothly, load quickly,
          and look good on all devices. I also work with databases, APIs, and
          other technologies to make sure the website can interact with other
          systems and services.
        </p>
        <p>
          My future goals and expectations are to create websites that provide
          visitors with a user-friendly, engaging, problem-solving, and useful
          experience. I feel good when I can create a website that not only
          works well, but also provides an enjoyable experience for its
          visitors. I want to create a website that is not only aesthetically
          pleasing, but also beneficial to society. I am always eager to learn
          new things and explore new tools, such as PHP and Laravel, to improve
          my skills and create better websites.
        </p>
      </div>

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

import React from "react";
import profile from "../img/profile.webp";
import Button from "./Button";
export default function About() {
  return (
    <div
      className='about container'
      data-aos='fade-up'
      data-aos-duration='1200'>
      <h3 className='article-title'>ABOUT ME</h3>
      <figure className='about-content'>
        <img src={profile} alt='profile vector' />
        <figcaption className='about-article'>
          <span className='hello'>Hello, I am Arif Triana</span>, the top
          software engineering graduate from high school. I am an active member
          of several organizations and have completed an internship at DKIS
          (Agency of Communication, Informatics, and Statistics), where I gained
          valuable insights into technology. I specialize in full-stack
          development with a focus on both frontend and backend website
          development. I am committed to continuous learning and innovation in
          this field.{" "}
          <a href='#' className='show'>
            Show More
          </a>
        </figcaption>
      </figure>
      <div className='section-button'>
        <Button type={"submit"} className={"btn-hire"} content={"HIRE ME"} />
        <a href='' download className='btn-resume'>
          RESUME
        </a>
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

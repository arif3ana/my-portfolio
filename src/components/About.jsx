import React from "react";
export default function About() {
  return (
    <div className='about'>
      <h3 className='article-title'>About</h3>
      <p className='about-article'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident
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

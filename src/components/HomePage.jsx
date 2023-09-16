import React from "react";
import profile from "../img/profile.webp";
import SosialIcons from "./SosialIcons";
export default function FirstPage({
  instagramClicked,
  linkedlinClicked,
  githubClicked,
}) {
  return (
    <div className='container firstPage'>
      <div className='image'>
        <img
          src={profile}
          alt='photo profile arif triana'
          className='main-profile'
          loading='lazy'
        />
      </div>
      <div className='article-content container'>
        <p className='main-text' data-aos='fade-up' data-aos-duration='3000'>
          <span className='hi'>Hello</span>
          <span className='intro'>
            I'm <strong className='name'>Arif triana</strong>
          </span>
          <span className='tag'>Web Developer</span>
        </p>
        <p className='article' data-aos='fade-up' data-aos-duration='1000'>
          I create attractive and functional websites for your business, that
          providing a great digital experience.
        </p>
        <SosialIcons
          className={"hero"}
          githubClicked={githubClicked}
          linkedlinClicked={linkedlinClicked}
          instagramClicked={instagramClicked}
        />
      </div>
    </div>
  );
}

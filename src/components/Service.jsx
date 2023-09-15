import React from "react";
import developer from "../img/developer.png";
import design from "../img/design.png";
export default function Service() {
  return (
    <div className='service container'>
      <h3 className='service-title'>SERVICES</h3>
      <div className='service-content container'>
        <div
          className='service-body'
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          data-aos-duration='1500'>
          <img src={developer} alt='developer icon ' loading='lazy' />
          <p className='title'>Web Developer</p>
          <p className='description'>
            Development, programming and maintenance of the website to ensure
            its optimal performance and a good user experience.
          </p>
        </div>
        <div
          className='service-body'
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          data-aos-duration='2000'>
          <img src={design} alt='web design icon ' loading='lazy' />
          <p className='title'>Web Design</p>
          <p className='description'>
            Design the site's appearance and interface to create an
            aesthetically pleasing, easy-to-navigate, responsive user
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

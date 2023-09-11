import React from "react";
import developer from "../img/developer.png";
import design from "../img/design.png";
export default function Service() {
  return (
    <div className='service container'>
      <h3 className='service-title'>SERVICES</h3>
      <div className='service-content container'>
        <div className='service-body' data-aos='fade-right'>
          <img src={developer} alt='developer icon ' loading='lazy' />
          <p className='title'>Web Developer</p>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos rem
            necessitatibus temporibus? Fugit iusto dolor possimus.
          </p>
        </div>
        <div className='service-body' data-aos='fade-left'>
          <img src={design} alt='web design icon ' loading='lazy' />
          <p className='title'>Web Design</p>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos rem
            necessitatibus temporibus? Fugit iusto dolor possimus.
          </p>
        </div>
      </div>
    </div>
  );
}

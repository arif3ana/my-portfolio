import React from "react";
import developer from "../img/developer.png";
import design from "../img/design.png";
export default function PagePlus() {
  return (
    <div className='i-do'>
      <h3 className='second-title'>What i do</h3>
      <div className='row'>
        <div className='col' data-aos='fade-right'>
          <img src={developer} alt='developer icon ' loading='lazy' />
          <p>
            Web <br />
            Developer
          </p>
        </div>
        <div className='col' data-aos='fade-left'>
          <img src={design} alt='web design icon ' loading='lazy' />
          <p>
            Web <br />
            Design
          </p>
        </div>
      </div>
    </div>
  );
}

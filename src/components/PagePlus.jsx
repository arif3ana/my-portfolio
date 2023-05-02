import React from "react";
import developer from "../img/developer.png";
import design from "../img/design.png";
export default function PagePlus() {
  return (
    <div className='i-do'>
      <h3 className='second-title'>What i do</h3>

      <div className='row'>
        <div className='col'>
          <img src={developer} alt='developer icon ' />
          <p>
            Web <br />
            Developer
          </p>
        </div>
        <div className='col'>
          <img src={design} alt='web design icon ' />
          <p>
            Web <br />
            Design
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import dumy from "../img/dumy.jpg";
export default function PAgeReview() {
  return (
    <div className='review'>
      <h3 className='title'>"</h3>
      <div className='content'>
        <img src={dumy} alt='' />
        <div className='article-review'>
          <p>testimonial</p>
          <h3 className='title-page'>Client Review</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <hr />
          <h4 className='client-name'>Client Name</h4>
          <p>Position | Company name</p>
        </div>
      </div>
    </div>
  );
}

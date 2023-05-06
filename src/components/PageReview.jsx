import React from "react";
import dumy from "../img/dumy.jpg";
export default function PAgeReview({ ...props }) {
  return (
    <div className='review'>
      <h3 className='title'>"</h3>
      <div className='content'>
        <img src={!props.image ? dumy : props.image} alt={props.position} />
        <div className='article-review'>
          <p>testimonial</p>
          <h3 className='title-page'>Client Review</h3>
          <p>{props.content}</p>
          <hr />
          <h4 className='client-name'>{props.name}</h4>
          <p>{props.position}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import web from "../img/web.webp";
export default function Projects() {
  return (
    <div className='projects'>
      <h3 className='article-project-title'>My Projects</h3>
      <div className='card-projects'>
        {[1, 2, 3, 4].map((e) => (
          <div className='card'>
            <img src={web} className='card-img-top' alt='Website developer' />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <a href='#detail'>Detail project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

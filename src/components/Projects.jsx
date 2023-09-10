import React from "react";
import web from "../img/web.webp";
import mydiary from "../img/mydiary-project.WebP";
import todoList from "../img/simple-todoList.webp";
import Modal from "./Modal";
import { projectData } from "../utils/projectsData";
export default function Projects() {
  return (
    <div className='projects'>
      <h3 className='article-project-title'>PORTFOLIO</h3>
      <div className='card-projects'>
        {projectData.map((data, index) => (
          <>
            <div className='card' key={data.id}>
              {index === 1 ? (
                <img
                  src={mydiary}
                  className='card-img-top img-box'
                  alt={data.alternativeText}
                  loading='lazy'
                />
              ) : index === 2 ? (
                <img
                  src={todoList}
                  className='card-img-top img-box'
                  alt={data.alternativeText}
                  loading='lazy'
                />
              ) : (
                <img
                  src={web}
                  className='card-img-top img-box'
                  alt={data.alternativeText}
                />
              )}
              <div className='card-body'>
                <h5 className='card-title'>{data.title}</h5>
                <button
                  type='button'
                  className='btn btn-link'
                  data-bs-toggle='modal'
                  data-bs-target={`#detailProject-${data.id}`}>
                  Explore project
                </button>
              </div>
            </div>
            <Modal data={data} index={index} />
          </>
        ))}
      </div>
    </div>
  );
}

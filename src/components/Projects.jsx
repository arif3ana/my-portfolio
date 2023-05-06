import React from "react";
import web from "../img/web.webp";
import { projectData } from "../utils/projectsData";
export default function Projects() {
  return (
    <div className='projects'>
      <h3 className='article-project-title'>My Projects</h3>
      <div className='card-projects'>
        {projectData.map((data) => (
          <div className='card' key={data.id}>
            <img
              src={!data.pict ? web : data.pict}
              className='card-img-top'
              alt={data.alternativeText}
            />
            <div className='card-body'>
              <h5 className='card-title'>{data.title}</h5>
              <button
                type='button'
                className='btn btn-link'
                data-bs-toggle='modal'
                data-bs-target={`#detailProject-${data.id}`}>
                Detail project
              </button>
            </div>
          </div>
        ))}

        {projectData.map((detail) => {
          if (!detail.description) {
            return (
              <div
                className='modal fade'
                id={`detailProject-${detail.id}`}
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h1 className='modal-title fs-4' id='exampleModalLabel'>
                        {detail.title}
                      </h1>
                      <button
                        type='button'
                        className='close'
                        data-bs-dismiss='modal'
                        aria-label='Close'>
                        <i className='bi bi-x-lg'></i>
                      </button>
                    </div>

                    <div className='modal-body'>
                      <p className='modal-p'>
                        The project is still the develoment process
                      </p>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        class='btn btn-secondary'
                        data-bs-dismiss='modal'>
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div
              className='modal fade'
              id={`detailProject-${detail.id}`}
              tabIndex='-1'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'>
              <div className='modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h1 className='modal-title fs-4' id='exampleModalLabel'>
                      {detail.title}
                    </h1>
                    <button
                      type='button'
                      className='close'
                      data-bs-dismiss='modal'
                      aria-label='Close'>
                      <i className='bi bi-x-lg'></i>
                    </button>
                  </div>

                  <div className='modal-body'>
                    <img
                      src={!detail.pict ? web : detail.pict}
                      className='card-img-top'
                      alt={detail.alternativeText}
                    />
                    <p className='modal-article'>{detail.description}</p>
                  </div>
                  <div className='modal-footer-a'>
                    <a type='button' className='btn-show'>
                      Let's show project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

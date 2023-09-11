import React from "react";
import web from "../img/web.webp";
// import mydiary from "../img/mydiary-project.jpg";
import Modal from "./Modal";
import Card from "./Card";
import Button from "./Button";
import { projectData } from "../utils/projectsData";
export default function Projects() {
  return (
    <div className='projects container'>
      <h3 className='article-project-title'>PORTFOLIO</h3>
      <div className='list-project'>
        {projectData.map((proyek, index) => (
          <>
            <Card
              key={`arif-${proyek.id}`}
              id={proyek.id}
              classContainer={"projects"}
              image={proyek.image}
              classImage={"img-box"}
              classBotton={"card-btn"}
              title={proyek.title}
              content={proyek.description.split(" ").slice(0, 49).join(" ")}
            />
            <Modal data={proyek} index={index} />
          </>
        ))}
      </div>
      <div className='btn-view-project'>
        <a href='#' className='btn-view'>
          View all
        </a>
      </div>
    </div>
  );
}

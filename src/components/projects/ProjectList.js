import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from "react-router-dom";
const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map((project,index) => {
        return (
          <Link to={'/project/'+project.id}>
            <ProjectSummary project={project}  />
          </Link>
        )
      })}  
    </div>
  )
}

export default ProjectList

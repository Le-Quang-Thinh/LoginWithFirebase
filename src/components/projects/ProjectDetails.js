import React,{Component} from 'react'


class ProjectDetails extends Component {

  render() { 
    const {project} = this.props
    console.log(project)
    if(project){
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by {project.authorLastName} {project.authorFirstName} </div>
              {/* <div>{project.createdAt}</div> */}
            </div>
          </div>
        </div>
      )
  } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      )
    }
  }
}
 

export default ProjectDetails
    // if (this.props.project) {

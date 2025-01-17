import React from 'react'
import Project1 from './Project1.png'
import Project2 from './Project2.png'
import Project3 from './Project3.png'
import './Project.css'
function Projects() {
  return (
<>
  <div className="projects">
    <h1>Projects</h1>
    <div className="project">
    <div className='repoLink'>
    <h2>Project 1 : OwnField</h2>
    <div className='repo'>
    <a href="ownfield.netlify.app" target="_blank" ><img src='https://img.icons8.com/?size=100&id=B3YslypXlynV&format=png&color=000000' alt='Link'/></a>
    <a href="https://github.com/jitendra-sudo/OwnField" target="_blank" ><img src='https://img.icons8.com/?size=100&id=12599&format=png&color=000000' alt='Link'/></a>
    </div>
    </div>
    <div className='ProjectImg'>
      <img src={Project1} alt='Project shot'/>
      <img src={Project2} alt='Project shot'/>
      <img src={Project3} alt='Project shot'/>
    </div>
    
     <p> <title>About project</title></p>
    </div>
  </div>
</>
  )
}

export default Projects

import React from 'react'
import ProjectItem from '../components/ProjectItem';
import Monitoring from '../assets/timeMonitoring.png';
import quizapp from '../assets/quizapp.png';
import qrcode from '../assets/qrcode scanner.png';
import timeMonitoring from '../assets/timeMonitoring.png';
import "../styles/Project.css"

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name="Time Monitoring System" image={Monitoring}/>
        <ProjectItem  name="QrCode Scanner" image={qrcode}/>
        <ProjectItem  name="quizapp" image={quizapp}/>
      </div>
    </div>
  )
}

export default Projects
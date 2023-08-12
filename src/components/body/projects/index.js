import React from 'react';
import "./projects.css";
import ProjectCard from './project-card';
import { ProjectData } from '../../data/projects';
import Separator from '../../com/separator';

function Projects() {
  const data = ProjectData;
  return <div className='project'>
  <Separator />
  <label className='section-title'> Projects</label>
    <div>
      {data.map((project)  =>{
        return <ProjectCard project={project}/>
      })}
    </div>
  </div>
 
}

export default Projects
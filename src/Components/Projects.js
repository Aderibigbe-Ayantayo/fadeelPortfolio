import React from 'react';

const Projects = () => {
    const projectList = [
        { title: 'Task Manager App', description: 'A task management app built using React, Express, MongoDb and Node.js'},
        { title: 'Movie App', description: 'A movie listing app built with React and Redux' },
        { title: 'E-Commerce Website', description: 'An online platform where businesses or individuals can buy and sell goods or services built using WordPress'}
    ];

    return (
        <div className="projects">
          <h2>Projects</h2>
          <ul>
            {projectList.map((project, index) => (
              <li key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default Projects;
import React, { useState } from 'react';
import storySquadScreenshot from './screenshots/ss_sc.png';
import curioScreenshot from './screenshots/collectibles.png';
import carpentryScreenshot from './screenshots/carpentry.png';
import './index.css';

const Projects = (props) => {
    const [projects, setProjects] = useState([
        {
            name: 'Curio',
            credentials: ['testing', '123456789'],
            githubLink: 'https://github.com/curio-app',
            deployedLink: 'https://curio-app.netlify.com/',
            skills: ['React', 'Styled-Components', 'JavaScript'],
            comments: 'I had a blast helping construct and design the front end for Curio, an app designed to showcase your collectibles.',
            screenshot: curioScreenshot
        },
        {
            name: 'Story Squad',
            credentials: ['testing@gmail.com', '123456789'],
            githubLink: 'https://github.com/Lambda-School-Labs/story-squad-fe',
            deployedLink: 'https://master.d37ier1k83jxk6.amplifyapp.com/',
            skills: ['React', 'TypeScript', 'Material UI'],
            comments: 'Story Squad is a game that encourages children to read, write, and draw through competition with peers.',
            screenshot: storySquadScreenshot
        },
        {
            name: 'Jon\'s Carpentry',
            credentials: '',
            githubLink: 'https://github.com/allie-rae/jons-construction-website',
            deployedLink: 'https://construction-remake.now.sh/',
            skills: ['React', 'CSS', 'JavaScript', 'Responsive Design'],
            comments: 'A marketing page I built and designed for my brother\'s construction business.',
            screenshot: carpentryScreenshot
        },
        // songSuggester: {
        //     githubLink: 'https://github.com/allie-rae/spotify-frontend',
        //     deployedLink: 'https://github.com/allie-rae/spotify-frontend',
        //     skills: ['Node', 'Express', 'React', 'Styled-Components', 'Formik', 'Yup', 'JWT', 'Authentication', 'Custom middleware'],
        //     comments: 'I built both the font end and the back end of this song suggester app.',
        //     screenshot: ''
        // },
    ])
     
    console.log(projects)

    return (<div className="projects-header-wrapper" ref={props.projectsRef}>
    <h3>Projects</h3>
    <div className="projects-wrapper">
        {projects.map(project => {
            return (
                <div className="project-card-wrapper">
                    <a href={project.deployedLink}>
                        <div className="project-card-img" style={{ backgroundImage:`url(${project.screenshot})`}}></div>
                    </a>
                    <div classname="project-card-txt">
                        <a className="project-link" href={project.deployedLink}>
                            <h4 className="project-card-h4">{project.name}</h4>
                        </a>
                            <p className="project-p-creds">{project.credentials ? <div><p className="project-p-creds">Username: {project.credentials[0]} <br /> Password: {project.credentials[1]}</p></div> : ""}</p>
                            <ul>
                                {project.skills.map(skill => {
                                return (<li>{skill}</li>)})
                                }
                            </ul>
                            <p className="project-p">{project.comments}</p>
                            <a className="project-link" href={project.githubLink}>Github</a>
                            <a className="project-link" href={project.deployedLink}>Deployed</a>
                    </div>
                </div>
        )})}
    </div>
            </div>)
}

export default Projects;
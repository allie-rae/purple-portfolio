import React, { useState } from 'react';
import storySquadScreenshot from './screenshots/ss_sc.png';
import curioScreenshot from './screenshots/collectibles.png';
import carpentryScreenshot from './screenshots/carpentry.png';
import './index.css';

const Projects = (props) => {
    const [projects, setProjects] = useState([
        {
            name: 'Curio',
            githubLink: 'https://github.com/curio-app',
            deployedLink: 'https://curio-app.netlify.com/',
            skills: ['React', 'Styled-Components', 'JavaScript'],
            comments: 'I had a blast helping construct and design the front end for Curio, an app designed to showcase your collectibles.',
            screenshot: curioScreenshot
        },
        {
            name: 'Jon\'s Carpentry',
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
        {
            name: 'Story Squad',
            githubLink: 'https://github.com/Lambda-School-Labs/story-squad-fe',
            deployedLink: 'https://master.d37ier1k83jxk6.amplifyapp.com/',
            skills: ['React', 'TypeScript', 'Material UI'],
            comments: 'Story Squad is a game that encourages children to read, write, and draw through competition with peers.',
            screenshot: storySquadScreenshot
        },
    ])
     
    console.log(projects)

    return (<div className="projects-header-wrapper" ref={props.projectsRef}>
    <h3>Projects</h3>
    <div className="projects-wrapper">
        {projects.map(project => {
            return (
                <div className="project-card-wrapper">
                    <div className="project-card-img" style={{ backgroundImage:`url(${project.screenshot})`}}></div>
                    <div classname="project-card-txt">
                        <h4 className="project-card-h4">{project.name}</h4>
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
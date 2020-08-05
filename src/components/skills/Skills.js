import React, { useState } from 'react';
import './index.css';


const Skills = () => {

    const [skills, setSkills] = useState([
        ['React', 'https://reactjs.org/docs/getting-started.html'], 
        ['Redux', 'https://redux.js.org/'], 
        ['Node', 'https://nodejs.org/en/about/'], 
        ['Express', 'https://expressjs.com/'], 
        ['JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'], 
        ['HTML', 'https://developer.mozilla.org/en-US/docs/Web/HTML'], 
        ['CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS'], 
        ['Responsive Design', 'https://en.wikipedia.org/wiki/Responsive_web_design'], 
        ['Context API', 'https://reactjs.org/docs/context.html'], 
        ['SQL', 'https://www.postgresql.org/docs/9.3/sql.html'], 
        ['Knex', 'http://knexjs.org/'],
        ['Axios', 'https://www.npmjs.com/package/axios'], 
        ['Formik', 'https://formik.org/docs/overview'], 
        ['Yup', 'https://github.com/jquense/yup'], 
        ['Bootstrap', 'https://getbootstrap.com/'], 
        ['Reactstrap', 'https://reactstrap.github.io/'], 
        ['Styled-Componenets', 'https://styled-components.com/'], 
        ['Client-Side Routing', 'https://reactrouter.com/web/guides/quick-start'], 
        ['JSON Web Tokens', 'https://jwt.io/'], 
        ['TypeScript', 'https://www.typescriptlang.org/docs/'],
        ['Relational Database Design', 'https://www3.ntu.edu.sg/home/ehchua/programming/sql/Relational_Database_Design.html'],
        ['Postman', 'https://www.postman.com/'],
        ['Insomnia', 'https://insomnia.rest/'],
        ['Docker', 'https://www.docker.com/'],
        ['Python', 'https://docs.python.org/3/'],
        ['Material UI', 'https://material-ui.com/']
    ])

    return (
        <div className="skills-container">
        <h3>Skills</h3>
        {skills.map(skill => {
            return <a href={skill[1]} target="_blank"><div className="skill">{skill[0]}</div></a>
        })}
        </div>
    )
}

export default Skills;
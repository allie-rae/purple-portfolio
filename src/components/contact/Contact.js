import React from 'react';
import './index.css';

const Contact = (props) => {
    return (<div className="contact-wrapper" ref={props.contactRef}>
        <h3>Contact Me</h3>
        <div>
            <a href="mailto:allierob93@gmail.com?subject=I saw your portfolio">
                <i class="fas fa-envelope-square"></i>
            </a>
            <a href="https://github.com/allie-rae" target="_blank">
                <i class="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/allie-robinson/" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>
    </div>)
}

export default Contact;
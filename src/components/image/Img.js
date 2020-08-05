import React from 'react';
import './index.css';

const Img = (props) => {
    return (
        <div className="img-container" ref={props.aboutRef}>
        <div className="big-img"></div>
        <div className="img-txt">
            <h1>Allie Robinson</h1>
            <h2>Full Stack Software Developer</h2>
            <h3 className="location-h3">Hoffman Estates, Illinois</h3>
            <p className="quote">"Not all those who wander are lost."</p>
            <p className="author">-- J.R.R. Tolkien</p>
            <p className="about-txt">
                I'm an enthusiastic person with a love for creativity and beautiful design. I not only want to make apps that function, I want to make them look gorgeous doing it.
            </p>
            <p className="about-txt">
                I have a Bachelor of Science in General Biology from <a href="wsu.edu" target="_blank">Washington State University</a> and have studied full stack web development intensively at <a href="lambdaschool.com" target="_blank">Lambda School</a> for over a year.
            </p>
            <p className="about-txt">
                I'm currently looking for a company with an open, friendly culture that makes aesthetically pleasing, optimized apps. Check out my <a href="https://resume.creddle.io/resume/85r6ww8x3i3" target="_blank">resume</a>, <a href="https://github.com/allie-rae" target="_blank">github</a>, and <a href="https://www.linkedin.com/in/allie-robinson/" target="_blank">linkedin</a> if you'd like to learn more about me.
            </p>
        </div>
        </div>
    )
}

export default Img;
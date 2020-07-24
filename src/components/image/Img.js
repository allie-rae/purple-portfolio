import React from 'react';
import './index.css';

const Img = () => {
    return (
        <div className="img-container">
        <div className="big-img"></div>
        <div className="img-txt">
            <h1>Allie Robinson</h1>
            <h2>Full Stack Software Developer</h2>
            <p className="quote">"Not all those who wander are lost."</p>
            <p className="author">-- J.R.R. Tolkien</p>
            <p className="about-txt">
                I'm an enthusiastic person with a love for creativity and beautiful design. I not only want to make apps that function, I want to make them look gorgeous doing it.
            </p>
            <p className="about-txt">
                I have a Bachelor of Science in General Biology from Washington State University and have studied full stack web development intensively at Lambda School for over a year.
            </p>
            <p className="about-txt">
                I am currently on the market and I'm looking for a company with a laid back, friendly culture that makes aesthetically pleasing, optimized apps. I want to learn and grow and become the best developer I can be.
            </p>
        </div>
        </div>
    )
}

export default Img;
import React from 'react';
import './index.css';
import { render } from '@testing-library/react';

const Navbar = (props) => {

    const handleScroll = (event, refr) => {
        event.preventDefault();
        window.scrollTo({
          top: refr.offsetTop,
          left: 0,
          behavior: 'smooth'
        });
    }

    return (
        <header>
            <nav>
                <button onClick={e => handleScroll(e, props.aboutRef.current)}>About</button>
                <button onClick={e => handleScroll(e, props.projectsRef.current)}>Projects</button>
                <button onClick={e => handleScroll(e, props.contactRef.current)}>Contact</button>
            </nav>
        </header>
    )
}

export default Navbar;
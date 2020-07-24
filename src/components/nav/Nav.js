import React from 'react';
import './index.css';
import { render } from '@testing-library/react';

const Navbar = () => {
    return (
        <header>
            <nav>
                <button href="#">About</button>
                <button href="#">Projects</button>
                <button href="#">Contact</button>
            </nav>
        </header>
    )
}

export default Navbar;
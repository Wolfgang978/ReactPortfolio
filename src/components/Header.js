import React from 'react';
import '../styles/reset.css';
import '../styles/style.css';


function Header() {
  return (
    <header>
    <h1>Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#aboutMe">About Me</a></li>
        <li><a href="#myWork">My Work</a></li>
        <li><a href="#contactMe">Contact Me</a></li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;
